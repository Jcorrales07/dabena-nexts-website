import React from 'react';
import {ProductCardCarousel, SlideItem} from "@/components/carousels/";

const OPTIONS = {dragFree: true}
const SLIDE_COUNT = 12
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const list: SlideItem[] = [
    {
        title: "Orange",
        img: "/assets/img1.jpg",
        price: "$5.50",
    },
    {
        title: "Tangerine",
        img: "/assets/img2.jpg",
        price: "$3.00",
    },
    {
        title: "Raspberry",
        img: "/assets/img3.jpg",
        price: "$10.00",
    },
    {
        title: "Lemon",
        img: "/assets/img4.jpg",
        price: "$5.30",
    },
    {
        title: "Avocado",
        img: "/assets/img5.jpg",
        price: "$15.70",
    },
    {
        title: "Lemon 2",
        img: "/assets/img1.jpg",
        price: "$8.00",
    },
    {
        title: "Banana",
        img: "/assets/img3.jpg",
        price: "$7.50",
    },
    {
        title: "Watermelon",
        img: "/assets/img2.jpg",
        price: "$12.20",
    },
];

const ProductCarouselSection = () => {
    return (
        <section
            className="lg:px-[64px] lg:py-[112px] px-[20px] py-[64px] w-full flex flex-col">

            <div className={'flex flex-col gap-[80px]'}>

                <section>
                    <h2 className="text-4xl lg:text-5xl font-bold mb-4">Productos Destacados</h2>
                    <p className="text-base lg:text-lg">Descubre lo mas querido por nuestros clientes!</p>
                </section>

                {/*Personalizar las targetas de los productos*/}
                <ProductCardCarousel slides={list} options={OPTIONS}/>
            </div>
        </section>
    );
};

export default ProductCarouselSection;
