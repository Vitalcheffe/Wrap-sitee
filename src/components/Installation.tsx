import { motion } from 'motion/react';
import { Copy, Terminal } from 'lucide-react';

export function Installation() {
  return (
    <section id="install" className="py-24 bg-white border-t border-gray-200">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl mb-4">
          Ready to deploy?
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Install WRAP NEBULA via npm and start building secure AI agents in minutes.
        </p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-[#0D0D0D] border border-white/10 rounded-2xl overflow-hidden shadow-2xl mb-12"
        >
          {/* Terminal Header */}
          <div className="h-10 bg-white/5 border-b border-white/10 flex items-center px-4 gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/30" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/30" />
              <div className="w-3 h-3 rounded-full bg-green-500/30" />
            </div>
            <div className="mx-auto text-[10px] font-mono text-white/20 tracking-widest uppercase">
              bash — installation
            </div>
          </div>

          <div className="p-6 flex items-center justify-between group">
            <div className="flex items-center gap-4 text-left">
              <span className="text-green-500 font-mono">➜</span>
              <code className="text-sm sm:text-base font-mono text-white/90">
                curl -fsSL https://nebula.sh/install | bash
              </code>
            </div>
            <button 
              className="p-3 text-white/40 hover:text-white hover:bg-white/10 rounded-xl transition-all"
              onClick={() => navigator.clipboard.writeText('curl -fsSL https://raw.githubusercontent.com/Vitalcheffe/Wrap/main/install.sh | bash')}
              title="Copy to clipboard"
            >
              <Copy className="h-5 w-5" />
            </button>
          </div>
          
          <div className="px-6 pb-6 text-left font-mono text-xs text-white/30 space-y-1">
            <div>[INFO] Downloading nebula-cli v0.1.0...</div>
            <div>[INFO] Verifying checksum... OK</div>
            <div>[INFO] Installing to /usr/local/bin/nebula...</div>
            <div className="text-green-500/50">[SUCCESS] Nebula installed successfully!</div>
          </div>
        </motion.div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-gray-400 uppercase tracking-widest">
            <span className="h-1.5 w-1.5 rounded-full bg-gray-300"></span>
            nebula init
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-gray-400 uppercase tracking-widest">
            <span className="h-1.5 w-1.5 rounded-full bg-gray-300"></span>
            nebula start
          </div>
        </div>
        
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://github.com/Vitalcheffe/Wrap"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-black px-8 py-3 text-sm font-medium text-white hover:bg-gray-800 transition-colors w-full sm:w-auto"
          >
            Read the Docs
          </a>
          <a
            href="https://github.com/Vitalcheffe/Wrap/tree/main/examples"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-gray-200 bg-white px-8 py-3 text-sm font-medium text-black hover:bg-gray-50 transition-colors w-full sm:w-auto"
          >
            View Examples
          </a>
        </div>
      </div>
    </section>
  );
}
