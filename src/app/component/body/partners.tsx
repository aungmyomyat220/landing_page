import React from 'react';

const Partners = () => {
    return (
        <div className='mt-10 flex flex-col items-center mx-5 md:mx-20'>
            <h2 className='text-2xl font-bold mb-4'>Our Partners</h2>
            <div className='grid grid-cols-2 sm:grid-rows-2 sm:grid-cols-8 gap-4 w-full'>
                <div className='bg-gray-400 text-white p-4 text-center col-span-2 py-10'>
                    <p className='font-semibold'>Partner1</p>
                </div>
                <div className='bg-gray-400 text-white p-4 text-center col-span-2 py-10'>
                    <p className='font-semibold'>Partner2</p>
                </div>
                <div className='bg-gray-400 text-white p-4 text-center col-span-2 py-10'>
                    <p className='font-semibold'>Partner3</p>
                </div>
                <div className='bg-gray-400 text-white p-4 text-center col-span-2 py-10'>
                    <p className='font-semibold'>Partner4</p>
                </div>
                <div className='bg-gray-400 text-white p-4 text-center sm:col-start-2 col-span-2 py-10'>
                    <p className='font-semibold'>Partner5</p>
                </div>
                <div className='bg-gray-400 text-white p-4 text-center col-span-2 py-10'>
                    <p className='font-semibold'>Partner6</p>
                </div>
                <div className='bg-gray-400 text-white p-4 text-center col-span-2 py-10'>
                    <p className='font-semibold'>Partner7</p>
                </div>
            </div>
        </div>
    );
};

export default Partners;
