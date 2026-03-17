import AboutContent from "@/Components/About/AboutContent";
import AboutMission from "@/Components/About/AboutMission";
import AboutJourney from "@/Components/About/AboutJourney";
import AboutStudentMessage from "@/Components/About/AboutStudentMessage";
import AboutFounder from "@/Components/About/AboutFounder";
import ScrollProgress from "@/Components/Global/ScrollProgress";
import CTA from "@/Components/Global/CTA";


export default function About() {
    return (
        <main className="min-h-screen bg-white font-[family-name:var(--font-absans)]">
            <ScrollProgress />
            <AboutContent />
            <AboutMission />
            <AboutJourney />
            <AboutFounder />
            <AboutStudentMessage />
            {/* <CTA /> */}
        </main>
    );
}