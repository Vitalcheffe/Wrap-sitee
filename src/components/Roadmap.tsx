import { motion } from 'motion/react';

const roadmap = [
  { version: "v8", title: "Core Architecture", status: "shipped", desc: "Core agent, V8 sandbox, Ed25519 audit, Telegram, CLI." },
  { version: "v9", title: "IDE Integration", status: "shipped", desc: "Full-featured VS Code extension with audit tree." },
  { version: "v10", title: "Plugin System", status: "shipped", desc: "Extensible skill architecture with hash verification." },
  { version: "v11", title: "Multi-Agent", status: "shipped", desc: "Shared context bus for agent orchestration." },
  { version: "v12", title: "Community", status: "active", desc: "Published extensions and community-driven skills." },
  { version: "v13", title: "Enterprise", status: "planned", desc: "SSO, compliance reporting, and team management." }
];

export function Roadmap() {
  return (
    <section className="py-32 bg-gray-50 border-y border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-4">The Future</div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-black mb-6">Roadmap</h2>
          <p className="text-xl text-gray-500 font-light">From a secure kernel to an enterprise-grade agentic ecosystem.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roadmap.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm relative overflow-hidden group"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-2xl font-black tracking-tighter text-black">{item.version}</span>
                <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${
                  item.status === 'shipped' ? 'bg-green-50 text-green-600 border-green-100' :
                  item.status === 'active' ? 'bg-blue-50 text-blue-600 border-blue-100 animate-pulse' :
                  'bg-gray-50 text-gray-400 border-gray-100'
                }`}>
                  {item.status}
                </span>
              </div>
              <h3 className="text-xl font-bold text-black mb-3">{item.title}</h3>
              <p className="text-gray-500 font-light leading-relaxed">{item.desc}</p>
              
              <div className="absolute -bottom-4 -right-4 text-8xl font-black text-gray-50 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                {item.version}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
