import Header from '@/code-struct/components/Header';
import Hero from '@/code-struct/components/hero/hero';
import AboutSection from '@/code-struct/components/about';
import Timeline from '@/code-struct/components/Timeline';
import KeyFeatures from '@/code-struct/components/keyfeatures';
import FAQSection from '@/code-struct/components/FAQs';
import Footer from '@/code-struct/components/footer';

export const metadata = {
  title: 'CodeStruct | GDP',
  description: 'CodeStruct event by Growth Driven Pioneers',
};

export default function CodeStructPage() {
  return (
    <div className="min-h-screen overflow-clip">
      <Header />
      <Hero />
      <div className="bg-[url('/Star1.png')] bg-fixed bg-cover bg-center">
        <AboutSection />
        <Timeline />
        <KeyFeatures />
        <FAQSection />
        <Footer />
      </div>
    </div>
  );
}
