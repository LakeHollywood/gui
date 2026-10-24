import { useState } from 'react';

interface TechCard {
  category: string;
  icon: string;
  color: string;
  items: {
    name: string;
    description: string;
    metric: string;
  }[];
}

const techCategories: TechCard[] = [
  {
    category: 'Performance',
    icon: '⚡',
    color: 'from-amber-500 to-orange-500',
    items: [
      { name: 'Response Time', description: 'Average API latency', metric: '< 50ms' },
      { name: 'Throughput', description: 'Requests per second', metric: '100K+ rps' },
      { name: 'Cache Hit Rate', description: 'Redis cache efficiency', metric: '98.5%' },
      { name: 'CDN Coverage', description: 'Global edge locations', metric: '200+ PoPs' },
    ],
  },
  {
    category: 'Reliability',
    icon: '🛡️',
    color: 'from-emerald-500 to-teal-500',
    items: [
      { name: 'Uptime SLA', description: 'Annual availability target', metric: '99.99%' },
      { name: 'MTTR', description: 'Mean time to recovery', metric: '< 5 min' },
      { name: 'RPO/RTO', description: 'Data loss / recovery time', metric: '< 1 min' },
      { name: 'Circuit Breakers', description: 'Fault isolation coverage', metric: '100%' },
    ],
  },
  {
    category: 'Scalability',
    icon: '📈',
    color: 'from-blue-500 to-indigo-500',
    items: [
      { name: 'Auto-scaling', description: 'Horizontal pod scaling', metric: '0-1000 pods' },
      { name: 'Database Shards', description: 'Horizontal data partitioning', metric: '64 shards' },
      { name: 'Multi-Region', description: 'Active-active deployment', metric: '5 regions' },
      { name: 'Queue Capacity', description: 'Message throughput buffer', metric: '1M msg/s' },
    ],
  },
  {
    category: 'Security',
    icon: '🔒',
    color: 'from-rose-500 to-pink-500',
    items: [
      { name: 'Encryption', description: 'Data at rest & in transit', metric: 'AES-256' },
      { name: 'Auth Protocol', description: 'Identity verification', metric: 'OAuth 2.0' },
      { name: 'Compliance', description: 'Regulatory certifications', metric: 'SOC 2' },
      { name: 'Vulnerability Scan', description: 'Automated security checks', metric: 'Daily' },
    ],
  },
];

export default function TechDetails() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section className="py-24 px-6 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-amber-300 to-rose-400 bg-clip-text text-transparent">
              Technical Metrics
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Key performance indicators and operational metrics across the stack.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {techCategories.map((cat, index) => (
            <button
              key={cat.category}
              onClick={() => setActiveCategory(index)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                activeCategory === index
                  ? `bg-gradient-to-r ${cat.color} text-white shadow-lg`
                  : 'bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.category}</span>
            </button>
          ))}
        </div>

        {/* Metrics grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {techCategories[activeCategory].items.map((item, index) => (
            <div
              key={item.name}
              className="group relative bg-slate-900/80 border border-slate-800 rounded-2xl p-6 hover:border-slate-600 transition-all duration-500 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Hover glow */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${techCategories[activeCategory].color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              <div className="relative">
                <p className="text-slate-500 text-xs font-mono uppercase tracking-wider mb-2">
                  {item.description}
                </p>
                <h4 className="text-white font-semibold text-lg mb-3">{item.name}</h4>
                <div className={`text-3xl font-bold bg-gradient-to-r ${techCategories[activeCategory].color} bg-clip-text text-transparent`}>
                  {item.metric}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 text-center">
            <div className="text-4xl mb-3">🚀</div>
            <h4 className="text-white font-semibold mb-2">Deploy Frequency</h4>
            <p className="text-cyan-400 text-2xl font-bold">50+ / day</p>
            <p className="text-slate-500 text-sm mt-1">Continuous delivery pipeline</p>
          </div>
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 text-center">
            <div className="text-4xl mb-3">🔄</div>
            <h4 className="text-white font-semibold mb-2">Change Failure Rate</h4>
            <p className="text-emerald-400 text-2xl font-bold">&lt; 1%</p>
            <p className="text-slate-500 text-sm mt-1">Automated testing & rollback</p>
          </div>
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 text-center">
            <div className="text-4xl mb-3">👥</div>
            <h4 className="text-white font-semibold mb-2">Team Velocity</h4>
            <p className="text-amber-400 text-2xl font-bold">2x</p>
            <p className="text-slate-500 text-sm mt-1">Faster feature delivery</p>
          </div>
        </div>
      </div>
    </section>
  );
}
