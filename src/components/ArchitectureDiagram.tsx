import { useState } from 'react';

interface Node {
  id: string;
  label: string;
  x: number;
  y: number;
  color: string;
  icon: string;
  group: string;
}

interface Connection {
  from: string;
  to: string;
  type: 'sync' | 'async' | 'data';
}

const nodes: Node[] = [
  // Client layer
  { id: 'web', label: 'Web App', x: 200, y: 60, color: '#8b5cf6', icon: '🌐', group: 'client' },
  { id: 'mobile', label: 'Mobile', x: 400, y: 60, color: '#8b5cf6', icon: '📱', group: 'client' },
  { id: 'iot', label: 'IoT Devices', x: 600, y: 60, color: '#8b5cf6', icon: '📡', group: 'client' },
  
  // Gateway
  { id: 'gateway', label: 'API Gateway', x: 400, y: 180, color: '#06b6d4', icon: '🔀', group: 'gateway' },
  { id: 'auth', label: 'Auth Service', x: 650, y: 180, color: '#06b6d4', icon: '🔐', group: 'gateway' },
  
  // Services
  { id: 'user-svc', label: 'User Service', x: 150, y: 320, color: '#10b981', icon: '👤', group: 'services' },
  { id: 'order-svc', label: 'Order Service', x: 350, y: 320, color: '#10b981', icon: '📦', group: 'services' },
  { id: 'payment-svc', label: 'Payment Service', x: 550, y: 320, color: '#10b981', icon: '💳', group: 'services' },
  { id: 'notify-svc', label: 'Notification', x: 700, y: 320, color: '#10b981', icon: '🔔', group: 'services' },
  
  // Message Queue
  { id: 'queue', label: 'Message Queue', x: 400, y: 440, color: '#f59e0b', icon: '📨', group: 'messaging' },
  
  // Data layer
  { id: 'postgres', label: 'PostgreSQL', x: 200, y: 560, color: '#f43f5e', icon: '🐘', group: 'data' },
  { id: 'redis', label: 'Redis Cache', x: 400, y: 560, color: '#f43f5e', icon: '⚡', group: 'data' },
  { id: 's3', label: 'Object Store', x: 600, y: 560, color: '#f43f5e', icon: '🗃️', group: 'data' },
];

const connections: Connection[] = [
  { from: 'web', to: 'gateway', type: 'sync' },
  { from: 'mobile', to: 'gateway', type: 'sync' },
  { from: 'iot', to: 'gateway', type: 'sync' },
  { from: 'gateway', to: 'auth', type: 'sync' },
  { from: 'gateway', to: 'user-svc', type: 'sync' },
  { from: 'gateway', to: 'order-svc', type: 'sync' },
  { from: 'gateway', to: 'payment-svc', type: 'sync' },
  { from: 'order-svc', to: 'queue', type: 'async' },
  { from: 'payment-svc', to: 'queue', type: 'async' },
  { from: 'queue', to: 'notify-svc', type: 'async' },
  { from: 'user-svc', to: 'postgres', type: 'data' },
  { from: 'order-svc', to: 'postgres', type: 'data' },
  { from: 'payment-svc', to: 'redis', type: 'data' },
  { from: 'notify-svc', to: 's3', type: 'data' },
  { from: 'user-svc', to: 'redis', type: 'data' },
];

const groupLabels: Record<string, { label: string; color: string }> = {
  client: { label: 'Client Layer', color: '#8b5cf6' },
  gateway: { label: 'Gateway Layer', color: '#06b6d4' },
  services: { label: 'Service Layer', color: '#10b981' },
  messaging: { label: 'Messaging', color: '#f59e0b' },
  data: { label: 'Data Layer', color: '#f43f5e' },
};

export default function ArchitectureDiagram() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [activeGroup, setActiveGroup] = useState<string | null>(null);

  const getNodeById = (id: string) => nodes.find(n => n.id === id);

  const getConnectionColor = (type: string) => {
    switch (type) {
      case 'sync': return '#06b6d4';
      case 'async': return '#f59e0b';
      case 'data': return '#f43f5e';
      default: return '#475569';
    }
  };

  const isNodeConnected = (nodeId: string) => {
    if (!hoveredNode) return true;
    if (nodeId === hoveredNode) return true;
    return connections.some(
      c => (c.from === hoveredNode && c.to === nodeId) || (c.to === hoveredNode && c.from === nodeId)
    );
  };

  return (
    <section id="architecture" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-emerald-300 to-cyan-400 bg-clip-text text-transparent">
              Architecture Diagram
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Interactive system architecture showing service communication patterns and data flow.
          </p>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {Object.entries(groupLabels).map(([key, { label, color }]) => (
            <button
              key={key}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm transition-all duration-300 ${
                activeGroup === key ? 'bg-slate-800 scale-105' : 'hover:bg-slate-800/50'
              }`}
              onClick={() => setActiveGroup(activeGroup === key ? null : key)}
            >
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: color }} />
              <span className="text-slate-300">{label}</span>
            </button>
          ))}
        </div>

        {/* Connection type legend */}
        <div className="flex flex-wrap justify-center gap-4 mb-8 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-8 h-0.5 bg-cyan-500" />
            <span className="text-slate-400">Synchronous</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-0.5 bg-amber-500 border-dashed" style={{ borderTop: '2px dashed #f59e0b', height: 0 }} />
            <span className="text-slate-400">Asynchronous</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-0.5 bg-rose-500" />
            <span className="text-slate-400">Data Flow</span>
          </div>
        </div>

        {/* Diagram */}
        <div className="relative bg-slate-900/50 border border-slate-800 rounded-3xl p-8 overflow-hidden">
          {/* Grid background */}
          <div className="absolute inset-0 opacity-5">
            <svg width="100%" height="100%">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-cyan-400" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          <svg
            viewBox="0 0 800 640"
            className="w-full h-auto max-h-[600px]"
            style={{ minHeight: '400px' }}
          >
            {/* Connections */}
            {connections.map((conn, i) => {
              const fromNode = getNodeById(conn.from);
              const toNode = getNodeById(conn.to);
              if (!fromNode || !toNode) return null;

              const isHighlighted = hoveredNode && (conn.from === hoveredNode || conn.to === hoveredNode);
              const isDimmed = hoveredNode && !isHighlighted;
              const isGroupFiltered = activeGroup && fromNode.group !== activeGroup && toNode.group !== activeGroup;

              return (
                <line
                  key={i}
                  x1={fromNode.x}
                  y1={fromNode.y}
                  x2={toNode.x}
                  y2={toNode.y}
                  stroke={getConnectionColor(conn.type)}
                  strokeWidth={isHighlighted ? 2.5 : 1.5}
                  strokeDasharray={conn.type === 'async' ? '6,4' : 'none'}
                  opacity={isDimmed || isGroupFiltered ? 0.1 : isHighlighted ? 1 : 0.4}
                  className="transition-all duration-300"
                />
              );
            })}

            {/* Nodes */}
            {nodes.map((node) => {
              const isDimmed = hoveredNode && !isNodeConnected(node.id);
              const isGroupFiltered = activeGroup && node.group !== activeGroup;
              const isHovered = hoveredNode === node.id;

              return (
                <g
                  key={node.id}
                  className="cursor-pointer transition-all duration-300"
                  onMouseEnter={() => setHoveredNode(node.id)}
                  onMouseLeave={() => setHoveredNode(null)}
                  opacity={isDimmed || isGroupFiltered ? 0.2 : 1}
                  transform={isHovered ? `translate(0, -2)` : ''}
                >
                  {/* Glow effect */}
                  {isHovered && (
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r="38"
                      fill={node.color}
                      opacity="0.15"
                      className="animate-pulse"
                    />
                  )}
                  {/* Node circle */}
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r={isHovered ? 32 : 28}
                    fill={`${node.color}20`}
                    stroke={node.color}
                    strokeWidth={isHovered ? 2.5 : 1.5}
                    className="transition-all duration-300"
                  />
                  {/* Icon */}
                  <text
                    x={node.x}
                    y={node.y + 2}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize="18"
                  >
                    {node.icon}
                  </text>
                  {/* Label */}
                  <text
                    x={node.x}
                    y={node.y + 45}
                    textAnchor="middle"
                    fill={isHovered ? '#fff' : '#94a3b8'}
                    fontSize="11"
                    fontWeight={isHovered ? '600' : '400'}
                    className="transition-all duration-300"
                  >
                    {node.label}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>
    </section>
  );
}
