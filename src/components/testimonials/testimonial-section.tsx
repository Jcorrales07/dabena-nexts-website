import React from 'react';
import {Card, CardBody, CardFooter, CardHeader, Divider, Image, Link} from "@nextui-org/react";
import {FaStar} from "react-icons/fa";
import {DabenaLogo} from "@/components/svgs/dabena-logo";

function TestimonialSection() {
    return (
        <section
            className="w-full flex flex-col lg:px-[64px] lg:py-[112px] px-[20px] py-[64px] gap-[48px] lg:gap-[80px] items-center">

            <section className="flex flex-col items-center align-middle">
                <h2 className="text-4xl lg:text-5xl font-bold mb-4">Testimonios de clientes</h2>
                <p className="text-base lg:text-lg">Descubre lo que nuestros clientes satisfechos tienen que decir</p>
            </section>

            <section className=" flex flex-col lg:flex-row gap-8">
                <Card className="max-w-[400px]">
                    <CardHeader className="flex gap-3">
                        <Image
                            alt="nextui logo"
                            height={40}
                            radius="sm"
                            src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                            width={40}
                        />
                        <div className="flex flex-col">
                            <p className="text-md">María Pérez</p>
                            <p className="text-small text-default-500">Gerente, Empresa XYZ</p>
                        </div>
                    </CardHeader>
                    <Divider/>
                    <CardBody>
                        <p>“¡Los productos de Dabena han cambiado mi vida por completo!”</p>
                    </CardBody>
                    <Divider/>
                    <CardFooter>
                        <div className="w-full flex justify-center">
                            <FaStar color={'#ffa534'}/>
                            <FaStar color={'#ffa534'}/>
                            <FaStar color={'#ffa534'}/>
                            <FaStar color={'#ffa534'}/>
                            <FaStar color={'#ffa534'}/>
                        </div>
                    </CardFooter>
                </Card>
                <Card className="max-w-[400px]">
                    <CardHeader className="flex gap-3">
                        <Image
                            alt="nextui logo"
                            height={40}
                            radius="sm"
                            src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                            width={40}
                        />
                        <div className="flex flex-col">
                            <p className="text-md">Juan Rodríguez</p>
                            <p className="text-small text-default-500">Director de Ventas, Compañía ABC</p>
                        </div>
                    </CardHeader>
                    <Divider/>
                    <CardBody>
                        <p>“Recomendaría los productos de Dabena a todos mis amigos y familiares.”</p>
                    </CardBody>
                    <Divider/>
                    <CardFooter>
                        <div className="w-full flex justify-center">
                            <FaStar color={'#ffa534'}/>
                            <FaStar color={'#ffa534'}/>
                            <FaStar color={'#ffa534'}/>
                            <FaStar color={'#ffa534'}/>
                            <FaStar color={'#ffa534'}/>
                        </div>
                    </CardFooter>
                </Card>
                <Card className="max-w-[400px]">
                    <CardHeader className="flex gap-3">
                        <Image
                            alt="nextui logo"
                            height={40}
                            radius="sm"
                            src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                            width={40}
                        />
                        <div className="flex flex-col">
                            <p className="text-md">Laura Gómez</p>
                            <p className="text-small text-default-500">Analista de Marketing, Empresa 123</p>
                        </div>
                    </CardHeader>
                    <Divider/>
                    <CardBody>
                        <p>“Desde que comencé a usar los productos de Dabena, mi salud ha mejorado
                            significativamente.”</p>
                    </CardBody>
                    <Divider/>
                    <CardFooter>
                        <div className="w-full flex justify-center">
                            <FaStar color={'#ffa534'}/>
                            <FaStar color={'#ffa534'}/>
                            <FaStar color={'#ffa534'}/>
                            <FaStar color={'#ffa534'}/>
                            <FaStar color={'#ffa534'}/>
                        </div>
                    </CardFooter>
                </Card>
            </section>
        </section>
    );
}

export function SingleTestimonialSection() {
    return (
        <section
            className="w-full flex flex-col lg:px-[64px] lg:py-[112px] px-[20px] py-[64px] gap-[48px] lg:gap-[80px] items-center">

            <Card className="max-w-screen-sm bg-transparent" shadow="none" radius="none">
                <CardHeader className="flex justify-center">
                    <DabenaLogo size={40}/>
                </CardHeader>
                <CardBody>
                    <p className="text-center text-xl">Los productos de Dabena han sido una bendición para mí. Han mejorado mi salud de manera significativa y me siento mucho mejor. ¡Recomendado al 100%!</p>
                </CardBody>
                <CardFooter className={"flex flex-col justify-center gap-4"}>
                    <Image
                        alt="nextui logo"
                        height={60}
                        width={60}
                        radius="full"
                        src="/assets/anais.jpg"
                        className="object-cover min-h-[60px] max-h-[60px]"
                    />
                    <div className="flex flex-col text-center">
                        <p className="text-md">Anaïs Bynens</p>
                        <p className="text-small text-default-500">Gerente, Empresa XYZ</p>
                    </div>
                </CardFooter>
            </Card>

        </section>
    );
}

export default TestimonialSection;