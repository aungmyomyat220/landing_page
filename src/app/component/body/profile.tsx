import React from 'react';
import Image from "next/image";
import profile from '../../../../Image/dummy-image.jpg'
const Page = () => {
    const arr = [
        {
            title : "Lorem1",
            content : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        },
        {
            title : "Lorem2",
            content : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        },
        {
            title : "Lorem3",
            content : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        }
    ]
    return (
        <div className='justify-center mt-7 bg-gray-400 px-6 sm:mx-0 mx-5 flex flex-col sm:flex-row'>
            {arr.map((item ,index) => (
                <div key={index} className='flex flex-col justify-center items-center py-10 mb-2 sm:py-20 px-10'>
                    <Image src={profile} alt={item.title} className='w-24 h-24 rounded-full'></Image>
                    <span className='py-6'>{item.title}</span>
                    <span className='text-center'>{item.content}</span>
                </div>
            ))}
        </div>
    );
};

export default Page;