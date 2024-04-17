import React from 'react';
import {DabenaLogo} from "@/components/svgs/dabena-logo";
import {Divider} from "@nextui-org/react";

function FeatureLayout121() {
    return (
        <section id={"requisitos"}
            className="w-full flex flex-col lg:flex-row  lg:px-[64px] lg:py-[112px] px-[20px] py-[64px] gap-[48px] lg:gap-[80px]">

            <section className="flex-1 ">
                <h2 className="text-4xl lg:text-5xl font-bold">Requisitos para aplicar</h2>
            </section>

            <section className="flex-1 flex flex-col gap-4">

                <div className="flex flex-row gap-10">
                    <div className="flex flex-col gap-4 items-center">
                        <DabenaLogo size={80}/>
                        <div className="h-24 border border-gray-500 "></div>
                    </div>
                    <div>
                        <h6 className="text-xl font-bold">Subheading one</h6>
                        <p className="text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            varius enim in eros elementum tristique.</p>
                    </div>
                </div>

                <div className="flex flex-row gap-10">
                    <div className="flex flex-col gap-4 items-center">
                        <DabenaLogo size={80}/>
                        <div className="h-24 border border-gray-500 "></div>
                    </div>
                    <div>
                        <h6 className="text-xl font-bold">Subheading two</h6>
                        <p className="text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            varius enim in eros elementum tristique.</p>
                    </div>
                </div>

                <div className="flex flex-row gap-10">
                    <div className="flex flex-col gap-4 items-center">
                        <DabenaLogo size={80}/>
                        <div className="h-24 border border-gray-500 "></div>
                    </div>
                    <div>
                        <h6 className="text-xl font-bold">Subheading three</h6>
                        <p className="text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            varius enim in eros elementum tristique.</p>
                    </div>
                </div>

                <div className="flex flex-row gap-10">
                    <div className="flex flex-col gap-4 items-center">
                        <DabenaLogo size={80}/>
                        <div className="hidden h-24 border border-gray-500 "></div>
                    </div>
                    <div>
                        <h6 className="text-xl font-bold">Subheading four</h6>
                        <p className="text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            varius enim in eros elementum tristique.</p>
                    </div>
                </div>

            </section>
        </section>
    );
}

export default FeatureLayout121;