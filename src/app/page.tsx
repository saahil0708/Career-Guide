import Hero from "@/Components/Global/Hero";
import Features from "@/Components/Global/Features";
import CounsellingImpact from "@/Components/Global/CounsellingImpact";
import Partners from "@/Components/Global/Partners";
import Testimonials from "@/Components/Global/Testimonials";
import FAQ from "@/Components/Global/FAQ";
import CTA from "@/Components/Global/CTA";

export default function Home() {
  return (
    <main id="home">
      <Hero />
      <div id="features">
        <Features />
      </div>
      <CounsellingImpact />
      
      {/* Section Divider */}
      <div className="relative py-8 bg-gray-50 overflow-hidden">
        <div className="max-w-[1450px] mx-auto px-4 lg:px-8">
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-gray-50 px-6">
                <div className="w-2.5 h-2.5 rounded-full bg-[#da2929] opacity-20 animate-pulse"></div>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div id="partners">
        <Partners />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <CTA />
    </main>
  );
}