import ContactHero from "@/Components/Contact/ContactHero";
import ContactMap from "@/Components/Contact/ContactMap";
import ScrollProgress from "@/Components/Global/ScrollProgress";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white">
            <ScrollProgress />
            <ContactHero />
            <ContactMap />
        </main>
    );
}
