import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { ProblemStrip } from '@/components/ProblemStrip';
import { Products } from '@/components/Products';
import { InsightFeatures } from '@/components/InsightFeatures';
import { HowItWorks } from '@/components/HowItWorks';
import { Stats } from '@/components/Stats';
import { Portfolio } from '@/components/Portfolio';
import { About } from '@/components/About';
import { PricingTeaser } from '@/components/PricingTeaser';
import { FAQ } from '@/components/FAQ';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProblemStrip />
      <Products />
      <InsightFeatures />
      <HowItWorks />
      <Stats />
      <Portfolio />
      <About />
      <PricingTeaser />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
