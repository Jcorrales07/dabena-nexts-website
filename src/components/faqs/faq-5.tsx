"use client"

import React from 'react';
import {Accordion, AccordionItem} from "@nextui-org/accordion";
import {Button, Link} from "@nextui-org/react";

interface FAQ5Props {
    producto: string;
}

export default function FAQLayout5({producto}: FAQ5Props) {
    const defaultContent =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

    return (
        <section
            className="w-full flex flex-col lg:px-[64px] lg:py-[112px] px-[20px] py-[64px] gap-[48px] lg:gap-[80px]">

            <section className="flex flex-col lg:flex-row gap-6 justify-between">
                <div className="flex flex-col gap-6">
                    <h2 className="text-4xl lg:text-5xl font-bold">Preguntas frecuentes</h2>
                    <p className="text-base lg:text-lg">Encuentra respuestas a las dudas más comunes relacionadas con {producto}</p>
                </div>


            </section>

            <section>
                <Accordion selectionMode="multiple">
                    <AccordionItem key="1" aria-label="Accordion 1" title="¿Cómo usar nuestros productos?">
                        {defaultContent}
                    </AccordionItem>
                    <AccordionItem key="2" aria-label="Accordion 2" title="¿Cuáles son los beneficios?">
                        {defaultContent}
                    </AccordionItem>
                    <AccordionItem key="3" aria-label="Accordion 3" title="¿Hay efectos secundarios?">
                        {defaultContent}
                    </AccordionItem>
                    <AccordionItem key="4" aria-label="Accordion 3" title="¿Son aptos para todos?">
                        {defaultContent}
                    </AccordionItem>
                    <AccordionItem key="5" aria-label="Accordion 3" title="¿Dónde comprar?">
                        {defaultContent}
                    </AccordionItem>
                </Accordion>
            </section>

            <section className="flex flex-col gap-6 items-start">
                <div className={"flex flex-col gap-4"}>
                    <h4 className="text-2xl">¿Tienes preguntas?</h4>
                    <p className="text-base">Contáctanos para obtener más información.</p>
                </div>

                <Button
                    radius="none"
                    className="w-fit border-black"
                    variant="ghost"
                    href={'#contacto'}
                    as={Link}
                >Contacto</Button>
            </section>
        </section>
    );
}