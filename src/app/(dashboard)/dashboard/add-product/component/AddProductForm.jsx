"use client"
import { useForm } from "react-hook-form";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";


export default function ProductForm() {
    
    const router = useRouter()
    const {data: userData} = useSession()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      // Upload image to imgbb
      const imageFile = data.image[0];
      const formData = new FormData();
      formData.append("image", imageFile);

      const res = await fetch(`https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`, {
        method: "POST",
        body: formData,
      });

      const result = await res.json();
      const imageUrl = result.data.url;

      // Now you can send product data including imageUrl to your backend
      const productData = {
        name: data.name,
        price: data.price,
        category: data.category,
        qty: data.qty,
        description: data.description,
        image: imageUrl,
        seller: {name: userData.user?.name || "anonymous", email: userData?.user?.email}
      };

      console.log("Product Data with URL:", productData);
// ${process.env.NEXTAUTH_URL}
        const sendData = await fetch(`/api/products`, {
        method: "POST",
        body: JSON.stringify(productData),
        headers: {
            "content-type": "application/json"
        }
    })

    const postedProduct = await sendData.json()
    // console.log("posted data", postedProduct)

    if(postedProduct.acknowledged === true) {
                Swal.fire({
                  position: "center",
                  icon: "success",
                  title: "Product added successfully",
                  showConfirmButton: false,
                  timer: 1500,
                });
                router.push("/products");
      reset();
      setPreview(null);
    }


    } catch (error) {
      console.error("Error uploading image:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white shadow-2xl rounded-2xl mt-10">
      <h2 className="text-2xl font-bold text-center mb-6 text-black">
        Add New Product
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <label className="block mb-1 font-semibold">Product Name</label>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            className="w-full px-4 py-2 border rounded-xl text-gray-700" 
            placeholder="Product name"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>

        <div>
          <label className="block mb-1 font-semibold">Product Image</label>
          <input
            type="file"
            accept="image/*"
            {...register("image", { required: "Image is required" })}
            onChange={handleImageChange}
            className="w-full px-3 py-2 border rounded-xl bg-gray-50 text-gray-500"
            placeholder="click to upload product image "
          />
          {preview && <img src={preview} alt="Preview" className="mt-2 w-full h-48 object-cover rounded-xl" />}
          {errors.image && <p className="text-red-500 text-sm">{errors.image.message}</p>}
        </div>

        <div>
          <label className="block mb-1 font-semibold">Price ($)</label>
          <input
            type="number"
            step="0.01"
            {...register("price", {
              required: "Price is required",
              min: { value: 0.1, message: "Price must be greater than 0" },
            })}
            className="w-full px-4 py-2 border rounded-xl text-gray-700"
            placeholder="Product price"
          />
          {errors.price && <p className="text-red-500 text-sm">{errors.price.message}</p>}
        </div>

        <div>
          <label className="block mb-1 font-semibold">Category</label>
          <select
            {...register("category", { required: "Category is required" })}
            className="w-full px-4 py-2 border rounded-xl text-gray-500"
          >
            <option value="">Select a category</option>
            <option value="Shirt">Shirt</option>
            <option value="Jeans">Jeans</option>
            <option value="T-Shirt">T-Shirt</option>
            <option value="shoes">Shoes</option>
            <option value="Blazer">Blazer</option>
            <option value="Hoodie">Hoodie</option>
          </select>
          {errors.category && <p className="text-red-500 text-sm">{errors.category.message}</p>}
        </div>

        <div>
          <label className="block mb-1 font-semibold">Quantity</label>
          <input
            type="number"
            {...register("qty", {
              required: "Quantity is required",
              min: { value: 1, message: "Quantity must be at least 1" },
            })}
            className="w-full px-4 py-2 border rounded-xl"
            placeholder="Product quantity"
          />
          {errors.qty && <p className="text-red-500 text-sm">{errors.qty.message}</p>}
        </div>

        <div>
          <label className="block mb-1 font-semibold">Description</label>
          <textarea
            {...register("description", {
              required: "Description is required",
              minLength: { value: 10, message: "At least 10 characters required" },
            })}
            className="w-full px-4 py-2 border rounded-xl"
            rows="4"
            placeholder="Product description"
          ></textarea>
          {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-red-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl"
        >
          {loading ? "Uploading..." : "Add Product"}
        </button>
      </form>
    </div>
  );
}
