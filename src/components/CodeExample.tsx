import { motion } from 'motion/react';
import { Terminal, Shield, Lock } from 'lucide-react';

const codeString = `import { WrapAgent, OllamaProvider, V8Sandbox } from 'wrap-nebula';

// Initialize with local Ollama model
const agent = new WrapAgent({
  provider: new OllamaProvider({ model: 'llama3' }),
  sandbox: new V8Sandbox({ memoryLimit: '512MB' }),
  audit: {
    enabled: true,
    keyPair: process.env.ED25519_KEY
  },
  piiRedaction: true
});

// Register a custom skill
agent.registerSkill({
  name: 'analyze_data',
  description: 'Analyzes CSV data securely',
  execute: async (context) => {
    // Code runs in isolated V8 sandbox
    return await context.sandbox.run(context.code);
  }
});

// Execute task with full audit trail
const result = await agent.run("Analyze the Q3 financial data.");
console.log(result.auditSignature); // Cryptographic proof
`;

export function CodeExample() {
  return (
    <section className="py-40 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-4">
              Developer Experience
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-black mb-8 leading-tight">
              Built for <br />
              the Modern Stack.
            </h2>
            <p className="text-xl text-gray-500 mb-12 font-light leading-relaxed">
              A clean, type-safe API that feels native to your existing workflow. 
              Zero dependencies on external cloud services for core execution.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              {[
                { label: "Tests Passing", value: "46/46" },
                { label: "TS Errors", value: "0" },
                { label: "Skills", value: "14+" },
                { label: "License", value: "MIT" }
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-3xl font-bold text-black mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider font-bold">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative perspective-[2000px]"
          >
            <div className="absolute -inset-4 bg-gray-100 rounded-[2.5rem] blur-2xl opacity-50" />
            <div className="relative rounded-[2rem] overflow-hidden bg-black border border-gray-800 shadow-2xl transform-gpu">
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800 bg-[#0a0a0a]">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                </div>
                <div className="text-xs text-gray-500 font-mono">agent.ts</div>
                <div className="w-12"></div>
              </div>
              <div className="p-8 overflow-x-auto">
                <pre className="text-sm font-mono leading-relaxed text-gray-400">
                  <code>
                    {codeString.split('\n').map((line, i) => (
                      <motion.div 
                        key={i} 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.02 }}
                        className="table-row"
                      >
                        <span className="table-cell text-gray-800 pr-6 select-none text-right">{i + 1}</span>
                        <span className="table-cell whitespace-pre">{line}</span>
                      </motion.div>
                    ))}
                  </code>
                </pre>
              </div>
            </div>
            
            {/* Floating badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 bg-white border border-gray-100 rounded-2xl shadow-xl p-4 flex items-center gap-3 z-30"
            >
              <Shield className="h-5 w-5 text-black" />
              <span className="text-sm font-bold">V8 Sandbox Active</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
