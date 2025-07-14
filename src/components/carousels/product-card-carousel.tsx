import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import {EmblaOptionsType} from "embla-carousel";

import {
    PrevButton,
    NextButton,
    usePrevNextButtons
} from './product-carousel-arrow-btns'
import { DotButton, useDotButton } from './product-carousel-dot-btn'
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";

import '@/styles/product-carousel.css'

export interface SlideItem {
    title: string;
    price: string;
    img: string;
}

type PropType = {
    slides: SlideItem[],
    options?: EmblaOptionsType
}
// =========================================================

const ProductCardCarousel: React.FC<PropType> = (props) => {
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
        <section className="embla-pc">
            <div className="embla-pc__viewport" ref={emblaRef}>
                <div className="embla-pc__container">
                    {slides.map((item, index) => (
                        <Card className={'embla-pc__slide'} shadow="sm" radius="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
                            <CardBody className="overflow-visible p-0">
                                <Image
                                    shadow="sm"
                                    radius="none"
                                    alt={item.title}
                                    className="w-screen object-cover h-full "
                                    src={'/assets/botella-fallback.png'}
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

            <div className="embla-pc__controls">
                <div className="embla-pc__buttons">
                    <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled}/>
                    <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled}/>
                </div>

                <div className="embla-pc__dots">
                    {scrollSnaps.map((_, index) => (
                        <DotButton
                            key={index}
                            onClick={() => onDotButtonClick(index)}
                            className={'embla-pc__dot'.concat(
                                index === selectedIndex ? ' embla-pc__dot--selected' : ''
                            )}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProductCardCarousel;
