import React from 'react';

import {IoMail} from "react-icons/io5";
import {BsFillTelephoneInboundFill} from "react-icons/bs";
import {FaLocationDot} from "react-icons/fa6";

import '@/styles/gm-dark-mode.css'

export default function ContactLayout17() {
    return (
        <section id={"contacto"}
                 className="w-full flex flex-col lg:px-[64px] lg:py-[112px] px-[20px] py-[64px] gap-[48px] lg:gap-[80px]">

            <section className="flex flex-col lg:flex-row gap-[48px] lg:gap-[80px]">
                <div className="flex flex-col gap-6 flex-1">
                    <IoMail size={40}/>
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-4">
                            <h4 className="text-2xl lg:text-[32px] font-bold">Correo electrónico</h4>
                            <p>Si tienes alguna pregunta adicional sobre nuestro producto, no dudes en
                                contactarnos.</p>
                        </div>
                        <p>formex.dabena@gmail.com</p>
                    </div>
                </div>

                <div className="flex flex-col gap-6 flex-1">
                    <BsFillTelephoneInboundFill size={40}/>
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-4">
                            <h4 className="text-2xl lg:text-[32px] font-bold">Teléfono</h4>
                            <p>Si prefieres comunicarte por teléfono, estamos aquí para ayudarte.</p>
                        </div>
                        <p>+504 9979 - 5366</p>
                    </div>
                </div>
                <div className="flex flex-col gap-4 flex-1">
                    <FaLocationDot size={40}/>

                    <div className="flex flex-col gap-2">
                        <div className="flex flex-col gap-4">
                            <h4 className="text-2xl lg:text-[32px] font-bold">Oficina</h4>
                            <p>Visítanos en nuestra oficina principal.</p>
                        </div>
                        <p className="leading-8">Barrio Medina.<br/>12 Calle, 3 y 4 Avenida.<br/>Enfrente a la
                            Segunda Iglesia Evalengia y
                            Reformada.</p>
                    </div>
                </div>
            </section>
        </section>
    );
}