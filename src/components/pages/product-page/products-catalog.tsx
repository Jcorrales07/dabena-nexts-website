"use client"

import React, {useState, useEffect, useRef} from 'react';
import {Button, Card, CardBody, CardFooter, CardHeader, Image, Link, Spinner} from "@nextui-org/react";
import { useProducts } from '../../../hooks/useProducts';

// Componente simplificado para cada tarjeta de producto
const ProductCard: React.FC<{product: any, isClient: boolean}> = ({ product, isClient }) => {
    // Usar la primera imagen del array (delantero) o fallback
    const imageUrl = product.imagenes && product.imagenes.length > 0 
        ? product.imagenes[0] 
        : '/assets/botelladefault.png';

    return (
        <Card className="w-full" radius="none">
            <CardHeader className="p-0">
                <Image
                    alt={`${product.nombre} - Vista frontal`}
                    radius="none"
                    src={imageUrl}
                    className="w-screen h-[486.4px] object-contain"
                    fallbackSrc="/assets/botelladefault.png"
                />
            </CardHeader>
            <CardBody>
                <section className="flex justify-between">
                    <section>
                        <p className="font-bold text-base lg:text-lg">{product.nombre}</p>
                        <p className="text-sm">{product.cantidad}</p>
                    </section>
                    <p className="font-bold text-lg lg:text-xl">L{product.precio}</p>
                </section>
            </CardBody>
            <CardFooter>
                {isClient && (
                    <Button 
                        href={`productos/${product.id}`} 
                        as={Link} 
                        radius="none" 
                        variant="ghost" 
                        className="w-full text-base"
                    >
                        Comprar ahora
                    </Button>
                )}
            </CardFooter>
        </Card>
    );
};

function ProductsCatalog() {
    const [productsPerPage] = useState(6);
    const [currentPage, setCurrentPage] = useState(1);
    const [isClient, setIsClient] = useState(false);
    const newProductsRef = useRef<HTMLDivElement>(null);
    
    const { products, loading, error } = useProducts();

    console.log('Productos cargados con imágenes:', products);

    // Calcular productos a mostrar
    const totalProducts = products.length;
    const productsToShow = currentPage * productsPerPage;
    const displayedProducts = products.slice(0, productsToShow);
    const hasMoreProducts = productsToShow < totalProducts;

    const handleLoadMore = () => {
        setCurrentPage(prev => prev + 1);
        
        setTimeout(() => {
            if (newProductsRef.current) {
                newProductsRef.current.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }, 100);
    };

    const handleShowLess = () => {
        setCurrentPage(1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    
    useEffect(() => {
        setIsClient(true)
    }, []);

    if (loading) {
        return (
            <section className="w-full flex justify-center items-center lg:px-[64px] lg:py-[112px] px-[20px] py-[64px]">
                <Spinner size="lg" label="Cargando productos e imágenes..." />
            </section>
        );
    }

    if (error) {
        return (
            <section className="w-full flex justify-center items-center lg:px-[64px] lg:py-[112px] px-[20px] py-[64px]">
                <p className="text-red-500 text-lg">{error}</p>
            </section>
        );
    }

    return (
        <section
            className="w-full flex flex-col lg:px-[64px] lg:py-[112px] px-[20px] py-[64px] gap-[48px] lg:gap-[80px]">
            <section className="flex flex-col lg:flex-row gap-6 justify-between">
                <div className="flex flex-col gap-6">
                    <p className="text-base lg:text-lg font-bold">Medicinas</p>
                    <h2 className="text-4xl lg:text-5xl font-bold">Productos</h2>
                    <p className="text-base lg:text-lg">
                        Explora nuestra amplia selección de medicinas naturales que tenemos para ti!
                    </p>
                </div>

                <section className="flex flex-col items-end gap-2">
                    <p className="text-sm text-gray-600">
                        Mostrando {displayedProducts.length} de {totalProducts} productos
                    </p>
                    <div className="flex gap-2">
                        {hasMoreProducts && (
                            <Button
                                radius="none"
                                className="w-fit"
                                variant="ghost"
                                onClick={handleLoadMore}
                            >
                                Cargar más
                            </Button>
                        )}
                        {currentPage > 1 && (
                            <Button
                                radius="none"
                                className="w-fit"
                                variant="light"
                                onClick={handleShowLess}
                            >
                                Mostrar menos
                            </Button>
                        )}
                    </div>
                </section>
            </section>

            <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                {displayedProducts.map((product, index) => (
                    <div key={product.id}>
                        {index === (currentPage - 1) * productsPerPage && currentPage > 1 && (
                            <div ref={newProductsRef} className="absolute -top-20" />
                        )}
                        <ProductCard 
                            product={product} 
                            isClient={isClient} 
                        />
                    </div>
                ))}
            </main>

            <section className="text-center">
                {hasMoreProducts ? (
                    <p className="text-gray-600">
                        Quedan {totalProducts - productsToShow} productos más por mostrar
                    </p>
                ) : (
                    <p className="text-gray-600">
                        Has visto todos nuestros productos ({totalProducts} en total)
                    </p>
                )}
            </section>

            {/* Debug info */}
            {process.env.NODE_ENV === 'development' && (
                <section className="mt-8 p-4 bg-gray-100 rounded text-xs">
                    <h4 className="font-bold mb-2">Debug Info:</h4>
                    <div className="space-y-1">
                        <p><strong>Total productos:</strong> {totalProducts}</p>
                        <p><strong>Productos con imágenes:</strong> {products.filter(p => p.imagenes && p.imagenes.length > 0).length}</p>
                        <p><strong>Página actual:</strong> {currentPage}</p>
                        <p><strong>Productos mostrados:</strong> {displayedProducts.length}</p>
                    </div>
                </section>
            )}
        </section>
    );
}

export default ProductsCatalog;