import ProductsCatalog from "@/components/pages/product-page/products-catalog";
import {InfoSection} from "@/components/features";
import ContactUsSection from "@/components/contacts/contact-us-section";
import FAQSection from "@/components/faqs/faq-section";
import {SingleTestimonialSection} from "@/components/testimonials/testimonial-section";

export default function Productos() {
    return (
        <main className="w-full flex flex-col items-center">
            <ProductsCatalog />
            <InfoSection direction={''} img_url={"/assets/img5.jpg"} img_alt={'random img'} title={"Beneficios"} subtext={"Las medicinas naturales ofrecen una alternativa segura y efectiva a las medicinas tradicionales. Están compuestas por ingredientes naturales que ayudan a mejorar la salud de manera holística, sin los efectos secundarios negativos que pueden tener los medicamentos químicos."} />
            <SingleTestimonialSection />
            <FAQSection />
            <ContactUsSection />
        </main>
    );
}