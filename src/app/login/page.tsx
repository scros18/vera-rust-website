'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { login } from '@/lib/auth';
import { useAuth } from '@/contexts/AuthContext';
import Link from 'next/link';

export default function LoginPage() {
  const [formData, setFormData] = useState({
    username: '',
        {/* Gradient Overlays for cinematic effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-orange-950/20 via-transparent to-red-950/20"></div>
      </div>
      {/* Centered, blurred form card */}
      <div className="relative z-10 w-full max-w-md mx-auto">
        <div className="backdrop-blur-lg bg-black/40 rounded-2xl border border-white/10 shadow-2xl px-8 py-10">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-center mb-2 rust-text glow-orange">
            Welcome Back
          </h1>
          <p className="text-gray-400 text-center mb-8">
            Login to continue your vanilla Rust adventure
          </p>
          {error && (
            <div className="mb-4 p-3 bg-red-500/10 border border-red-500 rounded-lg text-red-400 text-sm">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Username</label>
              <input type="text" required value={formData.username} onChange={e => setFormData({ ...formData, username: e.target.value })} className="w-full px-4 py-2 rounded-lg bg-black/30 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-orange-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
              <input type="password" required value={formData.password} onChange={e => setFormData({ ...formData, password: e.target.value })} className="w-full px-4 py-2 rounded-lg bg-black/30 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-orange-500" />
            </div>
            <button type="submit" disabled={loading} className="w-full py-3 rounded-lg bg-gradient-to-r from-orange-600 to-red-600 font-bold text-lg text-white shadow-lg hover:scale-105 transition-all">
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>
          <div className="mt-6 text-center">
            <span className="text-gray-400">Don't have an account?</span>{' '}
            <Link href="/register" className="text-orange-400 hover:underline font-semibold">Register</Link>
          </div>
        </div>
      </div>
    </div>
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-orange-500 transition-colors"
                placeholder="your_username"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <input
                type="password"
                required
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-orange-500 transition-colors"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white rounded-lg font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>

          <p className="mt-6 text-center text-gray-400 text-sm">
            Don't have an account?{' '}
            <Link href="/register" className="text-orange-400 hover:text-orange-300 font-medium">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
