export default function HeroSection({ scrollY }: { scrollY: number }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-950" />
      
      {/* Animated waves */}
      <div className="absolute bottom-0 left-0 right-0 h-64 opacity-30">
        <svg
          className="absolute bottom-0 w-full h-32"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        >
          <path
            d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,30 1440,60 L1440,120 L0,120 Z"
            fill="rgba(6,182,212,0.3)"
          />
          <path
            d="M0,80 C240,40 480,100 720,80 C960,60 1200,100 1440,80 L1440,120 L0,120 Z"
            fill="rgba(14,165,233,0.2)"
          />
        </svg>
        <svg
          className="absolute bottom-0 w-full h-24"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          style={{ transform: `translateY(${scrollY * 0.05}px)` }}
        >
          <path
            d="M0,40 C180,80 360,20 540,40 C720,60 900,20 1080,40 C1260,60 1380,30 1440,40 L1440,100 L0,100 Z"
            fill="rgba(34,211,238,0.2)"
          />
        </svg>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-pulse"
            style={{
              left: `${(i * 5.3) % 100}%`,
              top: `${(i * 7.1) % 100}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${2 + (i % 3)}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        style={{ transform: `translateY(${scrollY * -0.2}px)`, opacity: Math.max(0, 1 - scrollY / 600) }}
      >
        {/* Sail icon */}
        <div className="mb-8 inline-block">
          <svg width="80" height="80" viewBox="0 0 80 80" className="mx-auto drop-shadow-[0_0_20px_rgba(34,211,238,0.5)]">
            <path
              d="M40 10 L40 70 M40 15 C55 25 60 45 40 65 M40 15 C25 25 20 45 40 65"
              stroke="url(#sailGradient)"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="sailGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#22d3ee" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
          <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
            SAIL
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 mb-4 font-light tracking-wide">
          Architecture Stack Overview
        </p>
        <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          A comprehensive view of the modern technology stack powering scalable, 
          resilient, and high-performance distributed systems.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#stack"
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-medium text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105"
          >
            Explore Stack
          </a>
          <a
            href="#architecture"
            className="px-8 py-3 border border-slate-600 rounded-full font-medium text-slate-300 hover:border-cyan-500/50 hover:text-cyan-300 transition-all duration-300"
          >
            View Architecture
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-cyan-400/60">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
