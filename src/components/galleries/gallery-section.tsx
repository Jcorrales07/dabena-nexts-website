import React from 'react';
import {Image} from "@nextui-org/react";

function GallerySection() {
    // ${direction === "nvrt" ? 'lg:flex-row-reverse' : 'lg:flex-row'}
    return (
        <section
            className={`w-full flex flex-col lg:flex-row lg:items-center lg:px-[64px] lg:py-[112px] px-[20px] py-[64px] gap-[32px]`}>

            <section className={'flex flex-col gap-8'}>
                <Image className="w-[552px] lg:h-full" src={"/assets/img1.jpg"} alt={"img random"}/>
                <Image className="w-[552px] h-[118px] lg:h-[426px] object-cover" src={"/assets/img2.jpg"} alt={"img random"}/>
            </section>

            <section className={'flex flex-col gap-8'}>
                <Image className="w-[552px] h-[118px] lg:h-[426px] object-cover" src={"/assets/img5.jpg"} alt={"img random"}/>
                <Image className="w-[552px] lg:-full" src={"/assets/img4.jpg"} alt={"img random"}/>
            </section>

        </section>
    );
}

export default GallerySection;