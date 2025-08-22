import { collectionNames, dbConnect } from '@/lib/dbConnect';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const HomeProducts = async () => {
    const products = await dbConnect(collectionNames.products).find().limit(6).toArray()
    // console.log(products)
    return (
        <div className='py-16 px-4 sm:px-6 lg:px-8 '>
            <div className='max-w-7xl mx-auto flex flex-col items-center'>
            <h2 className='text-3xl font-bold text-center'>Highlighted Products</h2>
            <p className="text-center text-lg text-gray-700 mt-3">Explore our recent products and enjoy shopping with Shop Me</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
            {
                products.map(product => {
                    return(
                        <div key={product._id} className='bg-gray-100 rounded-xl'>
                            <Image className='rounded-t-xl' src={product?.image} width={600} height={200} alt={product.name}></Image>
                            <div className='space-y-4 p-4'>
                                <div>
                                <span className='px-3 py-1 mb-2 text-xs font-medium bg-cyan-400 rounded-2xl'>{product.category}</span>
                                <h2 className='text-2xl font-bold'>{product.name}</h2>
                                </div>
                                <p className='text-xl font-medium'>Price: ${product.price}</p>
                                <Link href={`/products/${product._id}`}>
                                <button className='px-6 py-2 bg-gray-50 cursor-pointer border border-gray-400 rounded-full text-lg font-semibold'>View details</button>
                                </Link>

                            </div>
                        </div>
                    )
                })
            }
            </div>
            <Link href={'/products'} className='mt-10'>
            <button className='px-6 py-3 rounded-full cursor-pointer text-lg font-semibold bg-red-600 text-white'>Explore All</button>
            </Link>
            </div>
        </div>
    );
};

export default HomeProducts;