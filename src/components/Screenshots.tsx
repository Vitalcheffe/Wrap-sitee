import { motion, useScroll, useTransform } from 'motion/react';
import { Image as ImageIcon, Layout, MessageSquare, Terminal } from 'lucide-react';
import { useRef } from 'react';

export function Screenshots() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [-10, 10]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <section ref={containerRef} className="py-40 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-4"
            >
              Interface & Experience
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-black mb-8 leading-tight">
              A Command Center <br />
              for your Agents.
            </h2>
            <div className="space-y-8">
              {[
                { icon: <Layout className="h-6 w-6" />, title: "VS Code Extension", desc: "Native integration with your favorite IDE." },
                { icon: <MessageSquare className="h-6 w-6" />, title: "Telegram Bot", desc: "Control agents via natural language on the go." },
                { icon: <Terminal className="h-6 w-6" />, title: "CLI Tooling", desc: "Powerful command line interface for power users." }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="h-12 w-12 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-black shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-1">{item.title}</h3>
                    <p className="text-gray-500 font-light">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative perspective-[2000px]">
            <motion.div
              style={{ rotateX, rotateY, scale }}
              className="relative aspect-[4/5] bg-[#0D0D0D] border border-white/10 rounded-[3rem] shadow-2xl overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent z-10" />
              
              {/* Terminal Simulation in Screenshot */}
              <div className="absolute inset-0 p-8 font-mono text-[10px] sm:text-xs text-white/40 overflow-hidden select-none">
                <div className="flex gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-red-500/30" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500/30" />
                  <div className="w-2 h-2 rounded-full bg-green-500/30" />
                </div>
                <div className="space-y-1">
                  <div className="text-green-500/60">nebula@sandbox:~$ nebula status</div>
                  <div>[INFO] Sandbox active. Uptime: 14h 22m</div>
                  <div>[INFO] Memory: 42MB / 128MB</div>
                  <div>[INFO] CPU: 1.2%</div>
                  <div className="h-4" />
                  <div className="text-blue-500/60">nebula@sandbox:~$ nebula logs --agent "core-agent"</div>
                  <div>[2026-03-29 20:41:46] core-agent: Processing request...</div>
                  <div>[2026-03-29 20:41:47] core-agent: Sanitizing input...</div>
                  <div className="text-yellow-500/60">[WARN] core-agent: Potential injection detected. Blocking.</div>
                  <div>[2026-03-29 20:41:48] core-agent: Sandbox reset.</div>
                  <div className="h-4" />
                  <div className="text-purple-500/60">nebula@sandbox:~$ nebula verify --all</div>
                  <div>[SUCCESS] All agent hashes verified.</div>
                  <div>[SUCCESS] Zero-trust policy enforced.</div>
                </div>
                
                {/* Visualizing the "Claw" / Nebula Core */}
                <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-64 h-64 opacity-10 blur-3xl bg-white rounded-full" />
                <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex items-center justify-center">
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 90, 180, 270, 360]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="relative"
                  >
                    <Terminal className="h-32 w-32 text-white/10" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 border-2 border-white/20 rounded-full animate-ping" />
                    </div>
                  </motion.div>
                </div>
              </div>
              
              {/* Floating UI elements */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 right-10 w-48 h-32 bg-white/5 backdrop-blur-xl rounded-2xl shadow-xl border border-white/10 z-20 p-4"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="h-2 w-12 bg-white/40 rounded-full" />
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                </div>
                <div className="space-y-2">
                  <div className="h-1 w-full bg-white/10 rounded-full" />
                  <div className="h-1 w-3/4 bg-white/10 rounded-full" />
                  <div className="h-1 w-1/2 bg-white/10 rounded-full" />
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-20 -left-10 w-56 h-40 bg-black rounded-2xl shadow-2xl z-20 p-6 border border-white/5"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Terminal className="h-4 w-4 text-white/60" />
                  <span className="text-[10px] font-mono text-white/40">SANDBOX_MONITOR</span>
                </div>
                <div className="space-y-2">
                  <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      className="h-full w-1/2 bg-white/20"
                    />
                  </div>
                  <div className="h-1 w-3/4 bg-white/5 rounded-full" />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
