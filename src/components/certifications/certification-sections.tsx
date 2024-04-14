import React from 'react';
import {Image} from "@nextui-org/react";

function CertificationSection() {
    return (
        <section className="w-full flex flex-col lg:px-[64px] lg:py-[80px] px-[20px] py-[64px] gap-[32px] lg:gap-[48px] items-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Certificados por</h2>

            <Image src="/assets/arsa.jpeg" alt="Logo del arsa" radius="sm" />
        </section>
    );
}

export default CertificationSection;