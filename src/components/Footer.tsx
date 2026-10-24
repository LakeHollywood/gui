export default function Footer() {
  return (
    <footer className="border-t border-slate-800 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <svg width="32" height="32" viewBox="0 0 80 80">
              <path
                d="M40 10 L40 70 M40 15 C55 25 60 45 40 65 M40 15 C25 25 20 45 40 65"
                stroke="url(#footerGrad)"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="footerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#22d3ee" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
              </defs>
            </svg>
            <span className="text-lg font-bold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              SAIL Architecture
            </span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-400">
            <a href="#stack" className="hover:text-cyan-400 transition-colors">Stack</a>
            <a href="#architecture" className="hover:text-cyan-400 transition-colors">Architecture</a>
            <span className="text-slate-600">•</span>
            <span>Documentation</span>
            <span>API Reference</span>
            <span>Status Page</span>
          </div>

          {/* Copyright */}
          <p className="text-slate-500 text-sm">
            © 2026 SAIL. All rights reserved.
          </p>
        </div>

        {/* Bottom decoration */}
        <div className="mt-8 pt-8 border-t border-slate-800/50 flex flex-wrap justify-center gap-4 text-xs text-slate-600">
          <span>Built with React + TypeScript</span>
          <span>•</span>
          <span>Styled with Tailwind CSS</span>
          <span>•</span>
          <span>Designed for Scale</span>
        </div>
      </div>
    </footer>
  );
}
