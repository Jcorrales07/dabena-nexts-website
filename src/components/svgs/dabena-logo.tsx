import React from 'react';
import {Image, Link} from "@nextui-org/react";

export default function DabenaLogoSVG() {
    return (
        <div className={'w-24'}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 241.17 148.07" className="">
                <g id="Layer_2" data-name="Layer 2">
                    <g id="Capa_1" data-name="Capa 1">
                        <path className="cls-1" style={{fill: '#46b52d'}}
                              d="M117.63,0s6,78.7-82.5,97.25c0,0-40.31,1.6-34.57,50.82"/>
                        <path className="cls-2 dark:invert" style={{fill: '#000'}}
                              d="M49.46,138.79V105.12h7.72a53.09,53.09,0,0,1,10.6.72,14.49,14.49,0,0,1,5.37,2.43A14.08,14.08,0,0,1,77.78,114a19.31,19.31,0,0,1,1.58,8,19,19,0,0,1-1.58,7.94,14.35,14.35,0,0,1-4.63,5.72,14.87,14.87,0,0,1-5.25,2.43,42.36,42.36,0,0,1-9.18.72H49.46Zm5.72-4.95H60a26.53,26.53,0,0,0,6-.5,9,9,0,0,0,3.45-1.7,10.09,10.09,0,0,0,3-4.06,16.46,16.46,0,0,0,0-11.3,10.15,10.15,0,0,0-3-4.06,9.11,9.11,0,0,0-3.57-1.7,30,30,0,0,0-6.51-.51H55.18Z"/>
                        <path className="cls-2 dark:invert" style={{fill: '#000'}}
                              d="M108.32,138.79l-4-8.67h-14l-4.09,8.67h-6l17.06-35,17,35ZM92.49,125.56h9.82l-3.61-7.68c-.21-.49-.42-1-.65-1.69s-.45-1.34-.67-2.13c-.19.74-.4,1.43-.61,2.06s-.44,1.23-.66,1.76Z"/>
                        <path className="cls-2 dark:invert" style={{fill: '#000'}}
                              d="M117.69,138.79V105.12h8.87a28.45,28.45,0,0,1,5.62.39,8.49,8.49,0,0,1,3.09,1.28,7.72,7.72,0,0,1,2.54,3,9.31,9.31,0,0,1,.9,4.11,7.46,7.46,0,0,1-1.3,4.5,6.68,6.68,0,0,1-3.78,2.52,7.33,7.33,0,0,1,4.85,2.68,8.71,8.71,0,0,1,1.77,5.6,10.39,10.39,0,0,1-.74,3.89,8.81,8.81,0,0,1-2.12,3.13,8,8,0,0,1-3.59,2,30.65,30.65,0,0,1-7.19.58Zm5.6-19.46h2.19q4.1,0,5.79-1.07a3.91,3.91,0,0,0,1.69-3.6c0-1.84-.52-3.13-1.56-3.88s-3-1.11-5.92-1.11h-2.19Zm0,14.88h2a31.08,31.08,0,0,0,4.5-.23,5.88,5.88,0,0,0,2.36-.8,4.59,4.59,0,0,0,1.64-1.8,5.84,5.84,0,0,0-.13-5.29,4.77,4.77,0,0,0-2-1.86,7.6,7.6,0,0,0-1.87-.58,17,17,0,0,0-2.78-.18h-3.7Z"/>
                        <path className="cls-2 dark:invert" style={{fill: '#000'}}
                              d="M146.07,138.79V105.12h19.66v4.64H151.8v8.44h13.93V123H151.8v10.88h13.93v4.9Z"/>
                        <path className="cls-2 dark:invert" style={{fill: '#000'}}
                              d="M172.3,138.79v-35l22.37,20.59c.61.58,1.23,1.2,1.85,1.86s1.29,1.4,2,2.23V105.12h5.3v35l-22.83-21c-.61-.56-1.2-1.16-1.77-1.79s-1.11-1.28-1.63-2v23.42Z"/>
                        <path className="cls-2 dark:invert" style={{fill: '#000'}}
                              d="M235.13,138.79l-4-8.67h-14l-4.08,8.67h-6l17.06-35,17,35ZM219.3,125.56h9.82l-3.61-7.68c-.21-.49-.43-1-.65-1.69s-.45-1.34-.67-2.13c-.2.74-.4,1.43-.62,2.06s-.43,1.23-.66,1.76Z"/>
                    </g>
                </g>
            </svg>
        </div>
    );
}

export function DabenaLogoTEXT() {
    return (
        <Link href='/' className={'hover:opacity-100 text-black flex items-center'}>
            <Image radius="none" className={'mr-3 h-auto'} src={"/assets/LogoDabena.svg"} alt={'Logo de Dabena'}
                   width={40}/>
            <p className="ml-2 font-bold text-inherit text-xl dark:text-white">Dabena</p>
        </Link>
    );
}

interface DabenaLogoProps {
    size: number;
}

export function DabenaLogo({ size }: DabenaLogoProps) {
    return (
        <Image
            alt="dabena logo"
            radius="none"
            height={size}
            width={size}
            src="/assets/LogoDabena.svg"
        />
    );
}