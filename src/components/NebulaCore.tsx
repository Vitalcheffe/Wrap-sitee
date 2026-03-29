import { motion } from 'motion/react';
import { Terminal, Zap, Shield, Cpu } from 'lucide-react';

export function NebulaCore() {
  return (
    <section className="py-40 bg-black relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-mono text-white/40 uppercase tracking-[0.3em] mb-4"
          >
            Core Architecture
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
            The Nebula Engine.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Left Column */}
          <div className="space-y-12">
            {[
              { icon: <Shield className="h-6 w-6" />, title: "V8 Isolation", desc: "Each agent runs in a dedicated, memory-capped V8 context." },
              { icon: <Zap className="h-6 w-6" />, title: "30s Execution", desc: "Hard timeouts prevent runaway processes and resource exhaustion." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-right group"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/40 font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Center Visual (The "Claw" / Core) */}
          <div className="relative flex items-center justify-center py-20 lg:py-0">
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                rotate: { duration: 40, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
              className="relative w-64 h-64 md:w-96 md:h-96"
            >
              {/* Outer Rings */}
              <div className="absolute inset-0 border border-white/5 rounded-full" />
              <div className="absolute inset-4 border border-white/10 rounded-full border-dashed animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-12 border border-white/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
              
              {/* The Core */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-white rounded-full blur-2xl opacity-20 animate-pulse" />
                <div className="relative z-10 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(255,255,255,0.3)]">
                  <Terminal className="h-10 w-10 text-black" />
                </div>
              </div>

              {/* Orbiting Particles */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    rotate: 360 
                  }}
                  transition={{ 
                    duration: 10 + i * 2, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                  className="absolute inset-0"
                  style={{ rotate: i * 60 }}
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            {[
              { icon: <Cpu className="h-6 w-6" />, title: "Zero-Trust", desc: "No filesystem or network access without explicit user permission." },
              { icon: <Terminal className="h-6 w-6" />, title: "Audit Logs", desc: "Every system call is logged and verifiable via the CLI." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-left group"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/40 font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Terminal Feed Simulation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 max-w-3xl mx-auto bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
        >
          <div className="h-8 bg-white/5 border-b border-white/10 flex items-center px-4 gap-2">
            <div className="w-2 h-2 rounded-full bg-white/20" />
            <div className="w-2 h-2 rounded-full bg-white/20" />
            <div className="w-2 h-2 rounded-full bg-white/20" />
            <span className="text-[10px] font-mono text-white/20 ml-2">LIVE_SANDBOX_FEED</span>
          </div>
          <div className="p-6 font-mono text-xs text-white/40 space-y-1 h-48 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10" />
            <div className="animate-[scroll_20s_linear_infinite]">
              <div>[20:41:46] INJECT_SCAN: Pattern "SQL_UNION" matched.</div>
              <div className="text-red-400">[20:41:46] SECURITY: Blocking request from agent_0x42.</div>
              <div>[20:41:47] SANDBOX: Resetting context for agent_0x42.</div>
              <div>[20:41:48] SYSTEM: Memory usage stable at 14.2MB.</div>
              <div>[20:41:49] VERIFY: Hash check passed for core-lib.</div>
              <div>[20:41:50] NETWORK: Blocked outbound request to api.malicious.com.</div>
              <div>[20:41:51] INJECT_SCAN: No patterns matched.</div>
              <div>[20:41:52] SYSTEM: Sandbox v0.1.0 heartbeat OK.</div>
              <div>[20:41:53] AGENT: research-bot initialized.</div>
              <div>[20:41:54] MONITOR: Active sessions: 4.</div>
              <div>[20:41:55] INJECT_SCAN: Pattern "OS_COMMAND" matched.</div>
              <div className="text-red-400">[20:41:55] SECURITY: Blocking request from research-bot.</div>
            </div>
          </div>
        </motion.div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scroll {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
      `}} />
    </section>
  );
}
