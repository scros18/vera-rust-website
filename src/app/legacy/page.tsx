'use client';

export default function LegacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
          2018-2019 Rust Features
        </h1>
        <p className="text-center text-gray-400 mb-12 text-lg">
          Experience the golden era of Rust with authentic gameplay mechanics
        </p>

        {/* Hero Image Placeholder */}
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-12 mb-12 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="text-6xl mb-4">🎮</div>
            <p className="text-gray-400">
              [Rust Game Transparent PNG Image Placeholder]
              <br />
              <span className="text-sm">Images featuring iconic Rust weapons, tools, and building elements</span>
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-4xl">🔫</div>
              <h2 className="text-2xl font-bold text-white">Classic Weapons</h2>
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
            <div className="mt-4 p-3 bg-gray-900 rounded-lg text-center text-gray-400 text-sm">
              [Transparent PNG: AK-47, Bolt Action Rifle Icons]
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-4xl">🏗️</div>
              <h2 className="text-2xl font-bold text-white">Building System</h2>
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
            <div className="mt-4 p-3 bg-gray-900 rounded-lg text-center text-gray-400 text-sm">
              [Transparent PNG: Building Plan, Tool Cupboard Icons]
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-4xl">⛏️</div>
              <h2 className="text-2xl font-bold text-white">Resource Gathering</h2>
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
            <div className="mt-4 p-3 bg-gray-900 rounded-lg text-center text-gray-400 text-sm">
              [Transparent PNG: Pickaxe, Hatchet, Rock Icons]
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-4xl">🎯</div>
              <h2 className="text-2xl font-bold text-white">PvP Combat</h2>
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
            <div className="mt-4 p-3 bg-gray-900 rounded-lg text-center text-gray-400 text-sm">
              [Transparent PNG: Bandages, Med Kit, Syringe Icons]
            </div>
          </div>
        </div>

        {/* Why Vanilla Section */}
        <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-xl p-8">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            Why Pure Vanilla 2018-2019?
          </h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-4xl mb-3">🎮</div>
              <h3 className="font-bold text-white mb-2">Authentic Experience</h3>
              <p className="text-gray-400 text-sm">
                Play Rust exactly as it was during its golden age, without modern changes that altered core gameplay
              </p>
            </div>
            <div>
              <div className="text-4xl mb-3">⚖️</div>
              <h3 className="font-bold text-white mb-2">Balanced Gameplay</h3>
              <p className="text-gray-400 text-sm">
                The 2018-2019 era had the most balanced meta before controversial updates changed the game
              </p>
            </div>
            <div>
              <div className="text-4xl mb-3">👥</div>
              <h3 className="font-bold text-white mb-2">Community Favorite</h3>
              <p className="text-gray-400 text-sm">
                Join thousands of players who prefer the original Rust experience over modern modifications
              </p>
            </div>
          </div>
        </div>

        {/* Image Gallery Placeholder */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            Iconic Rust Elements
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Stone Hatchet', 'Wood Door', 'Sleeping Bag', 'Furnace', 'Code Lock', 'Sheet Metal', 'Scrap', 'Cloth'].map((item, i) => (
              <div key={i} className="bg-gray-800 border border-gray-700 rounded-lg p-6 text-center hover:border-orange-500 transition-colors">
                <div className="text-4xl mb-2">📦</div>
                <p className="text-gray-400 text-sm">[{item} PNG]</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Experience Original Rust?
          </h3>
          <p className="text-gray-400 mb-6">
            Join our servers and relive the golden era of Rust gaming
          </p>
          <a
            href="/servers"
            className="inline-block px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white rounded-lg font-semibold text-lg transition-all transform hover:scale-105"
          >
            Browse Servers
          </a>
        </div>
      </div>
    </div>
  );
}
