import React from 'react';
import Image from "next/image";
import GooglePlayStore from '../../../../Image/playstore.png'
import AppStore from '../../../../Image/app-store.png'
import Facebook from '../../../../Image/facebook.png'
import LinkedIn from '../../../../Image/linkedin.png'
import Twitter from '../../../../Image/twitter.png'
import App from "next/app";
const Page = () => {
    return (
        <div className='w-full mt-14 bg-gray-300 grid grid-cols-2 sm:grid-cols-4 px-16'>
            <div className='w-full flex flex-col py-10 mr-5 '>
                <span className='text-xl font-bold'>Logo</span>
                <span className='font-medium mt-2'>Shogan</span>
                <div className='flex flex-col mt-24'>
                    <span className='text-xl font-bold'>Contact</span>
                    <span className='font-medium mt-2'>09973940196</span>
                    <span className='font-medium'>09763849763</span>
                </div>
            </div>

            <div className='w-full flex flex-col text-left py-10 ml-5 sm:ml-0 '>
                <span className='text-xl font-bold'>Quick Links</span>
                <div className='mt-3 flex flex-col'>
                    <span className='font-medium '>Home</span>
                    <span className='font-medium mt-2'>Concerts</span>
                    <span className='font-medium mt-2'>Arts</span>
                    <span className='font-medium mt-2'>Sports</span>
                    <span className='font-medium mt-2'>Funs</span>
                    <span className='font-medium mt-2'>Night</span>
                </div>
            </div>

            <div className='w-full flex flex-col text-left py-10 '>
                <span className='text-xl font-bold'>Others</span>
                <div className='mt-3 flex flex-col'>
                    <span className='font-medium '>Support</span>
                    <span className='font-medium mt-2'>Terms and Conditions</span>
                    <span className='font-medium mt-2'>Privacy Policy</span>
                    <span className='font-medium mt-2'>FAQs</span>
                    <span className='font-medium mt-2'>Carrier</span>
                </div>
            </div>

            <div className='w-full flex flex-col text-left py-10 ml-5 sm:ml-0'>
                <div>
                    <span className='text-xl font-bold'>Follow us on</span>
                    <div className='mt-4 flex'>
                        <span><Image src={Facebook} alt='Facebook' className='w-10 h-10 mr-2 '></Image></span>
                        <span><Image src={LinkedIn} alt='Facebook' className='w-10 h-10 mr-2'></Image></span>
                        <span><Image src={Twitter} alt='Facebook' className='w-10 h-10'></Image></span>
                    </div>
                </div>
                <div className='flex flex-col mt-10'>
                    <span className='text-xl font-bold'>Download From</span>
                    <div className='font-medium mt-2 grid grid-cols-4 bg-black text-white rounded-lg px-3 py-1'>
                        <div className='flex items-center justify-center'>
                            <Image src={GooglePlayStore} alt='playstore' className='w-10 h-10'></Image>
                        </div>
                        <div className='flex flex-col col-span-3'>
                            <span>Download from</span>
                            <span>Google Play Store</span>
                        </div>
                    </div>
                    <div className='font-medium mt-2 grid grid-cols-4 bg-black text-white rounded-lg px-3 py-1'>
                        <div className='flex items-center justify-center'>
                            <Image src={AppStore} alt='playstore' className='w-10 h-10'></Image>
                        </div>
                        <div className='flex flex-col col-span-3'>
                            <span>Download from</span>
                            <span>App Store</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;