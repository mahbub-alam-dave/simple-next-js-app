import Image from 'next/image';
import React from 'react';
import { FiPlus, FiMinus } from "react-icons/fi";

const page = async({params}) => {

    const p = await params;
    const res = await fetch(`${process.env.NEXTUTH_URL}/api/products/${p.id}`)
    const product = await res.json()

    return (
        <div className='min-h-[75vh] py-16 px-4 sm:px-6 lg:px-8 '>
            <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:items-center'>
                <Image className='rounded-xl w-full h-[460px] object-cover' src={product.image} width={500} height={200} alt={product.name}></Image>
                <div className='flex flex-col items-start gap-4'>
                    <div className='space-y-4'>
                    <span className='px-3 py-1 rounded-full bg-gray-200'> {product.category}</span>
                    <h2 className='text-3xl font-bold '>{product.name}</h2>
                    </div>
                    <p className='text-lg font-semibold'>Price: ${product.price}</p>
                    <span>Ratings: {product.rating}</span>
                    <span><span className='font-semibold'>{product.qty || 0}</span> products remaining</span>
                    <p className='text-lg'>{product.description}</p>
                    <div className='flex gap-1'>
                    <button className='btn'><FiPlus /></button>
                    <input className='border rounded-sm text-center text-lg max-w-[80px] border-gray-300' type="number" defaultValue={0} />
                    <button className='btn'><FiMinus /></button>
                    </div>
                    <button className='px-6 py-3 rounded-full bg-red-600 text-white'>Buy Now </button>
                </div>
            </div>
        </div>
    );
};

export default page;