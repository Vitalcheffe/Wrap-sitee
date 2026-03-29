import { motion } from 'motion/react';
import { Shield, Cpu, Lock, Zap, Network, Code2, Globe, Database, Terminal } from 'lucide-react';

const features = [
  {
    icon: <Shield className="h-6 w-6" />,
    title: "V8 Sandbox",
    description: "Isolated execution with 128MB memory limit, 30s timeout, and blocked dangerous patterns.",
    size: "col-span-1 md:col-span-2",
    color: "bg-gray-50"
  },
  {
    icon: <Lock className="h-6 w-6" />,
    title: "Ed25519 Audit",
    description: "Cryptographically signed, hash-chained, and immutable action logs.",
    size: "col-span-1",
    color: "bg-white"
  },
  {
    icon: <Cpu className="h-6 w-6" />,
    title: "Local-First",
    description: "Native Ollama support for 100% private, offline AI execution.",
    size: "col-span-1",
    color: "bg-white"
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Input Sanitizer",
    description: "Blocks 10 prompt injection, 6 SQL, and 5 XSS patterns. Auto-redacts PII.",
    size: "col-span-1 md:col-span-2",
    color: "bg-gray-50"
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "14 Core Skills",
    description: "From web.search to code.edit, every skill is hash-verified before loading.",
    size: "col-span-1",
    color: "bg-white"
  },
  {
    icon: <Database className="h-14 w-14" />, // Reusing Database icon for SQLite Memory
    title: "SQLite Memory",
    description: "Local-only memory storage. Never transmitted, never synced.",
    size: "col-span-1",
    color: "bg-white"
  }
];

export function Features() {
  return (
    <section id="features" className="py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-4"
            >
              Core Capabilities
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-black leading-tight">
              Engineered for <br />
              Absolute Security.
            </h2>
          </div>
          <p className="text-xl text-gray-500 max-w-md font-light">
            A framework that doesn't just run agents, but secures them with cryptographic proof and hardware-level isolation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ 
                y: -10,
                rotateX: 2,
                rotateY: -2,
                transition: { duration: 0.4 }
              }}
              className={`${feature.size} ${feature.color} p-10 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all group relative overflow-hidden flex flex-col justify-between min-h-[300px]`}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="relative z-10">
                <div className="h-14 w-14 rounded-2xl bg-white shadow-sm border border-gray-50 flex items-center justify-center text-black mb-8 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">{feature.title}</h3>
                <p className="text-gray-500 text-lg font-light leading-relaxed">
                  {feature.description}
                </p>
              </div>
              
              <div className="absolute bottom-0 right-0 p-8 opacity-0 group-hover:opacity-10 transition-opacity">
                <Terminal className="h-32 w-32 text-black" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
