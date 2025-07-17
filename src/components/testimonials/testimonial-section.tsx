import React from 'react';
import { Card, CardBody, CardFooter, CardHeader, Divider, Image, Link, Avatar } from "@nextui-org/react";
import { FaStar } from "react-icons/fa";
import { DabenaLogo } from "@/components/svgs/dabena-logo";

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
                        <Avatar name='MP' src='https://i.pravatar.cc/150?u=a04258114e29026702d' />
                        <div className="flex flex-col">
                            <p className="text-md">María Pérez</p>
                        </div>
                        <div className="flex justify-center">
                            <FaStar color={'#ffa534'} />
                            <FaStar color={'#ffa534'} />
                            <FaStar color={'#ffa534'} />
                            <FaStar color={'#ffa534'} />
                            <FaStar color={'#ffa534'} />
                        </div>
                    </CardHeader>
                    <Divider />
                    <CardBody>
                        <p className='text-center'>“Llevaba meses sin poder dormir bien. Probé de todo: pastillas,
                            rutinas nocturnas, incluso meditación. Nada me funcionaba. Una amiga me habló de la PASSI de Dabena,
                            y decidí probarla. En menos de una semana, comencé a dormir profundamente y sin interrupciones.
                            Lo mejor es que me siento descansada sin sentirme atontada al despertar. ¡Es un alivio increíble!”</p>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                    </CardFooter>
                </Card>
                <Card className="max-w-[400px]">
                    <CardHeader className="flex gap-3">
                        <Avatar name='JR' src='https://i.pravatar.cc/150?u=a042581f4e29026024d' />
                        <div className="flex flex-col">
                            <p className="text-md">Juan Rodríguez</p>
                        </div>
                        <div className="flex justify-center">
                            <FaStar color={'#ffa534'} />
                            <FaStar color={'#ffa534'} />
                            <FaStar color={'#ffa534'} />
                            <FaStar color={'#ffa534'} />
                            <FaStar color={'#ffa534'} />
                        </div>
                    </CardHeader>
                    <Divider />
                    <CardBody>
                        <p className='text-center'>“Durante años sentí que mi digestión no funcionaba como debía. Siempre inflamado,
                            pesado, a veces pasaban días sin poder ir al baño. Probé dietas, jugos, hasta laxantes que
                            solo me daban cólicos. Estaba cansado de vivir así. Cuando conocí DIGET, lo vi como una última
                            opción… pero fue lo mejor que me pudo pasar. A los pocos días noté el cambio: mi estómago dejó de
                            sentirse tan tenso, empecé a ir al baño con regularidad y, por primera vez en años, sentí ligereza.
                            No es solo un producto para el colon, es como si me hubiera limpiado por dentro. ¡Gracias, Dabena!”</p>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                    </CardFooter>
                </Card>
                <Card className="max-w-[400px]">
                    <CardHeader className="flex gap-3">
                        <Avatar name='LG' src='https://i.pravatar.cc/150?u=a042581f4e29026704d' />
                        <div className="flex flex-col">
                            <p className="text-md">Laura Gómez</p>
                        </div>
                        <div className="flex justify-center">
                            <FaStar color={'#ffa534'} />
                            <FaStar color={'#ffa534'} />
                            <FaStar color={'#ffa534'} />
                            <FaStar color={'#ffa534'} />
                            <FaStar color={'#ffa534'} />
                        </div>
                    </CardHeader>
                    <Divider />
                    <CardBody>
                        <p className='text-center'>“Desde la adolescencia he batallado con acné.
                            Probé de todo: cremas, antibióticos, tratamientos costosos… pero siempre volvía.
                            Mi piel estaba inflamada, con rojeces constantes y marcas que no se iban.
                            Un día vi una publicación sobre la Plata Coloidal de Dabena y decidí probarla.
                            ¡Qué maravilla! En menos de dos semanas, mi piel empezó a calmarse.
                            Las espinillas dejaron de salir, las rojeces bajaron, y lo más impactante: mi piel se sentía limpia y viva.
                            Ahora la uso todos los días, y no solo mi rostro cambió, también mi confianza. ¡Estoy encantada!”</p>
                    </CardBody>
                    <Divider />
                    <CardFooter>

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
                    <DabenaLogo size={40} />
                </CardHeader>
                <CardBody>
                    <p className="text-center text-xl">Los productos de Dabena han sido una bendición para mí. Han mejorado mi salud de manera significativa y me siento mucho mejor. ¡Recomendado al 100%!</p>
                </CardBody>
                <CardFooter className={"flex flex-col justify-center gap-4"}>
                    <Avatar name='MP' size='lg' src='https://i.pravatar.cc/150?u=a04258114e29026702d' />
                    <div className="flex flex-col text-center">
                        <p className="text-md">María Perez</p>
                    </div>
                </CardFooter>
            </Card>

        </section>
    );
}

export default TestimonialSection;