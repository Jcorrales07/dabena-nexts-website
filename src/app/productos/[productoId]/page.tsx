"use client"
import {BreadcrumbItem, Breadcrumbs, Button, Image, Input, Link} from "@nextui-org/react";
import {ThumbnailProductCarousel} from "@/components/carousels";
import {EmblaOptionsType} from "embla-carousel";

interface DetalleProductoProps {
    params: {
        productoId: string;
    };
}

const OPTIONS: EmblaOptionsType = {}
const SLIDE_COUNT = 4
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

import {Accordion, AccordionItem} from "@nextui-org/react";

export default function DetalleProducto({params}: DetalleProductoProps) {
    const {productoId: producto} = params;

    const defaultContent =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";


    return (
        <section
            className="w-full flex flex-col lg:items-center lg:px-[64px] lg:py-[80px] px-[20px] py-[48px] gap-[24px] ">

            <section className="w-full">
                <Breadcrumbs color="foreground">
                    <BreadcrumbItem href={"/productos"}>Productos</BreadcrumbItem>
                    <BreadcrumbItem>{producto}</BreadcrumbItem>
                </Breadcrumbs>
            </section>

            <section className="flex flex-col lg:flex-row gap-20 pb-12 w-full">
                <ThumbnailProductCarousel slides={SLIDES} options={OPTIONS}/>

                {/* SECCION DE INFORMACION */}
                <section className="w-full flex flex-col gap-8">
                    <section className="w-full flex flex-col gap-5">
                        <div>
                            <div>
                                <h3 className="text-[32px] lg:text-[40px] font-bold">{producto}</h3>
                                <h5 className="text-xl lg:text-2xl font-bold">L 450</h5>
                            </div>

                            <div>
                                <div>⭐⭐⭐⭐⭐</div>
                                <Link href="#">(4.5 estrellas) - 10 reviews</Link>
                            </div>

                            <p>Descripcion del producto destacado</p>
                        </div>


                        <section>
                            <form action="" method="post" className="flex flex-col gap-6">
                                <fieldset>
                                    <div className="flex flex-col gap-2">
                                        <legend>Variante</legend>
                                        <div className="flex gap-4 flex-wrap">
                                            <Button type="button" radius="none">Opción uno</Button>
                                            <Button type="button" radius="none">Opción dos</Button>
                                            <Button type="button" radius="none">Opción tres</Button>
                                        </div>
                                    </div>
                                </fieldset>

                                <fieldset>
                                    <div className="flex flex-col gap-2">
                                        <legend>Cantidad:</legend>
                                        <Input
                                            type="number"
                                            placeholder="1"
                                            className="w-16"
                                            radius="sm"
                                            min={1}
                                            max={100}
                                        />
                                    </div>
                                </fieldset>

                                <div className="flex flex-col justify-center gap-4">
                                    <Button radius="none">Comprar ahora</Button>
                                    <p className="text-center text-[12px]">Envío gratis por compras mayores a L 1000</p>
                                </div>
                            </form>

                        </section>

                    </section>
                    <section className="">
                        <Accordion>
                            <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1">
                                {defaultContent}
                            </AccordionItem>
                            <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
                                {defaultContent}
                            </AccordionItem>
                            <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
                                {defaultContent}
                            </AccordionItem>
                        </Accordion>
                    </section>
                </section>
            </section>
        </section>
    );
}


//
// <section className="flex flex-row gap-4 h-[640px]">
//     <section className="hidden lg:flex flex-col w-20 gap-4">
//         <Image src="/assets/img1.jpg" alt="as" radius="none"
//                className="object-cover h-[100px]"/>
//         <Image src="/assets/img2.jpg" alt="as" radius="none"
//                className="object-cover h-[100px]"/>
//         <Image src="/assets/img3.jpg" alt="as" radius="none"
//                className="object-cover h-[100px]"/>
//         <Image src="/assets/img4.jpg" alt="as" radius="none"
//                className="object-cover h-[100px]"/>
//     </section>
//
//     {/* Esto tiene que ser un carousel */}
//     <section className="border border-black w-full">
//         <Image src="/assets/img4.jpg" alt="as" radius="none"
//                className="object-cover h-auto"/>
//     </section>
// </section>