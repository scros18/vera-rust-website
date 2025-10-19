export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section with Background Image */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-8 py-4 backdrop-blur-sm bg-white/5 rounded-xl border border-white/10 mb-2">
              <h2 className="text-3xl md:text-4xl font-display font-bold tracking-wider text-white">
                Premium Infrastructure
              </h2>
            </div>
            <p className="text-gray-400 mt-4">Optimized for the best vanilla Rust experience</p>
          </div>
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

            {/* Description Card */}
            <div className="inline-block">
              <div className="px-5 py-2 backdrop-blur-sm bg-black/20 rounded-lg border border-white/5">
                <p className="text-sm md:text-base text-gray-400 font-light">
                  No mods • No plugins • Just the original Rust experience you remember
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
              <a
                href="/register"
                className="group relative px-8 py-4 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative font-semibold text-lg tracking-wide">JOIN NOW</span>
              </a>
              <a
                href="/servers"
                className="group px-8 py-4 glass hover:bg-white/10 rounded-lg font-semibold text-lg tracking-wide transition-all border border-white/10"
              >
                BROWSE SERVERS
              </a>
            </div>
          </div>
        </div>

        {/* Smooth separator fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black via-black/90 to-transparent z-20"></div>
      </section>

      {/* Features Section - Clean separation */}
      <section className="relative py-24 px-4 bg-black">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
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
                className="group glass-dark hover:glass p-8 rounded-xl transition-all hover:scale-105 hover:shadow-2xl hover:shadow-orange-600/20"
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
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
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
      <section className="relative py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: '5+', label: 'Active Servers' },
              { value: '1000+', label: 'Players' },
              { value: '24/7', label: 'Uptime' },
              { value: '100%', label: 'Vanilla' },
            ].map((stat, i) => (
              <div
                key={i}
                className="glass-dark p-8 rounded-xl text-center hover:glass transition-all group"
              >
                <div className="text-5xl font-display font-black rust-text mb-2 group-hover:glow-orange transition-all">
                  {stat.value}
                </div>
                <div className="text-gray-400 font-light tracking-wide">{stat.label}</div>
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
                <h2 className="text-4xl md:text-5xl font-display font-bold tracking-wider">
                  <span className="rust-text glow-orange">Ready to Play?</span>
                </h2>
              </div>
            </div>
            <div className="inline-block">
              <div className="px-8 py-3 backdrop-blur-sm bg-black/30 rounded-xl border border-white/5">
                <p className="text-lg md:text-xl text-gray-300 font-light">
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
