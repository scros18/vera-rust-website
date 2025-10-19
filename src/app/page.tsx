export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section with Background Image */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(/site-bg.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* Gradient Overlays for cinematic effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-orange-950/20 via-transparent to-red-950/20"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 px-4 py-32">
          <div className="flex flex-col items-center space-y-6 animate-fade-in-up">
            {/* Carbon Fiber Card behind VERA */}
            <div className="inline-block">
              <div className="relative px-8 py-6 backdrop-blur-md bg-black/40 rounded-2xl border border-white/10 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl"></div>
                <h1 className="relative text-5xl md:text-7xl font-display font-black tracking-wider rust-text glow-orange">
                  VERA
                </h1>
              </div>
            </div>

            {/* Subtitle Card */}
            <div className="inline-block">
              <div className="px-6 py-3 backdrop-blur-md bg-black/30 rounded-xl border border-white/5">
                <p className="text-lg md:text-2xl text-gray-300 font-light tracking-wide">
                  Pure Vanilla Rust • 2018-2019 Experience
                </p>
              </div>
            </div>

            {/* Credits Section */}
            <div className="mt-16 flex flex-col items-center space-y-4">
              <div className="flex items-center gap-6">
                <div className="group flex items-center gap-2 px-5 py-2.5 backdrop-blur-sm bg-white/5 rounded-lg border border-white/5 hover:border-white/10 transition-all">
                  <img src="/steam.webp" alt="Steam" className="w-6 h-6 object-contain opacity-70 group-hover:opacity-100 transition-opacity" />
                  <span className="text-xs font-medium text-gray-400 group-hover:text-gray-300 transition-colors tracking-wide">STEAM</span>
                </div>
                <div className="group flex items-center gap-2 px-5 py-2.5 backdrop-blur-sm bg-white/5 rounded-lg border border-white/5 hover:border-blue-500/20 transition-all">
                  <svg className="w-6 h-6 text-gray-400 group-hover:text-blue-400 transition-colors" viewBox="0 0 88 88" fill="currentColor">
                    <path d="M0 12.402l35.687-4.86.016 34.423-35.67.203zm35.67 33.529l.028 34.453L.028 75.48.026 45.7zm4.326-39.025L87.314 0v41.527l-47.318.376zm47.329 39.349l-.011 41.34-47.318-6.678-.066-34.739z"/>
                  </svg>
                  <span className="text-xs font-medium text-gray-400 group-hover:text-blue-400 transition-colors tracking-wide">WINDOWS</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Smooth separator fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black via-black/90 to-transparent z-20"></div>
      </section>

      {/* Features Section - Clean separation */}
      <section className="relative py-24 px-4 bg-black overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        {/* Softened decorative glow elements - positioned away from edges */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-orange-600/5 rounded-full blur-[150px] -translate-y-1/2 -translate-x-1/2"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-[150px] translate-y-1/2 translate-x-1/2"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-8 py-4 backdrop-blur-sm bg-white/5 rounded-xl border border-white/10 mb-4">
              <h2 className="text-4xl md:text-5xl font-display font-bold tracking-wider">
                <span className="rust-text">Why Choose Vera?</span>
              </h2>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: '🎮',
                title: 'Pure Vanilla',
                desc: 'No mods, no plugins. Just raw Rust from 2018-2019 that you remember.',
              },
              {
                icon: '⚡',
                title: 'Legacy Features',
                desc: 'Golden era gameplay with authentic 2018-2019 mechanics.',
              },
              {
                icon: '🏆',
                title: 'Competitive',
                desc: 'Climb ranks and prove yourself on the leaderboard.',
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="group glass-dark hover:glass p-8 rounded-xl transition-all hover:scale-105 hover:shadow-2xl hover:shadow-orange-600/20 text-center md:text-left"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-display font-bold mb-3 tracking-wide group-hover:text-orange-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 font-light leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Server Optimizations Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black"></div>
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-orange-600/3 rounded-full blur-[140px] -translate-y-1/2 -translate-x-1/4"></div>
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-red-600/3 rounded-full blur-[140px] -translate-y-1/3 translate-x-1/4"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 tracking-wider">
              <span className="rust-text">Premium Infrastructure</span>
            </h2>
            <p className="text-gray-400 text-lg font-light">
              Optimized for the ultimate vanilla Rust experience
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: '⚡', title: '60+ Tick Rate', desc: 'Smooth responsive combat' },
              { icon: '🛡️', title: 'DDoS Protected', desc: '99.9% uptime guaranteed' },
              { icon: '💾', title: 'NVMe Storage', desc: 'Zero loading delays' },
              { icon: '📡', title: 'Low Latency', desc: 'Minimal ping worldwide' },
              { icon: '🔒', title: 'Anti-Cheat', desc: 'Fair gameplay enforced' },
              { icon: '💿', title: 'Auto Backups', desc: 'Every 30 minutes' },
              { icon: '🧠', title: 'RAM Optimized', desc: 'Advanced management' },
              { icon: '👁️', title: '24/7 Monitoring', desc: 'Real-time oversight' },
            ].map((opt, i) => (
              <div
                key={i}
                className="group glass-dark hover:glass p-6 rounded-lg text-center transition-all hover:scale-105"
              >
                <div className="text-4xl mb-3">{opt.icon}</div>
                <h3 className="font-display font-bold mb-1 text-sm tracking-wide group-hover:text-orange-400 transition-colors">
                  {opt.title}
                </h3>
                <p className="text-gray-500 text-xs font-light">{opt.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-32 px-4 bg-black overflow-hidden">
        {/* Softened decorative glow elements - positioned away from edges */}
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-orange-600/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>
        
        {/* Subtle pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,140,0,0.3) 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-4 gap-8 px-4">
            {[
              { value: '5+', label: 'Active Servers' },
              { value: '1000+', label: 'Players' },
              { value: '24/7', label: 'Uptime' },
              { value: '100%', label: 'Vanilla' },
            ].map((stat, i) => (
              <div
                key={i}
                className="glass-dark p-10 rounded-xl text-center hover:glass transition-all group"
              >
                <div className="text-5xl md:text-6xl font-display font-black rust-text mb-3 group-hover:glow-orange transition-all leading-tight">
                  {stat.value}
                </div>
                <div className="text-gray-400 font-light tracking-wide text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        {/* Smooth fade to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-transparent to-black z-20"></div>
      </section>

      {/* Call to Action with Second Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image 2 */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(/site-bg-2.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-orange-950/20 via-transparent to-red-950/20"></div>
        </div>

        {/* Smooth separator fade from above */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black via-black/90 to-transparent z-20"></div>

        <div className="max-w-4xl mx-auto relative z-10 px-4">
          <div className="flex flex-col items-center space-y-6">
            <div className="inline-block">
              <div className="px-10 py-6 backdrop-blur-md bg-black/40 rounded-2xl border border-white/10 shadow-2xl">
                <h2 className="text-4xl md:text-5xl font-display font-bold tracking-wider text-center">
                  <span className="rust-text glow-orange">Ready to Play?</span>
                </h2>
              </div>
            </div>
            <div className="inline-block">
              <div className="px-8 py-3 backdrop-blur-sm bg-black/30 rounded-xl border border-white/5">
                <p className="text-lg md:text-xl text-gray-300 font-light text-center">
                  Join thousands returning to authentic Rust
                </p>
              </div>
            </div>
            <a
              href="/register"
              className="group relative inline-block px-12 py-4 overflow-hidden mt-4"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 opacity-0 group-hover:opacity-30 blur-xl transition-opacity"></div>
              <span className="relative font-display font-bold text-lg tracking-widest">
                GET STARTED NOW
              </span>
            </a>
          </div>
        </div>

        {/* Smooth fade to bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black via-black/90 to-transparent z-20"></div>
      </section>
    </div>
  );
}
