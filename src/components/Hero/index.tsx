import React from 'react'
import { THero } from '../../../common.types'

const Hero = ({ children }: THero) => {
    return (
        <div className="relative flex items-center justify-center min-h-screen overflow-hidden bg-[#33BBC5] px-3 sm:px-0">
            <div className="absolute top-0 left-0 w-full">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#006769" fillOpacity="1" d="M0,0L80,26.7C160,53,320,107,480,106.7C640,107,800,53,960,69.3C1120,85,1280,171,1360,213.3L1440,256L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
                </svg>
            </div>
            <div className="relative flex flex-col items-center justify-center w-full h-full">
                {children}
            </div>
            <div className="absolute bottom-0 left-0 w-full transform rotate-180">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#006769" fillOpacity="1" d="M0,0L80,26.7C160,53,320,107,480,106.7C640,107,800,53,960,69.3C1120,85,1280,171,1360,213.3L1440,256L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
                </svg>
            </div>
        </div>
    )
}

export default Hero