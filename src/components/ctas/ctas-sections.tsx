import React from 'react';
import {Button, Image, Link} from "@nextui-org/react";

export default function ExploreCTASection() {
    return (
        <section
            className="w-full flex flex-col lg:flex-row lg:items-center lg:px-[64px] lg:py-[112px] px-[20px] py-[64px] gap-[48px] lg:gap-[80px]">

            <section className="w-full flex flex-col gap-2">
                <section>
                    <h2 className="text-4xl lg:text-5xl font-bold mb-4">Descubre nuestras medicinas naturales</h2>
                    <p className="text-base lg:text-lg">Mejora tu salud de forma natural con nuestros productos de
                        calidad.</p>
                </section>

                <section className="flex gap-4 mt-4">
                    <Button href={"/productos"} as={Link} className="text-white" color="success" radius="sm"
                            variant="solid">Comprar</Button>
                    <Button href={"#contacto"} as={Link} radius="sm"
                            variant="ghost">Contacto</Button>
                </section>
            </section>

            <section>
                <Image src="/assets/img4.jpg" alt="Imagen random" className="w-screen"/>
            </section>

        </section>);
}