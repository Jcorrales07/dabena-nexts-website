import React from 'react';
import {Button, Link} from "@nextui-org/react";

function CTALayout13() {
    return (
        <section id={"contacto"}
            className="w-full flex flex-col lg:flex-row lg:items-center lg:px-[64px] lg:py-[112px] px-[20px] py-[64px] gap-[48px] lg:gap-[80px]">

            <section className="flex-1">
                <h2 className="text-4xl lg:text-5xl font-bold">Conviértete en mayorista hoy!</h2>
            </section>

            <section className="flex-1 flex flex-col gap-6">
                <p className="text-base lg:text-lg">Descubre cómo puedes obtener grandes descuentos al convertirte en mayorista de nuestros productos naturales.</p>
                <div className="flex gap-4">
                    <Button radius="sm" href="#requisitos" as={Link}>Requisitos</Button>
                    <Button radius="sm" href="#aplicacion" as={Link}>Quiero Aplicar!</Button>
                </div>
            </section>
        </section>
    );
}

export default CTALayout13;