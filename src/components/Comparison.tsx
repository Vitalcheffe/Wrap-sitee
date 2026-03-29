import { motion } from 'motion/react';
import { Check, X } from 'lucide-react';

const competitors = [
  { name: "WRAP NEBULA", isWrap: true },
  { name: "Kilo", isWrap: false },
  { name: "Cline", isWrap: false },
  { name: "Cursor", isWrap: false }
];

const features = [
  { name: "Code Sandbox", values: [true, false, false, false] },
  { name: "Audit Trail", values: [true, false, false, false] },
  { name: "PII Protection", values: [true, false, false, false] },
  { name: "Local-First", values: [true, "partial", "partial", false] },
  { name: "Zero API Keys (Ollama)", values: [true, false, false, false] },
  { name: "Telegram Integration", values: [true, false, false, false] },
  { name: "Open Source (MIT)", values: [true, true, true, false] },
];

export function Comparison() {
  return (
    <section id="comparison" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl mb-4">
            The problem nobody talks about
          </h2>
          <p className="text-lg text-gray-600">
            Every AI coding agent on the market sends your code to a cloud API. No sandbox. No audit trail. No cryptographic guarantees. 
            WRAP NEBULA is built on the opposite foundation: <span className="font-bold text-black">never trust, always verify.</span>
          </p>
        </div>

        <div className="overflow-x-auto bg-[#0D0D0D] rounded-3xl border border-white/10 shadow-2xl">
          {/* Terminal Header */}
          <div className="h-10 bg-white/5 border-b border-white/10 flex items-center px-6 gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-white/10" />
              <div className="w-3 h-3 rounded-full bg-white/10" />
              <div className="w-3 h-3 rounded-full bg-white/10" />
            </div>
            <div className="mx-auto text-[10px] font-mono text-white/20 tracking-widest uppercase">
              comparison_matrix.json
            </div>
          </div>
          
          <table className="w-full text-left border-collapse font-mono text-sm">
            <thead>
              <tr>
                <th className="p-6 border-b border-white/10 bg-[#0D0D0D] sticky left-0 z-10 w-1/3 text-white/40 uppercase tracking-widest text-xs">Feature</th>
                {competitors.map((comp, i) => (
                  <th key={i} className={`p-6 border-b border-white/10 text-center font-bold ${comp.isWrap ? 'text-white bg-white/5' : 'text-white/20'}`}>
                    {comp.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature, i) => (
                <motion.tr 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="border-b border-white/5 hover:bg-white/5 transition-colors"
                >
                  <td className="p-6 font-medium text-white/60 bg-[#0D0D0D] sticky left-0 z-10">
                    {feature.name}
                  </td>
                  {feature.values.map((val, j) => (
                    <td key={j} className={`p-6 text-center ${j === 0 ? 'bg-white/5' : ''}`}>
                      {val === true ? (
                        <Check className={`inline-block h-5 w-5 ${j === 0 ? 'text-green-500' : 'text-white/20'}`} />
                      ) : val === "partial" ? (
                        <span className="text-[10px] font-bold text-white/20 uppercase tracking-widest">Partial</span>
                      ) : (
                        <X className="inline-block h-5 w-5 text-red-500/20" />
                      )}
                    </td>
                  ))}
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
