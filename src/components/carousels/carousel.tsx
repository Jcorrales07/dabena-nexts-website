"use client"

// Image carousel
import {Image} from "@nextui-org/react";
// @ts-ignore
import {Splide, SplideSlide} from '@splidejs/react-splide';


import '@/styles/splide-lightgreen.css'
// ===

// Product carousel
import React from 'react'
import { DotButton, useDotButton } from './product-carousel-dot-btn'
import {
    PrevButton,
    NextButton,
    usePrevNextButtons
} from './product-carousel-arrow-btns'
import useEmblaCarousel from 'embla-carousel-react'


import '@/styles/product-carousel.css'
import {Button, Card, CardBody, CardFooter, CardHeader} from "@nextui-org/react";
import {EmblaOptionsType} from "embla-carousel";
// ===


export function ImageCarousel() {
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


export interface SlideItem {
    title: string;
    price: string;
    img: string;
}

type PropType = {
    slides: SlideItem[],
    options?: EmblaOptionsType
}

export const ProductCarousel: React.FC<PropType> = (props) => {
    const { slides, options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options)

    const { selectedIndex, scrollSnaps, onDotButtonClick } =
        useDotButton(emblaApi)

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    return (
        <section className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {slides.map((item, index) => (
                        <Card className={'embla__slide'} shadow="sm" radius="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
                            <CardBody className="overflow-visible p-0">
                                <Image
                                    shadow="sm"
                                    radius="none"
                                    alt={item.title}
                                    className="w-screen object-cover h-full"
                                    src={'/assets/frasco-vigo.png'}
                                />
                            </CardBody>
                            <CardFooter className="text-small justify-between">
                                <b>{item.title}</b>
                                <p className="text-default-500">{item.price}</p>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>

            <div className="embla__controls">
                <div className="embla__buttons">
                    <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled}/>
                    <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled}/>
                </div>

                <div className="embla__dots">
                    {scrollSnaps.map((_, index) => (
                        <DotButton
                            key={index}
                            onClick={() => onDotButtonClick(index)}
                            className={'embla__dot'.concat(
                                index === selectedIndex ? ' embla__dot--selected' : ''
                            )}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
