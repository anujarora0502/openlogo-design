import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SeeInAction from '@/components/SeeInAction';
import Features from '@/components/Features';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import GetInTouch from '@/components/GetInTouch';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <SeeInAction />
      <Features />
      <Pricing />
      <FAQ />
      <GetInTouch />
      <Footer />
    </main>
  );
}
