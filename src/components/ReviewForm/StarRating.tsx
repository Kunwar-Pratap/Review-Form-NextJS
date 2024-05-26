"use client"

import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { IStarRating } from '../../../common.types';

const StarRating = ({ totalStarsValue, localStorageName }: IStarRating) => {
    const [rating, setRating] = useState(0);

    useEffect(() => {
        const storedRating = localStorage.getItem(localStorageName);
        if (storedRating) {
            setRating(parseInt(storedRating));
        }
    }, [localStorageName]);

    const handleRating = (idx: number) => {
        const updateRating = idx + 1;
        setRating(updateRating);
        localStorage.setItem(localStorageName, updateRating.toString());
    }

    return (
        <div className='flex items-center gap-0.5'>
            {[...Array(totalStarsValue)].map((_, idx) => (
                <FaStar
                    key={idx}
                    className={`${idx < rating ? 'text-yellow-400' : 'text-neutral-300'} cursor-pointer xl:text-[22px] text-xl`}
                    onClick={() => handleRating(idx)}
                />
            ))}
        </div>
    )
}

export default StarRating