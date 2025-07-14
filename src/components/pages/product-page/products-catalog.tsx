"use client"

import React, { useState, useEffect } from 'react';
import { Button, Card, CardBody, CardFooter, CardHeader, Image, Link, Spinner } from "@nextui-org/react";
import { useProducts } from '@/hooks/useProducts';
import { Product } from '@/types/product';

import { ArrowBigLeft, ArrowBigRight } from 'lucide-react'

const ITEMS_PER_PAGE = 8;

function ProductsCatalog() {
  const { products, loading, error } = useProducts();
  const [isClient, setIsClient] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  const paginatedProducts = products.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="w-full flex flex-col lg:px-[64px] lg:py-[112px] px-[20px] py-[64px] gap-[48px] lg:gap-[80px]">
      {/* Encabezado */}
      <section className="flex flex-col lg:flex-row gap-6 justify-between">
        <div className="flex flex-col gap-6">
          <p className="text-base lg:text-lg font-bold">Medicinas</p>
          <h2 className="text-4xl lg:text-5xl font-bold">Productos</h2>
          <p className="text-base lg:text-lg">Explora nuestra amplia selección de medicinas naturales que tenemos para ti!</p>
        </div>

        <section className="flex justify-center items-center gap-4 pt-12">
            <Button
              radius="full"
              variant="bordered"
              onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
              isDisabled={currentPage === 1}
            >
              <ArrowBigLeft />
            </Button>
            <Button
              radius="full"
              variant="bordered"
              onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
              isDisabled={currentPage === totalPages}
            >
              <ArrowBigRight />
            </Button>
          </section>
      </section>

      {/* Loading, Error o Grid */}
      {loading ? (
        <div className="w-full flex justify-center py-10">
          <Spinner size="lg" />
        </div>
      ) : error ? (
        <div className="w-full flex justify-center text-red-500 text-lg font-semibold py-10">
          Error al cargar productos. Inténtalo más tarde.
        </div>
      ) : (
        <>
          {/* Grid de productos */}
          <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {paginatedProducts.map((item, index) => (
              <Card key={index} className="w-full h-full" radius="none">
                <CardHeader className="p-0 flex justify-center">
                  <Image
                    alt={item.nombre}
                    radius="none"
                    src={item.imagenes?.delantero ?? "/assets/botella-fallback.png"}
                    className="object-contain h-[350px] w-full"
                  />
                </CardHeader>
                <CardBody>
                  <section className="flex justify-between">
                    <section>
                      <p className="font-bold text-base lg:text-lg">{item.nombre}</p>
                      <p className="text-sm">{item.contenidoNeto} ml</p>
                    </section>
                    <p className="font-bold text-lg lg:text-xl">L{item.precioPublico}</p>
                  </section>
                </CardBody>
                <CardFooter>
                  {isClient && (
                    <Button
                      as={Link}
                      href={`productos/${item.id}`}
                      radius="none"
                      variant="ghost"
                      className="w-full text-base"
                    >
                      Ver más información
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </main>

          {/* Paginación */}
          <section className="flex justify-center items-center gap-4 pt-12">
            <Button
              radius="full"
              variant="bordered"
              onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
              isDisabled={currentPage === 1}
            >
              Anterior
            </Button>
            <p className="text-lg font-medium px-2">Página {currentPage} de {totalPages}</p>
            <Button
              radius="full"
              variant="bordered"
              onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
              isDisabled={currentPage === totalPages}
            >
              Siguiente
            </Button>
          </section>
        </>
      )}
    </section>
  );
}

export default ProductsCatalog;
