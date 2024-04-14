"use client"
import React from 'react'

import {Image} from "@nextui-org/react";
// @ts-ignore
import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@/styles/splide-lightgreen.css'
// =========================================================

export default function ImageCarousel() {
    return (
        <main className="splide_carousel">
            <Splide aria-label="Image Carousel" options={{
                type: 'fade',
                rewind: true,
                autoplay: true,
            }}>
                <SplideSlide>
                    <Image src="/assets/2.png" alt="Image 1" radius='none' className='h-svh w-screen object-cover' />
                </SplideSlide>
                <SplideSlide>
                    <Image src="/assets/3.png" alt="Image 1" radius='none' className='h-svh w-screen object-cover' />
                </SplideSlide>
                <SplideSlide>
                    <Image src="/assets/4.png" alt="Image 1" radius='none' className='h-svh w-screen object-cover' />
                </SplideSlide>
            </Splide>
        </main>
    );
}