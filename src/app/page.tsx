import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { Industries } from '@/components/Industries';
import { Portfolio } from '@/components/Portfolio';
import { SocialProof } from '@/components/SocialProof';
import { About } from '@/components/About';
import { LeadMagnet } from '@/components/LeadMagnet';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Industries />
      <Portfolio />
      <SocialProof />
      <About />
      <LeadMagnet />
      <Contact />
      <Footer />
    </main>
  );
}
