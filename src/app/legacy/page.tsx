'use client';

export default function LegacyPage() {
  return (
    <div className="relative min-h-screen bg-black">
      {/* Background Image */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: 'url(/site-bg-3.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <div className="inline-block px-8 py-4 backdrop-blur-md bg-black/40 rounded-2xl border border-white/10 mb-4">
            <h1 className="text-4xl md:text-5xl font-display font-bold rust-text glow-orange">
              2018-2019 Rust Features
            </h1>
          </div>
          <p className="text-gray-300 text-lg">
            Experience the golden era of Rust with authentic gameplay mechanics
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="backdrop-blur-md bg-black/40 rounded-xl border border-white/10 p-6 shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-4xl">🔫</div>
              <h2 className="text-2xl font-display font-bold text-white">Classic Weapons</h2>
            </div>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">•</span>
                <span>Original weapon balance and damage models</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">•</span>
                <span>Classic recoil patterns from 2018-2019</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">•</span>
                <span>Pre-nerf bolt action and AK-47 mechanics</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">•</span>
                <span>Original crossbow and compound bow feel</span>
              </li>
            </ul>
          </div>

          <div className="backdrop-blur-md bg-black/40 rounded-xl border border-white/10 p-6 shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-4xl">🏗️</div>
              <h2 className="text-2xl font-display font-bold text-white">Building System</h2>
            </div>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">•</span>
                <span>Original building mechanics and placement</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">•</span>
                <span>Classic raid dynamics and defense strategies</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">•</span>
                <span>Traditional cupboard authorization system</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">•</span>
                <span>Authentic resource costs and build times</span>
              </li>
            </ul>
          </div>

          <div className="backdrop-blur-md bg-black/40 rounded-xl border border-white/10 p-6 shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-4xl">⛏️</div>
              <h2 className="text-2xl font-display font-bold text-white">Resource Gathering</h2>
            </div>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">•</span>
                <span>Original node spawn rates and locations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">•</span>
                <span>Classic tool progression and efficiency</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">•</span>
                <span>Traditional farming and harvesting mechanics</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">•</span>
                <span>Authentic loot tables and drop rates</span>
              </li>
            </ul>
          </div>

          <div className="backdrop-blur-md bg-black/40 rounded-xl border border-white/10 p-6 shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-4xl">🎯</div>
              <h2 className="text-2xl font-display font-bold text-white">PvP Combat</h2>
            </div>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">•</span>
                <span>Original movement speed and mechanics</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">•</span>
                <span>Classic damage models and hitboxes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">•</span>
                <span>Traditional healing and medical system</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">•</span>
                <span>Authentic armor and protection values</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Why Vanilla Section */}
        <div className="backdrop-blur-md bg-black/30 border border-white/10 rounded-2xl p-8 shadow-2xl">
          <h2 className="text-3xl font-display font-bold text-white mb-6 text-center rust-text">
            Why Pure Vanilla 2018-2019?
          </h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-4xl mb-3">🎮</div>
              <h3 className="font-bold text-white mb-2">Authentic Experience</h3>
              <p className="text-gray-300 text-sm">
                Play Rust exactly as it was during its golden age, without modern changes that altered core gameplay
              </p>
            </div>
            <div>
              <div className="text-4xl mb-3">⚖️</div>
              <h3 className="font-bold text-white mb-2">Balanced Gameplay</h3>
              <p className="text-gray-300 text-sm">
                The 2018-2019 era had the most balanced meta before controversial updates changed the game
              </p>
            </div>
            <div>
              <div className="text-4xl mb-3">👥</div>
              <h3 className="font-bold text-white mb-2">Community Favorite</h3>
              <p className="text-gray-300 text-sm">
                Join thousands of players who prefer the original Rust experience over modern modifications
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Experience Original Rust?
          </h3>
          <p className="text-gray-300 mb-6">
            Join our servers and relive the golden era of Rust gaming
          </p>
          <a
            href="/servers"
            className="inline-block px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 hover:scale-105 text-white rounded-lg font-semibold text-lg transition-all shadow-lg"
          >
            Browse Servers
          </a>
        </div>
      </div>
    </div>
  );
}
