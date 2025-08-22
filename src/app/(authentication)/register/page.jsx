import React from 'react';
import RegisterForm from '../authenticationComponents/RegisterForm';

const page = () => {
    return (
        <div className='grid grid-cols-1 justify-between items-center gap-6 max-w-2xl mx-auto p-4 sm:px-6 lg:px-8 my-16'>
            <div className='border border-gray-300 rounded-2xl shadow-lg p-6 sm:p-10 lg:p-16'>
                <h2 className='text-2xl md:text-3xl font-bold mb-10 text-gray-800 text-center'>
                    Sign Up
                </h2>
                <RegisterForm />
            </div>
            {/* <Image className='max-w-[400px] w-full justify-self-end' src={'/assets/icons/Frame.svg'} width={400} height={400} alt='sign up animation'/> */}
        </div>
    );
};

export default page;