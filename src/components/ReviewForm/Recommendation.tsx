"use client"

import React, { useEffect, useState } from 'react';
import { MdThumbDownAlt, MdThumbUpAlt } from "react-icons/md";

const Recommendation = () => {
    const [recommendation, setRecommendation] = useState<string>('');

    const handleRecommendation = (value: string) => {
        setRecommendation(value);
        localStorage.setItem("Recommendation", value);
    }

    useEffect(() => {
        const storedRecommendation = localStorage.getItem("Recommendation");
        if (storedRecommendation) {
            setRecommendation(storedRecommendation);
        }
    }, [])

    return (
        <div className="mb-4 flex flex-col">
            <label className="mb-0.5 md:text-lg text-[17px] text-neutral-600 md:font-bold font-semibold leading-5 tracking-wide">Would you recommend Trausti?</label>
            <small className='text-neutral-500 mb-2 font-medium'>Lorem ipsum dolor sit amet sit is on.</small>
            <div className="flex items-center">
                <div className='flex gap-16 justify-center items-center'>
                    <span onClick={() => handleRecommendation('no')} className="cursor-pointer flex gap-2">
                        <MdThumbDownAlt className={`text-3xl ${recommendation === 'no' ? 'text-red-500' : 'text-neutral-300'}`} />
                        <span className={`text-sm font-semibold ${recommendation === 'no' ? 'text-red-500' : 'text-neutral-600'}`}>No</span>

                    </span>
                    <span onClick={() => handleRecommendation('yes')} className="mr-4 cursor-pointer flex gap-2 justify-center items-center">
                        <MdThumbUpAlt className={`text-3xl ${recommendation === 'yes' ? 'text-green-600' : 'text-neutral-300'}`} />
                        <span className={`text-sm font-semibold ${recommendation === 'yes' ? 'text-green-500' : 'text-neutral-600'}`}>Yes</span>
                    </span>

                </div>
            </div>
        </div>
    )
}

export default Recommendation