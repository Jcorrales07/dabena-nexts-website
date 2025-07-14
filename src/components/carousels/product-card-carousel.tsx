import React, { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel";

import {
    PrevButton,
    NextButton,
    usePrevNextButtons
} from './product-carousel-arrow-btns'
import { DotButton, useDotButton } from './product-carousel-dot-btn'
import { Button, Card, CardBody, CardFooter, Image, Spinner } from "@nextui-org/react";

import '@/styles/product-carousel.css'
import { IoMdTennisball } from "react-icons/io";
import Link from "next/link";

export interface SlideItem {
    id: number;
    title: string;
    price: string;
    img: string;
    onClick?: () => void;
}

type PropType = {
    slides: SlideItem[],
    options?: EmblaOptionsType
}
// =========================================================

const ProductCardCarousel: React.FC<PropType> = ({ slides, options }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(options)
    const [loadingId, setLoadingId] = useState<number | null>(null);

    const { selectedIndex, scrollSnaps, onDotButtonClick } =
        useDotButton(emblaApi)

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    const handleClick = (id: number) => {
        setLoadingId(id); // activa el loading
    };

    return (
        <section className="embla-pc">
            <div className="embla-pc__viewport" ref={emblaRef}>
                <div className="embla-pc__container">
                    {slides.map((item, index) => (
                        <Card className={'embla-pc__slide'} shadow="sm" radius="sm" key={index} isPressable>
                            <CardBody className="overflow-visible p-0">
                                <Image
                                    shadow="sm"
                                    radius="none"
                                    alt={item.title}
                                    className="w-screen h-[340px] object-contain"
                                    src={item.img ? item.img : '/assets/botella-fallback.png'}
                                />
                            </CardBody>
                            <CardFooter className="text-small justify-between">
                                <b>{item.title}</b>
                                <p className="text-default-500">{item.price}</p>
                            </CardFooter>
                            <Button
                                as={Link}
                                href={`/productos/${item.id}`}
                                radius="none"
                                variant="light"
                                className="w-full text-sm font-medium text-primary"
                                isDisabled={loadingId === item.id}
                                onClick={() => handleClick(item.id)}
                            >
                                {loadingId === item.id ? <Spinner size="sm" color="primary" /> : "Ver más información"}
                            </Button>
                        </Card>
                    ))}
                </div>
            </div>

            <div className="embla-pc__controls">
                <div className="embla-pc__buttons">
                    <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                    <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
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
