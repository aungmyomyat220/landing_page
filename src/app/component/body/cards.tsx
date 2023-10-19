import React from 'react';
const TrendingNow = () => {
    const cards = [
        {
            title : "Lorem1",
            content : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
            footer : "Lorem Ipsum is simply dummy text"
        },
        {
            title : "Lorem2",
            content : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
            footer : "Lorem Ipsum is simply dummy text"
        },
        {
            title : "Lorem3",
            content : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
            footer : "Lorem Ipsum is simply dummy text"
        }
    ]
    return (
        <div className='mt-12 flex flex-col items-center mx-5 sm:mx-20'>
            <div>
                <h2 className='text-2xl font-bold'>Trending Now</h2>
            </div>
            <div className='flex flex-col sm:flex-row w-full mt-5'>
                {cards.map((card,index)=> (
                    <div className=' sm:w-1/3 flex flex-col sm:mr-2' key={index}>
                        <span className='bg-gray-400 text-white font-bold text-2xl w-full h-52 flex items-center justify-center'>Card{index+1}</span>
                        <span>{card.title}</span>
                        <span className='mt-3'>{card.content}</span>
                        <span className='mt-4'>{card.footer}</span>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default TrendingNow;