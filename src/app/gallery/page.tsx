import GalleryHero from "@/Components/Gallery/GalleryHero";
import GalleryGrid from "@/Components/Gallery/GalleryGrid";
import ScrollProgress from "@/Components/Global/ScrollProgress";

export default function GalleryPage() {
    return (
        <main className="min-h-screen bg-white">
            <ScrollProgress />
            <GalleryHero />
            <GalleryGrid />
        </main>
    );
}
