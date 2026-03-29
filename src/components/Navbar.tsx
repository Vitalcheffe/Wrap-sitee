import { motion } from 'motion/react';
import { Github, Terminal, Menu } from 'lucide-react';

export function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl"
    >
      <div className="mx-auto flex h-16 items-center justify-between px-6 rounded-full border border-white/20 bg-white/70 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.05)]">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 bg-black rounded-lg flex items-center justify-center text-white">
            <Terminal className="h-5 w-5" />
          </div>
          <span className="font-black tracking-tighter text-xl">WRAP NEBULA</span>
        </div>
        
        <div className="hidden md:flex items-center gap-10 text-sm font-bold uppercase tracking-widest text-gray-400">
          <a href="#features" className="hover:text-black transition-colors">Features</a>
          <a href="#comparison" className="hover:text-black transition-colors">Comparison</a>
          <a href="#install" className="hover:text-black transition-colors">Docs</a>
        </div>
        
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Vitalcheffe/Wrap"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-black transition-colors"
          >
            <Github className="h-5 w-5" />
          </a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#install"
            className="rounded-full bg-black px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-white hover:bg-gray-800 transition-all shadow-lg shadow-black/10"
          >
            Deploy
          </motion.a>
          <button className="md:hidden p-2 text-black">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
