"use client"
import {BreadcrumbItem, Breadcrumbs, Button, Image, Input, Link} from "@nextui-org/react";

interface DetalleProductoProps {
    params: {
        productoId: string;
    };
}

export default function DetalleProducto({ params }: DetalleProductoProps) {
    const { productoId : producto} = params;

    return (
        <section
            className="w-full flex flex-col lg:items-center lg:px-[64px] lg:py-[80px] px-[20px] py-[48px] gap-[48px] lg:gap-[80px]">

            <section>
                <Breadcrumbs color="foreground">
                    <BreadcrumbItem href={"/productos"}>Productos</BreadcrumbItem>
                    <BreadcrumbItem>{producto}</BreadcrumbItem>
                </Breadcrumbs>
            </section>

            <section className="flex flex-col lg:flex-row gap-20 pb-12">

                {/*SECCION DE FOTOS */}
                {/* MEJOR VOY A HACER UN CAROUSEL */}
                <section className="flex flex-row gap-4 h-[640px]">
                    <section className="hidden lg:flex flex-col w-20 gap-4">
                        <Image src="/assets/img1.jpg" alt="as" radius="none"
                               className="object-cover h-[100px]"/>
                        <Image src="/assets/img2.jpg" alt="as" radius="none"
                               className="object-cover h-[100px]"/>
                        <Image src="/assets/img3.jpg" alt="as" radius="none"
                               className="object-cover h-[100px]"/>
                        <Image src="/assets/img4.jpg" alt="as" radius="none"
                               className="object-cover h-[100px]"/>
                    </section>

                    {/* Esto tiene que ser un carousel */}
                    <section className="border border-black w-full">
                        <Image src="/assets/img4.jpg" alt="as" radius="none"
                               className="object-cover h-auto"/>
                    </section>
                </section>

                {/* SECCION DE INFORMACION */}
                <section className="w-full flex flex-col gap-5">
                    <section>
                        <div>
                            <h3 className="text-[32px] lg:text-[40px] font-bold">{producto}</h3>
                            <h5 className="text-xl lg:text-2xl font-bold">L 450</h5>
                        </div>

                        <div>
                            <div>⭐⭐⭐⭐⭐</div>
                            <Link href="#">(4.5 estrellas) - 10 reviews</Link>
                        </div>

                        <p>Descripcion del producto destacado</p>
                    </section>


                    <section>
                        <form action="" method="post" className="flex flex-col gap-6">
                            <fieldset>
                                <div className="flex flex-col gap-2">
                                    <legend>Variante</legend>
                                    <div className="flex gap-4">
                                        <Button type="button" radius="none">Opción uno</Button>
                                        <Button type="button" radius="none">Opción dos</Button>
                                        <Button type="button" radius="none">Opción tres</Button>
                                    </div>
                                </div>
                            </fieldset>

                            <fieldset>
                                <div className="flex flex-col gap-2">
                                    <legend>Cantidad:</legend>
                                    <Input
                                        type="number"
                                        placeholder="0.00"
                                        radius="sm"
                                        min={1}
                                        max={100}
                                    />
                                </div>
                            </fieldset>

                            <div className="flex flex-col justify-center gap-4">
                                <Button radius="none">Comprar ahora</Button>
                                <p className="text-center text-[12px]">Envío gratis por compras mayores a L 1000</p>
                            </div>
                        </form>

                    </section>

                </section>
            </section>
        </section>
    );
}