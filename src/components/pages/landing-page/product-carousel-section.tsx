import React, { useEffect, useState } from 'react';
import { ProductCardCarousel, SlideItem } from "@/components/carousels/";
import { useProducts } from '@/hooks/useProducts';

const OPTIONS = { dragFree: true };

const ProductCarouselSection = () => {
  const { products, loading, error } = useProducts();

  // Transformar los productos al formato que espera el carousel
  const slides: SlideItem[] = products.map((product) => ({
    id: product.id,
    title: product.nombre,
    img: product.imagenes.delantero, // fallback si falta imagen
    price: `L${product.precioPublico.toFixed(2)}`,
  })) || [];

  return (
    <section className="lg:px-[64px] lg:py-[112px] px-[20px] py-[64px] w-full flex flex-col">
      <div className="flex flex-col gap-[80px]">
        <section>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Productos Destacados</h2>
          <p className="text-base lg:text-lg">Descubre lo más querido por nuestros clientes!</p>
        </section>

        {loading && <p>Cargando productos...</p>}
        {error && <p>Error al cargar los productos.</p>}
        {!loading && !error && slides.length > 0 && (
          <ProductCardCarousel slides={slides} options={OPTIONS} />
        )}
        {!loading && !error && slides.length === 0 && (
          <p>No hay productos disponibles en este momento.</p>
        )}
      </div>
    </section>
  );
};

export default ProductCarouselSection;
