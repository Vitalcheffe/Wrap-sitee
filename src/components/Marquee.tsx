import { motion } from 'motion/react';

const skills = [
  "Ollama", "Claude 3.5", "GPT-4o", "V8 Sandbox", "Ed25519", "PII Redaction", 
  "Telegram Bot", "VS Code", "TypeScript", "Node.js", "MIT License", "Local-First",
  "Multi-Agent", "Audit Trail", "Plugin System", "14+ Skills"
];

export function Marquee() {
  return (
    <div className="py-20 bg-white overflow-hidden border-y border-gray-100">
      <div className="flex whitespace-nowrap">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-20 items-center"
        >
          {skills.map((skill, i) => (
            <span key={i} className="text-6xl md:text-8xl font-bold tracking-tighter text-gray-100 uppercase hover:text-black transition-colors cursor-default">
              {skill}
            </span>
          ))}
        </motion.div>
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-20 items-center"
        >
          {skills.map((skill, i) => (
            <span key={i + skills.length} className="text-6xl md:text-8xl font-bold tracking-tighter text-gray-100 uppercase hover:text-black transition-colors cursor-default">
              {skill}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
