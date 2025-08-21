import { collectionNames, dbConnect } from '@/lib/dbConnect';
import Image from 'next/image';
import React from 'react';

const HomeProducts = async () => {
    const products = await dbConnect(collectionNames.products).find().toArray()
    // console.log(products)
    return (
        <div className='py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto'>
            <h2 className='text-3xl font-bold text-center'>Highlighted Products</h2>
            <p className="text-center text-lg text-gray-700 mt-3">Explore our recent products and enjoy shopping with Shop Me</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
            {
                products.map(product => {
                    return(
                        <div key={product._id} className='bg-gray-100 rounded-xl'>
                            <Image className='rounded-t-xl' src={product?.image} width={600} height={200}></Image>
                            <div className='space-y-4 p-4'>
                                <div>
                                <span className='px-3 py-1 mb-2 text-xs font-medium bg-cyan-400 rounded-2xl'>{product.category}</span>
                                <h2 className='text-2xl font-bold'>{product.name}</h2>
                                </div>
                                <p className='text-xl font-medium'>Price: ${product.price}</p>
                                <button className='btn rounded-2xl text-lg font-semibold'>View details</button>

                            </div>
                        </div>
                    )
                })
            }
            </div>
        </div>
    );
};

export default HomeProducts;