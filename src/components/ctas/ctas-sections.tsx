import React from 'react';
import {Button, Card, CardBody, CardFooter, CardHeader, Image, Link} from "@nextui-org/react";
import {DabenaLogo} from "@/components/svgs/dabena-logo";

export function ExploreCTASection() {
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

interface InfoSectionProps {
    direction: string;
    title: string;
    subtext: string;
    img_url: string;
    img_alt: string;
}

export function InfoSection({direction, title, subtext, img_url, img_alt}: InfoSectionProps): JSX.Element {
    return <section
        className={`w-full flex flex-col ${direction === "nvrt" ? 'lg:flex-row-reverse' : 'lg:flex-row'} lg:items-center lg:px-[64px] lg:py-[112px] px-[20px] py-[64px] gap-[48px] lg:gap-[80px]`}>
        <section className="w-full flex flex-col gap-2">
            <section>
                <h3 className="text-[32px] leading-10 lg:text-[40px] font-bold mb-4">{title}</h3>
                <p className="text-lg">{subtext}</p>
            </section>

            <section className="flex gap-4 mt-4">
                <Button href={"/productos"} as={Link} className="text-white" color="success" radius="sm"
                        variant="solid">Comprar</Button>
                <Button href={"#contacto"} as={Link} radius="sm"
                        variant="ghost">Contacto</Button>
            </section>
        </section>

        <section>
            <Image src={img_url} alt={img_alt} className="max-w-[560px]" radius={'sm'}/>
        </section>
    </section>
}

export function BenefitSection() {
    return (
        <section
            className={'w-full flex flex-col lg:flex-row lg:px-[64px] lg:py-[112px] px-[20px] py-[64px] gap-[48px]'}>

            <Card shadow={"none"} radius={"none"} className="bg-transparent">
                <CardHeader className="flex justify-center">
                    <DabenaLogo size={30}/>
                </CardHeader>
                <CardBody className={'p-0'}>
                    <section className="flex flex-col justify-center">
                        <h4 className="text-2xl lg:text-4xl font-bold mb-4 text-center">Beneficios clave y diferenciadores</h4>
                        <p className="text-base text-center">Nuestros productos naturales ofrecen soluciones efectivas y seguras para tu salud.</p>
                    </section>
                </CardBody>
                <CardFooter className="flex justify-center">
                    <section className="flex gap-4 mt-4">
                        <Button href={"/productos"} as={Link} className="text-white" color="success" radius="sm"
                                variant="solid">Comprar</Button>
                        <Button href={"#contacto"} as={Link} className="" radius="sm"
                                variant="ghost">Contacto</Button>
                    </section>
                </CardFooter>
            </Card>

            <Card shadow={"none"} radius={"none"} className="bg-transparent">
                <CardHeader className="flex justify-center">
                    <DabenaLogo size={30}/>
                </CardHeader>
                <CardBody className={'p-0'}>
                    <section className="flex flex-col justify-center">
                        <h4 className="text-2xl lg:text-4xl font-bold mb-4 text-center">Resultados rápidos y duraderos</h4>
                        <p className="text-base text-center">Nuestros productos naturales te ayudarán a alcanzar tus objetivos de salud de manera efectiva y sostenible.</p>
                    </section>
                </CardBody>
                <CardFooter className="flex justify-center">
                    <section className="flex gap-4 mt-4">
                        <Button href={"/productos"} as={Link} className="text-white" color="success" radius="sm"
                                variant="solid">Comprar</Button>
                        <Button href={"#contacto"} as={Link} radius="sm"
                                variant="ghost">Contacto</Button>
                    </section>
                </CardFooter>
            </Card>

            <Card shadow={"none"} radius={"none"} className="bg-transparent">
                <CardHeader className="flex justify-center">
                    <DabenaLogo size={30}/>
                </CardHeader>
                <CardBody className={'p-0'}>
                    <section className="flex flex-col justify-center">
                        <h4 className="text-2xl lg:text-4xl font-bold mb-4 text-center">Calidad y confiabilidad garantizada</h4>
                        <p className="text-base text-center">Trabajamos con los mejores proveedores para ofrecerte productos de la más alta calidad.</p>
                    </section>
                </CardBody>
                <CardFooter className="flex justify-center">
                    <section className="flex gap-4 mt-4">
                        <Button href={"/productos"} as={Link} className="text-white" color="success" radius="sm"
                                variant="solid">Comprar</Button>
                        <Button href={"#contacto"} as={Link} radius="sm"
                                variant="ghost">Contacto</Button>
                    </section>
                </CardFooter>
            </Card>
        </section>
    )
}