/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useSpring } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Screenshots } from './components/Screenshots';
import { Comparison } from './components/Comparison';
import { CodeExample } from './components/CodeExample';
import { Installation } from './components/Installation';
import { Footer } from './components/Footer';
import { Marquee } from './components/Marquee';
import { Roadmap } from './components/Roadmap';
import { NebulaCore } from './components/NebulaCore';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-white text-black selection:bg-black selection:text-white overflow-x-hidden">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-black z-[100] origin-left"
        style={{ scaleX }}
      />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Screenshots />
        <Features />
        <NebulaCore />
        <CodeExample />
        <Comparison />
        <Roadmap />
        <Installation />
      </main>
      <Footer />
    </div>
  );
}
