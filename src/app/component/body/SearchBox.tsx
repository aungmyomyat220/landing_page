'use client'
import React, { useState } from 'react';
import Image from "next/image";
import DropDownArrow from "../../../../Image/arrow-down-sign-to-navigate.png";

const SearchBox = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className='mt-7 sm:px-20 px-5 flex'>
            <input
                type="search"
                id="search-dropdown"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-l-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                placeholder="Search Mockups, Logos, Design Templates..."
                required
            />

            <button className="flex justify-center items-center px-5 border border-gray-400" onClick={toggleDropdown}>
                GENE
                <Image src={DropDownArrow} alt='Arrow' className='w-2 h-2 ml-2'></Image>
            </button>
            {isDropdownOpen && (
                <div className="absolute sm:right-40 mt-12 right-20 z-20 py-2 w-48 bg-white border border-gray-100 rounded-lg shadow-lg">
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

            <button
                type="submit"
                className="py-3 px-6 text-sm font-medium h-full text-white bg-gray-400 rounded-r-lg border border-gray-400"
            >
                <svg
                    className="sm:hidden w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                >
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
                <span className='visible sm:inline hidden'>Search</span>
            </button>
        </div>
    );
};

export default SearchBox;
