'use client';

export default function ServersPage() {
  const servers = [
    {
      name: 'Vera Vanilla NA East',
      region: 'North America East',
      players: '145/200',
      map: 'Procedural 4000',
      wipe: 'Weekly Thursday',
      status: 'online',
      features: ['Pure Vanilla', '2018-2019 Features', 'Active Admins'],
    },
    {
      name: 'Vera Vanilla EU West',
      region: 'Europe West',
      players: '178/200',
      map: 'Procedural 4000',
      wipe: 'Weekly Thursday',
      status: 'online',
      features: ['Pure Vanilla', '2018-2019 Features', 'Low Ping'],
    },
    {
      name: 'Vera Vanilla NA West',
      region: 'North America West',
      players: '132/200',
      map: 'Procedural 3500',
      wipe: 'Bi-Weekly',
      status: 'online',
      features: ['Pure Vanilla', 'PvP Focused', 'Fair Play'],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
          Vera Rust Servers
        </h1>
        <p className="text-center text-gray-400 mb-12 text-lg">
          100% Vanilla • 2018-2019 Experience • No Mods
        </p>

        {/* Server Optimizations Info */}
        <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-xl p-6 mb-12">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <span className="text-2xl">⚡</span>
            Our Server Optimizations
          </h2>
          <div className="grid md:grid-cols-2 gap-4 text-gray-300">
            <div className="flex items-start gap-3">
              <span className="text-orange-400 mt-1">✓</span>
              <div>
                <strong className="text-white">High-Performance Hardware</strong>
                <p className="text-sm text-gray-400">Dedicated servers with latest-gen processors and NVMe SSDs</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-orange-400 mt-1">✓</span>
              <div>
                <strong className="text-white">DDoS Protection</strong>
                <p className="text-sm text-gray-400">Enterprise-grade protection ensuring 99.9% uptime</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-orange-400 mt-1">✓</span>
              <div>
                <strong className="text-white">Optimized Tick Rate</strong>
                <p className="text-sm text-gray-400">Smooth 60+ tick rate for responsive gameplay</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-orange-400 mt-1">✓</span>
              <div>
                <strong className="text-white">Low Latency Network</strong>
                <p className="text-sm text-gray-400">Strategic data center locations for minimal ping</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-orange-400 mt-1">✓</span>
              <div>
                <strong className="text-white">Memory Optimization</strong>
                <p className="text-sm text-gray-400">Advanced RAM management preventing server lag</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-orange-400 mt-1">✓</span>
              <div>
                <strong className="text-white">Anti-Cheat Protection</strong>
                <p className="text-sm text-gray-400">Enhanced detection systems keeping gameplay fair</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-orange-400 mt-1">✓</span>
              <div>
                <strong className="text-white">Regular Backups</strong>
                <p className="text-sm text-gray-400">Automated backups every 30 minutes to prevent data loss</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-orange-400 mt-1">✓</span>
              <div>
                <strong className="text-white">24/7 Monitoring</strong>
                <p className="text-sm text-gray-400">Real-time server monitoring with instant issue resolution</p>
              </div>
            </div>
          </div>
        </div>

        {/* Server List */}
        <div className="grid gap-6">
          {servers.map((server, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl border border-gray-700 hover:border-orange-500 transition-all p-6"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-white">{server.name}</h3>
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-medium uppercase">
                      {server.status}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-3">
                    <span>📍 {server.region}</span>
                    <span>👥 {server.players}</span>
                    <span>🗺️ {server.map}</span>
                    <span>🔄 {server.wipe}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {server.features.map((feature, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-orange-500/10 text-orange-400 rounded-full text-xs font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <button className="px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white rounded-lg font-semibold transition-all whitespace-nowrap">
                    Connect Now
                  </button>
                  <button className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-medium transition-all whitespace-nowrap">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">
            All servers feature authentic 2018-2019 Rust gameplay with zero modifications
          </p>
          <p className="text-sm text-gray-500">
            Need help connecting? Check our Discord for connection guides and server info
          </p>
        </div>
      </div>
    </div>
  );
}
