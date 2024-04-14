import React, { useState, useEffect, useCallback } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import { Thumb } from './thumbnail-carousel-thumbs-btns'

import '@/styles/thumbnail-product-carousel.css'

type PropType = {
    slides: number[]
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
                        {slides.map((index) => (
                            <Thumb
                                key={index}
                                onClick={() => onThumbClick(index)}
                                selected={index === selectedIndex}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className="embla-tpc__viewport" ref={emblaMainRef}>
                <div className="embla-tpc__container">
                    {slides.map((index: number) => (
                        <div className="embla-tpc__slide" key={index}>
                            <div className="embla-tpc__slide__number">{index + 1}</div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default ThumbnailProductCarousel;
