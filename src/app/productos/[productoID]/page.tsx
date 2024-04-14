import {ProductHeader1} from "@/components/product-header";
import {BenefitLayout228, InfoSection} from "@/components/features";
import {Testimonial6} from "@/components/testimonials";
import FAQLayout5 from "@/components/faqs/faq-5";
import {ContactLayout17} from "@/components/contacts";

interface ProductViewProps {
    params: {
        productoID: string;
    };
}


export default function ProductView({params}: ProductViewProps) {
    const {productoID: producto} = params;

    return (
        <main className="w-full flex flex-col items-center">
            <ProductHeader1 productoID={producto}/>
            <InfoSection direction={''} img_url={'/assets/2.png'} img_alt={'Imagen random'} subtext={"Nuestro producto es una medicina natural elaborada con ingredientes de alta calidad. Proporciona múltiples beneficios para la salud y es fácil de usar en el día a día."} title={"Nuestro producto: la solución natural para tu bienestar."}/>
            <Testimonial6 producto={producto} />
            <BenefitLayout228 />
            <InfoSection direction={''} img_url={'/assets/3.png'} img_alt={"img random"} title={"Beneficios del Producto"} subtext={"Descubre los beneficios únicos que nuestro producto puede ofrecerte. Con ingredientes naturales y de alta calidad, nuestro producto te ayudará a mejorar tu bienestar y alcanzar un estilo de vida saludable."}></InfoSection>
            <FAQLayout5 producto={producto} />
            <ContactLayout17 />
        </main>
    );
}