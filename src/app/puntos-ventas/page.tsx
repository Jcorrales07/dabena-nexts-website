import {HeaderLayout47} from "@/components/headers";
import {ContactLayout369, ContactLayout5} from "@/components/contacts";
import {FAQLayout3} from "@/components/faqs";

export default function PuntosVentas() {
    return (
        <section className="w-full flex flex-col">
            <HeaderLayout47/>
            <ContactLayout369/>
            <FAQLayout3 />
            <ContactLayout5 />
        </section>
    );
}