import ProductsCatalog from "@/components/pages/product-page/products-catalog";
import { InfoSection } from "@/components/features";
import ContactUsSection from "@/components/contacts/contact-us-section";
import FAQSection from "@/components/faqs/faq-section";
import { SingleTestimonialSection } from "@/components/testimonials/testimonial-section";

const text = `
    A diferencia de los medicamentos químicos, que suelen tratar solo los síntomas y pueden traer efectos secundarios no deseados, nuestras fórmulas naturales actúan en armonía con tu cuerpo. Están elaboradas con ingredientes de origen vegetal, cuidadosamente seleccionados para restaurar el equilibrio interno sin agredir tu organismo.
        No sobrecargan tu hígado.
        No alteran tus ritmos naturales.
        No crean dependencia.
    Las medicinas naturales de Dabena trabajan desde la raíz del problema, apoyando los procesos de sanación de tu cuerpo de forma progresiva, segura y sostenible. Porque sanar no debería significar comprometer tu bienestar en otras áreas.
`

export default function Productos() {
    return (
        <main className="w-full flex flex-col items-center">
            <ProductsCatalog />
            <InfoSection direction={''} img_url={"/assets/img5.jpg"} img_alt={'random img'} title={"Beneficios"} subtext={text} />
            <SingleTestimonialSection />
            <FAQSection />
            <ContactUsSection />
        </main>
    );
}