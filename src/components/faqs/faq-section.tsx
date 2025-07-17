"use client"
import React from 'react';
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { Button, Link } from "@nextui-org/react";

const faqItems = [
  {
    title: "¿Cómo usar nuestros productos?",
    content:
      "Cada producto de Dabena incluye instrucciones detalladas de uso en su empaque. En general, recomendamos seguir la dosis indicada y, si tienes alguna condición médica o tomas medicamentos, consultar primero con tu especialista de confianza. Puedes consumirlos como infusión, cápsulas o extractos, según el producto.",
  },
  {
    title: "¿Cuáles son los beneficios?",
    content:
      "Nuestros productos están formulados con ingredientes naturales cuidadosamente seleccionados. Ayudan a mejorar la calidad del sueño, fortalecer el sistema inmune, aliviar trastornos digestivos, reducir el estrés y apoyar el bienestar general, sin efectos adversos agresivos.",
  },
  {
    title: "¿Hay efectos secundarios?",
    content:
      "Al ser productos naturales, los efectos secundarios son mínimos y poco frecuentes. Sin embargo, es importante respetar las dosis recomendadas. Algunas personas pueden tener sensibilidad a ciertas plantas, por lo que sugerimos revisar los ingredientes antes de usarlos.",
  },
  {
    title: "¿Son aptos para todos?",
    content:
      "La mayoría de nuestros productos pueden ser consumidos por adultos. Para niños, mujeres embarazadas o personas con condiciones especiales, recomendamos consultar con un profesional de salud antes de usarlos, ya que algunas hierbas tienen contraindicaciones específicas.",
  },
  {
    title: "¿Dónde comprar?",
    content:
      "Puedes adquirir nuestros productos a través de nuestra tienda en línea o en puntos de venta autorizados. Puedes revisar la seccion de \"Puntos de Venta\" aqui, en el sitio web. Si tienes dudas sobre cómo comprarlos o necesitas ayuda para elegir el adecuado, escríbenos desde la sección de contacto y con gusto te asesoramos.",
  },
];

function FAQSection() {
  return (
    <section className="w-full flex flex-col lg:px-[64px] lg:py-[112px] px-[20px] py-[64px] gap-[48px] lg:gap-[80px]">
      <section className="flex flex-col lg:flex-row gap-6 justify-between">
        <div className="flex flex-col gap-6">
          <h2 className="text-4xl lg:text-5xl font-bold">Preguntas frecuentes</h2>
          <p className="text-base lg:text-lg">
            Encuentra respuestas a tus preguntas sobre nuestros productos, su uso y beneficios.
          </p>
        </div>

        <section className="flex items-end">
          <Button
            radius="none"
            className="w-fit border-black"
            variant="ghost"
            href={'#contacto'}
            as={Link}
          >
            Contacto
          </Button>
        </section>
      </section>

      <section>
        <Accordion selectionMode="multiple">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              aria-label={`Accordion ${index + 1}`}
              title={item.title}
            >
              {item.content}
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </section>
  );
}

export default FAQSection;
