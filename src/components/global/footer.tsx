import React from 'react';
import {Divider, Image, Link} from "@nextui-org/react";
import {FaFacebook, FaInstagram} from "react-icons/fa";
import {IoLogoWhatsapp} from "react-icons/io";
import DabenaLogoSVG from "@/components/svgs/dabena-logo";


interface MenuItem {
    name: string;
    path: string;
}

interface FooterProps {
    menuItems: MenuItem[];
}

export default function Footer({menuItems} : FooterProps) {
    return (
        <footer
            className="lg:px-[64px] lg:py-[80px] lg:gap-[80px] gap-[48px] px-[20px] py-[48px] w-full flex flex-col items-center">
            <section className={'w-full flex flex-col lg:flex-row items-center gap-4 justify-between align-middle'}>
                <DabenaLogoSVG/>
                <div className={'flex flex-col gap-4 lg:flex-row items-center justify-center w-full'}>
                    {menuItems.map((item, index) => (
                        <Link
                            key={index}
                            color={"foreground"}
                            className="text-base hover:underline hover:text-gray-500 transition duration-300 ease-in-out"
                            href={item.path}
                        >
                            {item.name}
                        </Link>
                    ))}</div>
                <div className="flex gap-4">
                    <FaFacebook size={'20px'}/>
                    <IoLogoWhatsapp size={'20px'}/>
                    <FaInstagram size={'20px'}/>
                </div>
            </section>


            <section className={'w-full flex flex-col items-center'}>
                <Divider className='bg-black dark:bg-white'/>
                <div className={'pt-[24px] pb-[16px] flex flex-col lg:flex-row items-center gap-4'}>
                    <div>Politica de Privacidad</div>
                    <div>Terminos de Servicio</div>
                    <div>Configuracion de Cookies</div>
                    <div className='text-center'>© 2024 Dabena. <br className="lg:hidden"/><span>Todos los derechos reservados.</span>
                    </div>
                </div>
                <div className={"text-sm font-bold"}>Hecho con 💗 por <Link href={"https://www.instagram.com/jcorralesss/"} target="_blank">Joe Corrales</Link></div>
            </section>
        </footer>
    );
}