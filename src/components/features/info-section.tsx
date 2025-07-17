"use client"
import {Button, Image, Link} from "@nextui-org/react";
import React from "react";

interface InfoSectionProps {
    direction: string;
    title: string;
    subtext: string;
    img_url: string;
    img_alt: string;
}

export default function InfoSection({direction, title, subtext, img_url, img_alt}: InfoSectionProps): JSX.Element {
    return (<section
        className={`w-full flex flex-col ${direction === "nvrt" ? 'lg:flex-row-reverse' : 'lg:flex-row'} lg:items-center lg:px-[64px] lg:py-[112px] px-[20px] py-[64px] gap-[48px] lg:gap-[80px]`}>
        <section className="w-full flex flex-col gap-2">
            <section>
                <h3 className="text-[32px] leading-10 lg:text-[40px] font-bold mb-4">{title}</h3>
                <p className="text-lg">{subtext}</p>
            </section>

            <section className="flex gap-4 mt-4">
                <Button href={"/productos"} as={Link} className="text-white" color="success" radius="sm"
                        variant="solid">Ver Productos</Button>
                <Button href={"#contacto"} as={Link} radius="sm"
                        variant="ghost">Contacto</Button>
            </section>
        </section>

        <section>
            <Image src={img_url} alt={img_alt} className="w-screen" radius={'sm'}/>
        </section>
    </section>);
}