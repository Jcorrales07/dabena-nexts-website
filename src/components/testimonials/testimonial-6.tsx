import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardBody, CardFooter, CardHeader, Divider, Image} from "@nextui-org/react";
import {FaStar} from "react-icons/fa";

interface Testimonial6Props {
    producto: string;
}

function Testimonial6({producto} : Testimonial6Props) {
    return (
        <section
            className="w-full flex flex-col lg:px-[64px] lg:py-[112px] px-[20px] py-[64px] gap-[48px] lg:gap-[80px]">

            <section className="flex flex-col">
                <h2 className="text-4xl lg:text-5xl font-bold mb-4">Testimonios de clientes</h2>
                <p className="text-base lg:text-lg">Descubre lo que nuestros clientes satisfechos tienen que decir sobre {producto}</p>
            </section>

            <section className="flex flex-col lg:flex-row gap-8">
                <Card className="max-w-[400px] bg-transparent border-none shadow-none" radius="none">
                    <CardHeader className="">
                        <div className="w-full flex">
                            <FaStar color={'#ffa534'}/>
                            <FaStar color={'#ffa534'}/>
                            <FaStar color={'#ffa534'}/>
                            <FaStar color={'#ffa534'}/>
                            <FaStar color={'#ffa534'}/>
                        </div>
                    </CardHeader>
                    <CardBody>
                        <p className={"text-left"}>“¡Los productos de Dabena han cambiado mi vida por completo!”</p>
                    </CardBody>
                    <CardFooter className="flex flex-col gap-3 items-start">
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
                    </CardFooter>
                </Card>
                <Card className="max-w-[400px] bg-transparent border-none shadow-none" radius="none">
                    <CardHeader className="">
                        <div className="w-full flex">
                            <FaStar color={'#ffa534'}/>
                            <FaStar color={'#ffa534'}/>
                            <FaStar color={'#ffa534'}/>
                            <FaStar color={'#ffa534'}/>
                            <FaStar color={'#ffa534'}/>
                        </div>
                    </CardHeader>
                    <CardBody>
                        <p className={"text-left"}>“¡Los productos de Dabena han cambiado mi vida por completo!”</p>
                    </CardBody>
                    <CardFooter className="flex flex-col gap-3 items-start">
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
                    </CardFooter>
                </Card>
                <Card className="max-w-[400px] bg-transparent border-none shadow-none" radius="none">
                    <CardHeader className="">
                        <div className="w-full flex">
                            <FaStar color={'#ffa534'}/>
                            <FaStar color={'#ffa534'}/>
                            <FaStar color={'#ffa534'}/>
                            <FaStar color={'#ffa534'}/>
                            <FaStar color={'#ffa534'}/>
                        </div>
                    </CardHeader>
                    <CardBody>
                        <p className={"text-left"}>“¡Los productos de Dabena han cambiado mi vida por completo!”</p>
                    </CardBody>
                    <CardFooter className="flex flex-col gap-3 items-start">
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
                    </CardFooter>
                </Card>
            </section>
        </section>
    );
}

export default Testimonial6;