"use client";
import React from "react";
import { DabenaLogo } from "@/components/svgs/dabena-logo";

const requisitos = [
  {
    titulo: "Tener un negocio formalmente registrado",
    descripcion:
      "Para convertirte en mayorista autorizado de Dabena, es indispensable que cuentes con un negocio legalmente constituido. Puede ser una tienda física, distribuidora, farmacia natural o un canal digital de ventas. Debes proporcionarnos tu RTN o documento fiscal equivalente para validar tu actividad comercial.",
  },
  {
    titulo: "Pedido mínimo de apertura",
    descripcion:
      "El primer pedido debe cumplir con un monto mínimo establecido para mayoristas. Esto nos permite brindarte los precios especiales por volumen y garantizar una experiencia completa con nuestro catálogo inicial. Además, contarás con asesoría personalizada para elegir los productos adecuados según tu mercado.",
  },
  {
    titulo: "Capacidad de distribución o punto de venta",
    descripcion:
      "Valoramos que tengas un canal confiable para hacer llegar nuestros productos al cliente final. No es necesario tener una tienda física, pero sí debes demostrar que cuentas con un sistema organizado de venta o entrega (en línea o presencial) y un compromiso con la promoción de la medicina natural.",
  },
  {
    titulo: "Compromiso con la marca",
    descripcion:
      "Buscamos socios que compartan nuestra visión de bienestar natural. Esperamos de ti una relación ética, responsable y de largo plazo, en la que representes nuestra marca con respeto, transmitas confianza a tus clientes y promuevas el uso seguro y consciente de nuestras fórmulas naturales.",
  },
];

function RequisitoItem({ titulo, descripcion, isLast }: { titulo: string; descripcion: string; isLast?: boolean }) {
  return (
    <div className="flex flex-row gap-10">
      <div className="flex flex-col gap-4 items-center">
        <DabenaLogo size={80} />
        <div className={`${isLast ? "hidden" : "h-24"} border border-gray-500`}></div>
      </div>
      <div>
        <h6 className="text-xl font-bold">{titulo}</h6>
        <p className="text-base">{descripcion}</p>
      </div>
    </div>
  );
}

function FeatureLayout121() {
  return (
    <section
      id={"requisitos"}
      className="w-full flex flex-col lg:flex-row lg:px-[64px] lg:py-[112px] px-[20px] py-[64px] gap-[48px] lg:gap-[80px]"
    >
      <section className="flex-1">
        <h2 className="text-4xl lg:text-5xl font-bold">Requisitos para aplicar</h2>
      </section>

      <section className="flex-1 flex flex-col gap-4">
        {requisitos.map((req, index) => (
          <RequisitoItem
            key={index}
            titulo={req.titulo}
            descripcion={req.descripcion}
            isLast={index === requisitos.length - 1}
          />
        ))}
      </section>
    </section>
  );
}

export default FeatureLayout121;
