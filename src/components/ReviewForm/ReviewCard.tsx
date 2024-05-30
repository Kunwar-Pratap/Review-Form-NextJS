"use client"

import { motion } from 'framer-motion'
import React from 'react'
import { IReviewCard } from '../../../common.types'

const ReviewCard = ({ children }: IReviewCard) => {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 20,
            }}
            animate={{
                opacity: 1,
                y: [20, -5, 0],
            }}
            transition={{
                duration: 0.5,
                ease: [0.4, 0.0, 0.2, 1],
            }}
            viewport={{ once: false }}
            className="bg-white py-8 sm:px-3 md:px-4 px-2 rounded-3xl shadow-md max-w-[300px] md:max-w-[340px] w-full z-50">
            <h1 className="text-xl xl:text-2xl font-bold mb-4 text-neutral-800">Leave a Review</h1>
            {children}
        </motion.div>
    )
}

export default ReviewCard