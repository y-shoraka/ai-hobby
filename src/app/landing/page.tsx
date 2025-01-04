import { TopBanner } from "@/components/top-banner";
import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { ClientLogos } from "@/components/client-logos";
import { Features } from "@/components/features";
import { Metrics } from "@/components/metrics";
import { Testimonials } from "@/components/testimonials";

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <TopBanner />
      <Navigation />
      <main>
        <Hero />
        <Features />
        <Metrics />
        <Testimonials />
        <ClientLogos />
      </main>
    </div>
  );
}
