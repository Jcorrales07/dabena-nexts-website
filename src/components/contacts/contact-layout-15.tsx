import React from 'react';

import {IoMail} from "react-icons/io5";
import {BsFillTelephoneInboundFill} from "react-icons/bs";
import {FaLocationDot} from "react-icons/fa6";

import '@/styles/gm-dark-mode.css'

export default function ContactLayout15() {
    return (
        <section id={"contacto"}
                 className="w-full flex flex-col lg:px-[64px] lg:py-[112px] px-[20px] py-[64px] gap-[48px] lg:gap-[80px]">

            <section className="flex flex-col lg:flex-row gap-[48px] lg:gap-[80px]">

                <section className="flex flex-col gap-4">
                    <p className="text-base lg:text-lg">Dabena</p>
                    <div className="flex flex-col gap-6">
                        <h2 className="text-4xl lg:text-5xl font-bold">Contáctanos</h2>
                        <p className="text-wrap text-base lg:text-lg">Si tienes alguna pregunta o consulta, no dudes en
                            comunicarte con nosotros.</p>
                    </div>
                </section>

                <div className="flex flex-col gap-6">
                    <div className="flex gap-4">
                        <IoMail size={20}/>
                        <div className="flex flex-col gap-4">
                            <h6 className="text-lg lg:text-xl font-bold">Correo electrónico</h6>
                            <p className="text-base lg:text-lg">formex.dabena@gmail.com</p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <BsFillTelephoneInboundFill size={20}/>
                        <div className="flex flex-col gap-2">
                            <h6 className="text-lg lg:text-xl font-bold">Teléfono</h6>
                            <p className="text-base lg:text-lg">+504 9979 - 5366</p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <FaLocationDot size={20} className="max-sm:w-12"/>
                        <div className="flex flex-col gap-2">
                            <h6 className="text-lg lg:text-xl font-bold">Oficina</h6>
                            <p className="lg:w-[300px] text-wrap text-base lg:text-lg leading-8">Barrio Medina. 12
                                Calle, 3 y 4
                                Avenida. Enfrente a la
                                Segunda Iglesia Evalengica y
                                Reformada.</p>
                        </div>
                    </div>
                </div>

            </section>

            <section className='w-full dark'>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3844.8069377516485!2d-88.02469798867696!3d15.494813485042469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f665b46734ee0fb%3A0x7b6ef8d3c5fd35ac!2sDABENA%20Tiendas%20Naturistas%20Vitaminas%20y%20Suplementos%20Productos%20Naturales%20GNS%20Medicina%20Natural%20Herborister%C3%ADa!5e0!3m2!1ses-419!2shn!4v1712621461808!5m2!1ses-419!2shn"
                    width="100%" height="512" style={{border: 0}} loading="lazy" className="gm-dm"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </section>
        </section>
    );
}