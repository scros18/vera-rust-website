'use client';

import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const { user, isAuthenticated, logout } = useAuth();
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-dark border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="flex flex-col">
              <span className="font-display font-black text-lg tracking-wider rust-text glow-orange">
                VERA
              </span>
              <span className="text-[10px] text-gray-400 tracking-widest uppercase -mt-1">
                Rust Servers
              </span>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            {[
              { href: '/', label: 'Home' },
              { href: '/servers', label: 'Servers' },
              { href: '/leaderboard', label: 'Leaderboard' },
              { href: '/legacy', label: 'Legacy' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  pathname === link.href
                    ? 'bg-white/10 text-orange-400'
                    : 'text-gray-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-3">
            {isAuthenticated && user ? (
              <>
                <Link
                  href="/profile"
                  className="flex items-center space-x-2 px-3 py-2 rounded-lg glass hover:bg-white/10 transition-all group"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-sm font-bold">
                      {user.displayName.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <span className="hidden md:block text-sm font-medium group-hover:text-orange-400 transition-colors">
                    {user.displayName}
                  </span>
                </Link>
                <button
                  onClick={logout}
                  className="px-5 py-2.5 glass hover:bg-white/20 rounded-lg transition-all text-sm font-semibold border border-white/10 hover:border-white/20"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="px-5 py-2.5 glass hover:bg-white/20 rounded-lg transition-all text-sm font-semibold border border-white/10 hover:border-white/20 backdrop-blur-md"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="relative group px-6 py-2.5 rounded-lg font-bold text-sm transition-all overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 group-hover:from-orange-500 group-hover:to-red-500 transition-all"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 opacity-0 group-hover:opacity-20 blur-xl transition-opacity"></div>
                  <span className="relative">Register</span>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
