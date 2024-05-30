"use client"

import React, { useEffect, useState } from 'react';

const Praise = () => {
    const [praise, setPraise] = useState<string>('');

    const handlePraise = (value: string) => {
        setPraise(value);
        localStorage.setItem("Praise", value);
    }

    useEffect(() => {
        const storedPraise = localStorage.getItem("Praise");
        if (storedPraise) {
            setPraise(storedPraise);
        }
    }, [])

    return (
        <div className="mb-4 flex flex-col">
            <label className="mb-0.5 md:text-lg text-[17px] text-neutral-600 md:font-bold font-semibold leading-5 tracking-wide">Praise</label>
            <small className='text-neutral-500 mb-2 font-medium'>Lorem ipsum dolor sit amet sit is?</small>
            <div className="flex md:gap-4 gap-3 mt-1.5 flex-wrap">
                <button type='button' onClick={() => handlePraise('good')} className={` text-neutral-600 md:font-semibold font-medium  py-2 px-3 md:px-4 text-sm md:text-base rounded-full ${praise === 'good' ? 'bg-green-200 border border-green-400' : 'bg-gray-100 hover:bg-gray-300 border border-gray-400/0'}`}>Good</button>

                <button type='button' onClick={() => handlePraise('great')} className={` text-neutral-600 md:font-semibold font-medium  py-2 px-3 md:px-4 text-sm md:text-base rounded-full ${praise === 'great' ? 'bg-green-200 border border-green-400 border-opacity-100' : 'bg-gray-100 hover:bg-gray-300 border border-gray-400/0'}`}>Great</button>
                <button type='button' onClick={() => handlePraise('excellent')} className={` text-neutral-600 md:font-semibold font-medium  py-2 px-3 md:px-4 text-sm md:text-base rounded-full duration-200 ease-in ${praise === 'excellent' ? 'bg-green-200 border border-green-400' : 'bg-gray-100 hover:bg-gray-300 border border-gray-400/0'}`}>Excellent</button>
            </div>
        </div>
    )
}

export default Praise