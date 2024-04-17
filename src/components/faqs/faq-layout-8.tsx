import React from 'react';
import {Button, Link} from "@nextui-org/react";

function FAQLayout8() {
    return (
        <section
            className="w-full flex flex-col lg:flex-row lg:px-[64px] lg:py-[112px] px-[20px] py-[64px] gap-[48px] lg:gap-[80px]">

            <section className="flex flex-col gap-6">
                <div className="flex flex-col gap-6">
                    <h2 className="text-4xl lg:text-5xl font-bold">Preguntas frecuentes</h2>
                    <p className="text-base lg:text-lg">Aquí encontrarás respuestas a las preguntas más frecuentes sobre
                        cómo convertirse en mayorista.</p>
                </div>

                <Button  className="w-fit" radius="sm" href={"#contacto"} as={Link}>Contacto</Button>
            </section>

            <section>
                <ul className="flex flex-col gap-12">
                    <li className="flex flex-col gap-4">
                        <p className="text-base lg:text-lg font-bold">¿Cuáles son los requisitos?</p>
                        <p className="text-base">Para convertirse en mayorista, debe cumplir con los siguientes
                            requisitos: tener un negocio registrado, proporcionar información de contacto válida y
                            realizar una compra mínima inicial.</p>
                    </li>
                    <li className="flex flex-col gap-4">
                        <p className="text-base lg:text-lg font-bold">¿Cómo puedo registrarme?</p>
                        <p className="text-base">Puede registrarse como mayorista completando el formulario de registro
                            en nuestro sitio web. Una vez que hayamos revisado su solicitud, nos pondremos en contacto
                            con usted.</p>
                    </li>
                    <li className="flex flex-col gap-4">
                        <p className="text-base lg:text-lg font-bold">¿Cuál es el tiempo de procesamiento?</p>
                        <p className="text-base">El tiempo de procesamiento para convertirse en mayorista puede variar.
                            Hacemos todo lo posible para revisar las solicitudes lo más rápido posible, pero puede
                            llevar hasta 5 días hábiles.</p>
                    </li>
                    <li className="flex flex-col gap-4">
                        <p className="text-base lg:text-lg font-bold">¿Ofrecen descuentos por volumen?</p>
                        <p className="text-base">Sí, ofrecemos descuentos por volumen a nuestros mayoristas. Cuanto más
                            compre, mayor será el descuento que puede obtener.</p>
                    </li>
                </ul>
            </section>
        </section>
    );
}

export default FAQLayout8;