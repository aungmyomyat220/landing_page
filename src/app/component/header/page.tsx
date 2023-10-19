'use client'
import React, { useState } from 'react';
import 'flowbite';
import DropDownArrow from '../../../../Image/arrow-down-sign-to-navigate.png'
import Image from "next/image";

const Page = () => {
    const [languageDropdownVisible, setLanguageDropdownVisible] = useState(false);

    const toggleLanguageDropdown = () => {
        setLanguageDropdownVisible(!languageDropdownVisible);
    };

    return (
        <nav className="bg-white dark:bg-gray-900 dark:border-gray-700 border-b border-gray-700 sm:px-16">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#" className="flex items-center">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                </a>
                <button
                    data-collapse-toggle="navbar-dropdown"
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-dropdown"
                    aria-expanded="false"
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto " id="navbar-dropdown">
                    <ul className="flex flex-col items-center font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                Support
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover-bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover-text-blue-500 dark:hover-bg-gray-700 dark:hover-text-white md:dark-hover-bg-transparent">
                                Your Ticket
                            </a>
                        </li>
                        <li>
                            <button className="bg-gray-300 px-3 py-1 rounded-lg">
                                Sign In
                            </button>
                        </li>
                        <li>
                            <div className="relative">
                                <button className="rounded-lg flex justify-center items-center" onClick={toggleLanguageDropdown}>
                                    EN
                                    <Image src={DropDownArrow} alt='Arrow' className='w-2 h-2 ml-2'></Image>
                                </button>
                                {languageDropdownVisible && (
                                    <div className="absolute right-0 mt-2 z-20 py-2 w-48 bg-white border border-gray-100 rounded-lg shadow-lg">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                                            English
                                        </a>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                                            Spanish
                                        </a>
                                        <a href="#" className="block px-4 py-2 hover-bg-gray-100">
                                            French
                                        </a>
                                    </div>
                                )}
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Page;