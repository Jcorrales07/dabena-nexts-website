"use client"

import { ImageCarousel } from "@/components/carousels/";
import ProductCarouselSection from "@/components/pages/landing-page/product-carousel-section";
import ContactUsSection from "@/components/contacts/contact-us-section";
import CertificationSection from "@/components/certifications/certification-sections";
import TestimonialSection from "@/components/testimonials/testimonial-section";
import {BenefitSection, InfoSection} from "@/components/features";
import {ExploreCTASection} from "@/components/ctas"
import GallerySection from "@/components/galleries/gallery-section";

export default function Home() {
    return (
        <main className="w-full flex flex-col items-center">
            <ImageCarousel/>
            <BenefitSection />
            <InfoSection direction={""} title={'La medicina natural de Dabena: una solución saludable y efectiva.'} subtext={"En Dabena, nos enorgullece ofrecer medicinas naturales de alta calidad que brindan beneficios para la salud de forma segura y efectiva. Nuestros productos están respaldados por la naturaleza y respaldados por la ciencia, brindando a nuestros clientes una alternativa confiable a los medicamentos convencionales."} img_url={"/assets/img1.jpg"} img_alt={"Imagen random"} />
            <ProductCarouselSection />
            <InfoSection direction={"nvrt"} title={'Beneficios'} subtext={'En Dabena, creemos en el poder curativo de la naturaleza. Por eso, cada uno de nuestros productos proviene de fuentes confiables y está formulado para cuidar tu bienestar de forma segura, sin químicos agresivos ni efectos secundarios innecesarios. Descubre una forma más sabia, suave y efectiva de sanar tu cuerpo — tal como lo haría la naturaleza.'} img_url={"/assets/img2.jpg"} img_alt={"Imagen random"} />
            <GallerySection />
            <TestimonialSection />
            <CertificationSection />
            <ContactUsSection />
        </main>
    );
}
