import { useState } from 'react';

interface StackLayer {
  id: string;
  name: string;
  color: string;
  bgGradient: string;
  icon: string;
  technologies: string[];
  description: string;
}

const stackLayers: StackLayer[] = [
  {
    id: 'presentation',
    name: 'Presentation Layer',
    color: 'from-violet-500 to-purple-600',
    bgGradient: 'from-violet-500/10 to-purple-600/10',
    icon: '🎨',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    description: 'User-facing interfaces built with modern frameworks for rich, interactive experiences.',
  },
  {
    id: 'api',
    name: 'API Gateway',
    color: 'from-blue-500 to-cyan-500',
    bgGradient: 'from-blue-500/10 to-cyan-500/10',
    icon: '🌐',
    technologies: ['GraphQL', 'REST', 'gRPC', 'Rate Limiting', 'Authentication'],
    description: 'Unified entry point managing routing, composition, and security for all client requests.',
  },
  {
    id: 'services',
    name: 'Service Layer',
    color: 'from-emerald-500 to-teal-500',
    bgGradient: 'from-emerald-500/10 to-teal-500/10',
    icon: '⚙️',
    technologies: ['Node.js', 'Go', 'Python', 'Microservices', 'Event-Driven'],
    description: 'Domain-specific services handling business logic with independent scaling capabilities.',
  },
  {
    id: 'data',
    name: 'Data Layer',
    color: 'from-amber-500 to-orange-500',
    bgGradient: 'from-amber-500/10 to-orange-500/10',
    icon: '🗄️',
    technologies: ['PostgreSQL', 'Redis', 'MongoDB', 'Elasticsearch', 'S3'],
    description: 'Multi-model data persistence with caching, search, and object storage capabilities.',
  },
  {
    id: 'infrastructure',
    name: 'Infrastructure',
    color: 'from-rose-500 to-pink-600',
    bgGradient: 'from-rose-500/10 to-pink-600/10',
    icon: '🏗️',
    technologies: ['Kubernetes', 'Docker', 'Terraform', 'AWS', 'CI/CD'],
    description: 'Cloud-native infrastructure with container orchestration and automated deployments.',
  },
];

export default function StackOverview() {
  const [activeLayer, setActiveLayer] = useState<string | null>(null);

  return (
    <section id="stack" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              Stack Overview
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Each layer is designed for independence, scalability, and resilience — 
            enabling teams to ship faster with confidence.
          </p>
        </div>

        {/* Stack visualization */}
        <div className="space-y-4">
          {stackLayers.map((layer, index) => (
            <div
              key={layer.id}
              className={`relative rounded-2xl border transition-all duration-500 cursor-pointer overflow-hidden
                ${activeLayer === layer.id
                  ? `border-slate-600 bg-gradient-to-r ${layer.bgGradient} scale-[1.02] shadow-2xl`
                  : 'border-slate-800 bg-slate-900/50 hover:border-slate-700 hover:bg-slate-900/80'
                }`}
              onClick={() => setActiveLayer(activeLayer === layer.id ? null : layer.id)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Layer number indicator */}
              <div className="absolute left-0 top-0 bottom-0 w-1">
                <div className={`h-full bg-gradient-to-b ${layer.color} rounded-full opacity-60`} />
              </div>

              <div className="p-6 md:p-8 pl-8">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <span className="text-3xl">{layer.icon}</span>
                    <div>
                      <h3 className="text-xl md:text-2xl font-semibold text-white">{layer.name}</h3>
                      <p className="text-slate-400 text-sm mt-1">{layer.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-500 font-mono">L{stackLayers.length - index}</span>
                    <svg
                      className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${activeLayer === layer.id ? 'rotate-180' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                {/* Technologies */}
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    activeLayer === layer.id ? 'max-h-40 opacity-100 mt-6' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="flex flex-wrap gap-2">
                    {layer.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1.5 rounded-lg text-sm font-medium bg-gradient-to-r ${layer.color} text-white shadow-lg`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Connection lines visual */}
        <div className="mt-12 flex justify-center">
          <div className="flex items-center gap-2 text-slate-500">
            <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
            <span className="text-xs font-mono">Click any layer to expand</span>
            <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
