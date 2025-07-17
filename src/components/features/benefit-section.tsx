import {Button, Card, CardBody, CardFooter, CardHeader, Link} from "@nextui-org/react";
import {DabenaLogo} from "@/components/svgs/dabena-logo";
import React from "react";

export default function BenefitSection() {
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
                                variant="solid">Ver Productos</Button>
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
                        <h4 className="text-2xl lg:text-4xl font-bold mb-4 text-center">Resultados a su tiempo pero duraderos</h4>
                        <p className="text-base text-center">Nuestros productos naturales te ayudarán a alcanzar tus objetivos de salud de manera efectiva y sostenible.</p>
                    </section>
                </CardBody>
                <CardFooter className="flex justify-center">
                    <section className="flex gap-4 mt-4">
                        <Button href={"/productos"} as={Link} className="text-white" color="success" radius="sm"
                                variant="solid">Ver Productos</Button>
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
                                variant="solid">Ver Productos</Button>
                        <Button href={"#contacto"} as={Link} radius="sm"
                                variant="ghost">Contacto</Button>
                    </section>
                </CardFooter>
            </Card>
        </section>
    )
}