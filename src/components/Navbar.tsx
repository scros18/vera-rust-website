'use client';

import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const { user, isAuthenticated, logout } = useAuth();
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navigationLinks = [
    { href: '/', label: 'Home', icon: '🏠' },
    { href: '/servers', label: 'Servers', icon: '🖥️' },
    { href: '/forums', label: 'Forums', icon: '💬' },
    { href: '/leaderboard', label: 'Leaderboard', icon: '🏆' },
    { href: '/legacy', label: 'Legacy', icon: '⚡' },
  ];

  return (
    <>
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

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-1">
              {navigationLinks.map((link) => (
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

            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex items-center space-x-3">
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

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="md:hidden p-2 rounded-lg glass hover:bg-white/10 transition-all"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6 text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isSidebarOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
          isSidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={() => setIsSidebarOpen(false)}
        ></div>

        {/* Sidebar */}
        <div
          className={`absolute top-0 right-0 h-full w-64 glass-dark border-l border-white/10 shadow-2xl transform transition-transform duration-300 ${
            isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full p-6 pt-20">
            {/* Navigation Links */}
            <div className="space-y-2 mb-8">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsSidebarOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg font-medium transition-all ${
                    pathname === link.href
                      ? 'bg-white/10 text-orange-400 border border-orange-500/20'
                      : 'text-gray-300 hover:bg-white/5 hover:text-white border border-transparent'
                  }`}
                >
                  <span className="text-xl">{link.icon}</span>
                  <span>{link.label}</span>
                </Link>
              ))}
            </div>

            {/* Auth Section */}
            <div className="mt-auto space-y-3">
              {isAuthenticated && user ? (
                <>
                  <Link
                    href="/profile"
                    onClick={() => setIsSidebarOpen(false)}
                    className="flex items-center space-x-3 px-4 py-3 rounded-lg glass hover:bg-white/10 transition-all border border-white/5"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-base font-bold">
                        {user.displayName.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-white">{user.displayName}</span>
                      <span className="text-xs text-gray-400">View Profile</span>
                    </div>
                  </Link>
                  <button
                    onClick={() => {
                      logout();
                      setIsSidebarOpen(false);
                    }}
                    className="w-full px-4 py-3 glass hover:bg-white/20 rounded-lg transition-all text-sm font-semibold border border-white/10 hover:border-red-500/30 hover:text-red-400"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    onClick={() => setIsSidebarOpen(false)}
                    className="block w-full px-4 py-3 glass hover:bg-white/20 rounded-lg transition-all text-sm font-semibold border border-white/10 hover:border-white/20 text-center"
                  >
                    Login
                  </Link>
                  <Link
                    href="/register"
                    onClick={() => setIsSidebarOpen(false)}
                    className="relative group block w-full px-4 py-3 rounded-lg font-bold text-sm transition-all overflow-hidden text-center"
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
      </div>
    </>
  );
}
