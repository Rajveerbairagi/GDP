import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import WhatWeDo from '@/components/WhatWeDo';
import InkSpace from '@/components/InkSpace/InkSpace';
import Gallery from '@/components/Gallery';
import Codestruct from '@/components/Events/CodeStruct';
import Visioncraft from '@/components/Events/VisionCraft';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <WhatWeDo />
      <Visioncraft />
      <Codestruct />
      <InkSpace />
      <Gallery />
      <Footer />
    </div>
  );
}
