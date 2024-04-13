"use client"

import ImageCarousel from "@/components/landing-page/image-carousel";
// import ProductCarouselSection from "@/components/landing-page/product-carousel-section/ProductCarouselSection";
// import ContactUsSection from "@/components/landing-page/ContactUsSection";
// import CertificationSection from "@/components/landing-page/CertificationSection";
// import TestimonialSection from "@/components/landing-page/TestimonialSection";
// import {BenefitSection, ExploreCTASection, InfoSection} from "@/components/landing-page/CTASections";
// import GallerySection from "@/components/landing-page/GallerySection";

export default function Home() {
    return (
        <main className="w-full flex flex-col items-center">
            <ImageCarousel/>
            {/*<BenefitSection />*/}
            {/*<InfoSection direction={''} title={'La medicina natural de Dabena: una solución saludable y efectiva.'} subtext={"En Dabena, nos enorgullece ofrecer medicinas naturales de alta calidad que brindan beneficios para la salud de forma segura y efectiva. Nuestros productos están respaldados por la naturaleza y respaldados por la ciencia, brindando a nuestros clientes una alternativa confiable a los medicamentos convencionales."} img_url={"/assets/img1.jpg"} img_alt={"Imagen random"} />*/}
            {/*<InfoSection direction={"nvrt"} title={'Beneficios'} subtext={'Descubre los beneficios de elegir medicinas naturales de los proveedores de Dabena. Nuestros productos están respaldados por la naturaleza y ofrecen soluciones efectivas para mejorar tu salud de manera segura y confiable.'} img_url={"/assets/img2.jpg"} img_alt={"Imagen random"} />*/}
            {/*<GallerySection />*/}
            {/*<ProductCarouselSection />*/}
            {/*<ExploreCTASection />*/}
            {/*<TestimonialSection />*/}
            {/*<CertificationSection />*/}
            {/*<ContactUsSection />*/}
        </main>
    );
}
