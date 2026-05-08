'use client';
import { motion } from 'framer-motion';
import { Suspense, Component, ReactNode, lazy } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import GDPThree with SSR disabled — Three.js requires browser APIs
const GDPThree = dynamic(() => import('./GDPThree'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-full">
      <div className="text-white text-center">
        <div className="animate-spin text-4xl mb-2">⚡</div>
        <div>Loading 3D Model...</div>
      </div>
    </div>
  ),
});

// Custom Error Boundary
interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ThreeErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('3D Model Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="w-full h-full bg-gray-800 bg-opacity-50 rounded-lg flex items-center justify-center text-white">
          <div className="text-center">
            <div className="text-4xl mb-2">⚠️</div>
            <div>3D Model Failed to Load</div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

const Hero = () => {
  return (
    <div
      className="relative h-screen flex items-center justify-center bg-gradient-to-r from-primary to-secondary bg-cover bg-center"
      style={{
        backgroundImage: `url('/backer.jpeg')`,
      }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center md:hidden"
        style={{ backgroundImage: "url('/back.jpeg')" }}
      ></div>
      <div
        className="absolute inset-0 bg-cover bg-center hidden md:block"
        style={{ backgroundImage: "url('/backer.jpeg')" }}
      ></div>
      
      {/* Fixed z-index for overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      
      {/* Main content container with two columns */}
      <div className="relative z-10 w-full h-full flex flex-col md:flex-row items-center justify-between px-4 md:px-8 lg:px-16">
        
        {/* Left side - Text content */}
        <div className="flex-1 text-center content-center md:text-left text-white my-40 md:my-0">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl mb-2"
          >
            COLLABORATION. DEVELOPMENT. LEADERSHIP.
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-6xl font-bold mb-4 max-w-2xl"
          >
            Growth Driven Pioneers
          </motion.h1>
          
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all"
            onClick={() => window.location.href = "#about"}
          >
            Get Started
          </motion.button>
        </div>

        {/* Right side - 3D Model */}
        <div className="flex-1 h-1/2 md:h-full flex justify-center">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="w-full h-full max-w-3xl relative z-20"
          >
            <ThreeErrorBoundary>
              <GDPThree />
            </ThreeErrorBoundary>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
