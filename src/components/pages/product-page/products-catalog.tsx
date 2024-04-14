"use client"

import React, {useState, useEffect} from 'react';
import {Button, Card, CardBody, CardFooter, CardHeader, Image, Link} from "@nextui-org/react";

function ProductsCatalog() {
    const [cantProducts, setCantProducts] = useState(6);
    const [clicked, setClicked] = useState(false);
    const [isClient, setIsClient] = useState(false);

    const handleButtonClick = () => {
        // Cuando le doy click, me debe de scrollear al primer producto nuevo que despliega, asi se que ya se muestran
        setClicked(prevState => !prevState);
        clicked ? setCantProducts(6) : setCantProducts(12);
    };

    useEffect(() => {
        setIsClient(true)
    }, []);

    return (
        <section
            className="w-full flex flex-col lg:px-[64px] lg:py-[112px] px-[20px] py-[64px] gap-[48px] lg:gap-[80px]">
            <section className="flex flex-col lg:flex-row gap-6 justify-between">
                <div className="flex flex-col gap-6">
                    <p className="text-base lg:text-lg font-bold">Medicinas</p>
                    <h2 className="text-4xl lg:text-5xl font-bold">Productos</h2>
                    <p className="text-base lg:text-lg">Explora nuestra amplia selección de medicinas naturales que
                        tenemos
                        para ti!</p>
                </div>

                <section className="flex items-end">
                    <Button
                        radius="none"
                        className="w-fit"
                        variant="ghost"
                        onClick={handleButtonClick}
                    >
                        {clicked ? 'Mostrar menos' : 'Mostrar más'}
                    </Button>
                </section>
            </section>

            <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                {[...Array(cantProducts)].map((_, index) => (
                    <Card key={index} className="w-full" radius="none">
                        <CardHeader className="p-0">
                            <Image
                                alt="nextui logo"
                                radius="none"
                                src="/assets/frasco-vigo.png"
                                className="w-screen h-[486.4px] object-cover"
                            />
                        </CardHeader>
                        <CardBody>
                            <section className="flex justify-between">
                                <section>
                                    <p className="font-bold text-base lg:text-lg">Nombre del Producto</p>
                                    <p className="text-sm">Cantidad en ml/kg</p>
                                </section>

                                <p className="font-bold text-lg lg:text-xl">L350</p>
                            </section>
                        </CardBody>
                        <CardFooter>
                            {isClient && <Button href={`productos/${index}`} as={Link} radius="none" variant="ghost" className="w-full text-base">Comprar
                                ahora</Button>}

                        </CardFooter>
                    </Card>
                ))}
            </main>
        </section>
    );
}

export default ProductsCatalog;
