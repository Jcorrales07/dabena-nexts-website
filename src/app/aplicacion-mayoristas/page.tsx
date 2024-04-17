import {ContactLayout2} from "@/components/contacts";
import {CTALayout13} from "@/components/ctas";
import FeatureLayout121 from "../../components/features/feature-layout-121";
import ContactLayout15 from "@/components/contacts/contact-layout-15";
import {FAQLayout8} from "@/components/faqs";

export default function ApplicacionMayoristas() {
    return (
        <main className="w-full flex flex-col items-center">
            <CTALayout13 />
            <FeatureLayout121 />
            <ContactLayout2 />
            <FAQLayout8 />
            <ContactLayout15 />
        </main>
    );
}