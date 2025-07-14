import React, { useState, useEffect, useCallback } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import { Thumb } from './thumbnail-carousel-thumbs-btns'
import { Image } from "@nextui-org/react";

import '@/styles/thumbnail-product-carousel.css'

type PropType = {
    slides: string[] // Cambiado de number[] a string[] para URLs de imágenes
    options?: EmblaOptionsType
}

const ThumbnailProductCarousel: React.FC<PropType> = (props) => {
    const { slides, options } = props
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options)
    const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
        containScroll: 'keepSnaps',
        dragFree: true
    })

    const onThumbClick = useCallback(
        (index: number) => {
            if (!emblaMainApi || !emblaThumbsApi) return
            emblaMainApi.scrollTo(index)
        },
        [emblaMainApi, emblaThumbsApi]
    )

    const onSelect = useCallback(() => {
        if (!emblaMainApi || !emblaThumbsApi) return
        setSelectedIndex(emblaMainApi.selectedScrollSnap())
        emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap())
    }, [emblaMainApi, emblaThumbsApi, setSelectedIndex])

    useEffect(() => {
        if (!emblaMainApi) return
        onSelect()
        emblaMainApi.on('select', onSelect)
        emblaMainApi.on('reInit', onSelect)
    }, [emblaMainApi, onSelect])

    return (
        <div className="embla-tpc">
            <div className="embla-tpc-thumbs">
                <div className="embla-tpc-thumbs__viewport" ref={emblaThumbsRef}>
                    <div className="embla-tpc-thumbs__container">
                        {slides.map((slide, index) => (
                            slide !== null ?
                            <Thumb
                                key={index}
                                onClick={() => onThumbClick(index)}
                                selected={index === selectedIndex}
                                index={index}
                                imageUrl={slide} // Pasamos la URL de la imagen
                            /> : <></>
                        ))}
                    </div>
                </div>
            </div>

            <div className="embla-tpc__viewport" ref={emblaMainRef}>
                <div className="embla-tpc__container">
                    {slides.map((slide: string, index: number) => (
                        slide !== null ?
                        <div className="embla-tpc__slide flex justify-center" key={index}>
                            <Image
                                src={slide}
                                alt={`Producto vista ${index + 1}`}
                                className="embla-tpc__slide__img h-[600px] object-contain"
                                fallbackSrc="/assets/botelladefault.png"
                                loading='eager'
                            />
                        </div>
                        : <></>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ThumbnailProductCarousel;