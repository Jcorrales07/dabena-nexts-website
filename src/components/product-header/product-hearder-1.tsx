"use client"
import {BreadcrumbItem, Breadcrumbs, Button, Image, Input, Link, Spinner} from "@nextui-org/react";
import {ThumbnailProductCarousel} from "@/components/carousels";
import {EmblaOptionsType} from "embla-carousel";
import {Accordion, AccordionItem} from "@nextui-org/react";
import { useProduct } from '../../hooks/useProduct';

const OPTIONS: EmblaOptionsType = {}

interface ProductHeader1Props {
    productoID: string
}

export default function ProductHeader1({productoID} : ProductHeader1Props) {
    const { product, loading, error } = useProduct(productoID);

    if (loading) {
        return (
            <section className="w-full flex justify-center items-center lg:px-[64px] lg:py-[80px] px-[20px] py-[48px]">
                <Spinner size="lg" label="Cargando producto..." />
            </section>
        );
    }

    if (error || !product) {
        return (
            <section className="w-full flex justify-center items-center lg:px-[64px] lg:py-[80px] px-[20px] py-[48px]">
                <div className="text-center">
                    <p className="text-red-500 text-lg">Producto no encontrado</p>
                    <Link href="/productos" className="text-blue-500 mt-2 inline-block">
                        Volver a productos
                    </Link>
                </div>
            </section>
        );
    }

    // Usar las imágenes que ya vienen en el producto
    const SLIDES = product.imagenes && product.imagenes.length > 0 
        ? product.imagenes 
        : ['/assets/frasco-vigo.png'];

    const defaultContent = product.descripcion || 
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

    return (
        <section
            className="w-full flex flex-col lg:items-center lg:px-[64px] lg:py-[80px] px-[20px] py-[48px] gap-[24px] ">
            <section className="w-full">
                <Breadcrumbs color="foreground">
                    <BreadcrumbItem href={"/productos"}>Productos</BreadcrumbItem>
                    <BreadcrumbItem>{product.nombre}</BreadcrumbItem>
                </Breadcrumbs>
            </section>

            <section className="flex flex-col lg:flex-row gap-20 pb-12 w-full">
                <ThumbnailProductCarousel slides={SLIDES} options={OPTIONS}/>

                <section className="w-full flex flex-col gap-8">
                    <section className="w-full flex flex-col gap-5">
                        <div>
                            <div>
                                <h3 className="text-[32px] lg:text-[40px] font-bold">{product.nombre}</h3>
                                <h5 className="text-xl lg:text-2xl font-bold">L {product.precio}</h5>
                            </div>

                            <div>
                                <div>⭐⭐⭐⭐⭐</div>
                                <Link href="#">(4.5 estrellas) - 10 reviews</Link>
                            </div>

                            <p>{product.descripcion || 'Descripción del producto destacado'}</p>
                        </div>

                        <section>
                            <form action="" method="post" className="flex flex-col gap-6">
                                {product.variantes && product.variantes.length > 0 && (
                                    <fieldset>
                                        <div className="flex flex-col gap-2">
                                            <legend>Variante</legend>
                                            <div className="flex gap-4 flex-wrap">
                                                {product.variantes.map((variant, index) => (
                                                    <Button key={index} type="button" radius="none">
                                                        {variant}
                                                    </Button>
                                                ))}
                                            </div>
                                        </div>
                                    </fieldset>
                                )}

                                <fieldset>
                                    <div className="flex flex-col gap-2">
                                        <legend>Cantidad:</legend>
                                        <Input
                                            type="number"
                                            placeholder="1"
                                            className="w-16"
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
                    
                    <section className="">
                        <Accordion>
                            <AccordionItem key="1" aria-label="Información del producto" title="Información del producto">
                                {defaultContent}
                            </AccordionItem>
                            <AccordionItem key="2" aria-label="Ingredientes" title="Ingredientes">
                                {product.descripcion || defaultContent}
                            </AccordionItem>
                            <AccordionItem key="3" aria-label="Instrucciones de uso" title="Instrucciones de uso">
                                {defaultContent}
                            </AccordionItem>
                        </Accordion>
                    </section>
                </section>
            </section>

            {/* Debug info */}
            {process.env.NODE_ENV === 'development' && (
                <section className="w-full mt-8 p-4 bg-gray-100 rounded">
                    <h4 className="font-bold mb-2">Debug - Producto con imágenes:</h4>
                    <div className="text-xs space-y-1">
                        <p><strong>Folder:</strong> {product.folderCloudinary}</p>
                        <p><strong>Imágenes cargadas:</strong> {product.imagenes ? product.imagenes.length : 0}</p>
                        <p><strong>URLs:</strong></p>
                        <ul className="ml-4">
                            {product.imagenes?.map((url, index) => (
                                <li key={index} className="truncate">• {url}</li>
                            ))}
                        </ul>
                    </div>
                </section>
            )}
        </section>
    );
}