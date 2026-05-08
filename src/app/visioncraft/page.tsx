import Header from '@/visioncraft/components/Header';
import Hero from '@/visioncraft/components/hero/hero';
import AboutSection from '@/visioncraft/components/about';
import Timeline from '@/visioncraft/components/Timeline';
import KeyFeatures from '@/visioncraft/components/keyfeatures';
import FAQSection from '@/visioncraft/components/FAQs';
import Footer from '@/visioncraft/components/footer';

export const metadata = {
  title: 'VisionCraft | GDP',
  description: 'VisionCraft event by Growth Driven Pioneers',
};

export default function VisionCraftPage() {
  return (
    <div className="min-h-screen overflow-clip">
      <Header />
      <Hero />
      <div className="bg-[url('/bag.png')] bg-fixed bg-cover bg-center">
        <AboutSection />
        <Timeline />
        <KeyFeatures />
        <FAQSection />
        <Footer />
      </div>
    </div>
  );
}
