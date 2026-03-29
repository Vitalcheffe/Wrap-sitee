import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Terminal, Shield, Lock, Cpu } from 'lucide-react';
import { useRef } from 'react';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, -100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -200]);
  const rotate = useTransform(scrollY, [0, 500], [0, 15]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-20">
      {/* 3D Background Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            transform: 'perspective(1000px) rotateX(60deg) translateY(-100px) translateZ(-500px)',
            transformOrigin: 'top',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/50 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-gray-600 mb-10 shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-black"></span>
            </span>
            The Future of Autonomous Agents
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight text-black mb-8 leading-[0.9]"
          >
            WRAP <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-500 to-black">NEBULA</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-500 mb-12 max-w-3xl mx-auto font-light leading-relaxed"
          >
            The AI agent you can actually verify. <br className="hidden md:block" />
            Local-first. Zero-trust. Auditable by design.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#install"
              className="group relative flex items-center gap-2 rounded-full bg-black px-10 py-5 text-lg font-medium text-white hover:bg-gray-900 transition-all w-full sm:w-auto justify-center overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <Terminal className="h-5 w-5" />
              Get Started
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/Vitalcheffe/Wrap"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-10 py-5 text-lg font-medium text-black hover:border-gray-400 transition-all w-full sm:w-auto justify-center"
            >
              Documentation
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>
        </div>

        {/* Terminal Window Simulation */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="mt-24 mx-auto max-w-5xl w-full aspect-video bg-[#0D0D0D] rounded-2xl border border-white/10 shadow-2xl overflow-hidden relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
          
          {/* Terminal Header */}
          <div className="h-10 bg-white/5 border-b border-white/10 flex items-center px-4 gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
            </div>
            <div className="mx-auto text-[10px] font-mono text-white/30 tracking-widest uppercase">
              nebula-sandbox-v0.1.0 — 128mb limit
            </div>
          </div>

          {/* Terminal Content */}
          <div className="p-6 font-mono text-sm sm:text-base leading-relaxed">
            <div className="flex gap-3 mb-2">
              <span className="text-green-400">➜</span>
              <span className="text-white/40">~</span>
              <span className="text-white">nebula init</span>
            </div>
            <div className="text-white/60 mb-4 ml-8">
              [SYSTEM] Initializing secure V8 sandbox...<br />
              [SYSTEM] Memory limit set to 128MB.<br />
              [SYSTEM] Timeout set to 30000ms.<br />
              [SYSTEM] Input sanitizer loaded (10 patterns).
            </div>
            
            <div className="flex gap-3 mb-2">
              <span className="text-green-400">➜</span>
              <span className="text-white/40">~</span>
              <span className="text-white">nebula start --agent "research-bot"</span>
            </div>
            <div className="text-white/60 mb-4 ml-8">
              <span className="text-blue-400">[nebula]</span> Spawning research-bot...<br />
              <span className="text-blue-400">[nebula]</span> Agent verified. Hash: <span className="text-yellow-400">0x7f8a...2e1c</span><br />
              <span className="text-blue-400">[nebula]</span> Monitoring active. Zero-trust enabled.
            </div>

            <motion.div 
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="w-2 h-5 bg-white/50 inline-block align-middle ml-8"
            />
          </div>

          {/* Scanline Effect */}
          <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] z-20 opacity-20" />
        </motion.div>
      </div>

      {/* Floating 3D-like elements */}
      <motion.div 
        style={{ y: y1, rotate: rotate }}
        className="hidden lg:block absolute -left-20 top-1/2 w-64 h-64 bg-black border border-white/10 rounded-3xl shadow-2xl p-8 -rotate-12 backdrop-blur-sm z-20"
      >
        <div className="flex items-center justify-between mb-6">
          <Cpu className="h-8 w-8 text-white" />
          <div className="text-[10px] font-mono text-white/40">CORE_01</div>
        </div>
        <div className="space-y-4">
          <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
            <motion.div 
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="h-full w-1/3 bg-white"
            />
          </div>
          <div className="h-1.5 w-3/4 bg-white/10 rounded-full" />
          <div className="h-1.5 w-1/2 bg-white/10 rounded-full" />
        </div>
      </motion.div>

      <motion.div 
        style={{ y: y2, rotate: -rotate }}
        className="hidden lg:block absolute -right-20 top-1/3 w-64 h-64 bg-white border border-gray-100 rounded-3xl shadow-2xl p-8 rotate-12 backdrop-blur-sm z-20"
      >
        <div className="flex items-center justify-between mb-6">
          <Shield className="h-8 w-8 text-black" />
          <div className="text-[10px] font-mono text-black/40">SEC_LAYER</div>
        </div>
        <div className="space-y-4">
          <div className="h-1.5 w-full bg-gray-100 rounded-full" />
          <div className="h-1.5 w-3/4 bg-gray-100 rounded-full" />
          <div className="h-1.5 w-1/2 bg-gray-100 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
