import { Github, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2">
            <span className="font-black tracking-tighter text-lg">WRAP NEBULA</span>
            <span className="text-gray-400 text-sm">© {new Date().getFullYear()}</span>
          </div>
          <p className="text-xs text-gray-400 font-medium uppercase tracking-widest">
            Built by VitalCheffe • 16 • Casablanca, Morocco
          </p>
        </div>
        
        <div className="flex items-center gap-6 text-sm text-gray-500">
          <a href="#" className="hover:text-black transition-colors">MIT License</a>
          <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
        </div>
        
        <div className="flex items-center gap-4">
          <a href="https://github.com/Vitalcheffe/Wrap" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black transition-colors">
            <span className="sr-only">GitHub</span>
            <Github className="h-5 w-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-black transition-colors">
            <span className="sr-only">Twitter</span>
            <Twitter className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
