import React from 'react';
import {Button, Link} from "@nextui-org/react";

function HeaderLayout47() {
    return (
        <section
            className="w-full flex flex-col lg:px-[64px] lg:py-[112px] px-[20px] py-[64px] gap-[48px] lg:gap-[80px]">

            <section className="flex flex-col lg:flex-row gap-20">
                <div className="flex-1 flex flex-col gap-4">
                    <p className="text-base font-semibold">Bienestar</p>
                    <h1 className="text-4xl lg:text-5xl font-bold">Encuentra tus puntos</h1>
                </div>

                <div className="flex-1 flex flex-col gap-6">
                    <p>Descubre los puntos de venta más cercanos a ti y adquiere nuestros productos naturales para
                        mejorar tu salud y bienestar.</p>

                    <div>
                        <Button radius="sm" className="mr-4" href={"#maps"} as={Link}>Buscar</Button>
                        <Button radius="sm">Más información</Button>
                    </div>
                </div>
            </section>
        </section>
    );
}

export default HeaderLayout47;