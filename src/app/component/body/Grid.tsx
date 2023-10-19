import React from 'react';

const Page = () => {
    return (
        <>
            <div className="md:grid md:grid-cols-4 md:grid-rows-2 gap-4 mt-7 px-5 grid grid-cols-2 sm:px-20">
                {/* First colum */}
                <div className="col-span-1 md:row-span-2 bg-gray-400 flex justify-center items-center mb-1 md:py-36 py-10">Column 1</div>

                {/* Second column */}
                <div className="flex justify-center items-center col-span-1 bg-gray-400 mb-1 py-10">Column 2</div>

                {/* Third column */}
                <div className="flex justify-center items-center col-span-1 bg-gray-400 mb-1 py-10">Column 3</div>

                {/* Fourth column */}
                <div className="flex justify-center items-center col-span-1 bg-gray-400 mb-1 py-10">Column 4</div>

                {/* Fifth column (Row 2) */}
                <div className="flex justify-center items-center col-span-1 bg-gray-400 mb-1 py-10">Column 5</div>

                {/* Sixth column (Row 2) */}
                <div className="flex justify-center items-center col-span-1 bg-gray-400 mb-1 py-10">Column 6</div>
            </div>
        </>
    );
};

export default Page;