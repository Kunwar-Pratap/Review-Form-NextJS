import React from 'react';
import Hero from '../Hero';
import Praise from './Praise';
import Recommendation from './Recommendation';
import ReviewCard from './ReviewCard';
import StarRating from './StarRating';

const ReviewForm = () => {

    return (
        <Hero>
            <ReviewCard>
                <form>
                    <div className="mb-4 flex flex-col">
                        <label className="mb-0.5 md:text-lg text-[17px] text-neutral-600 font-semibold md:font-bold leading-5 tracking-wide">Safety</label>
                        <small className='text-neutral-500 mb-2 font-medium'>Lorem ipsum dolor sit amet.</small>
                        <StarRating
                            localStorageName={"Safety Rating"}
                            totalStarsValue={5}
                        />
                    </div>
                    <div className="mb-4 flex flex-col">
                        <label className="mb-0.5 md:text-lg text-[17px] text-neutral-600 font-semibold md:font-bold leading-5 tracking-wide">Communication</label>
                        <small className='text-neutral-500 mb-2 font-medium'>Lorem ipsum dolor sit amet.</small>
                        <StarRating
                            localStorageName={"Communication Rating"}
                            totalStarsValue={5}
                        />
                    </div>
                    <Recommendation />
                    <Praise />
                </form>
            </ReviewCard>
        </Hero>
    )
}

export default ReviewForm