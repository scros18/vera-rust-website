'use client';

import { useEffect, useState } from 'react';
import { getAllUsers } from '@/lib/auth';
import type { User } from '@/lib/auth';

export default function LeaderboardPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [sortBy, setSortBy] = useState<'level' | 'wins' | 'winRate'>('level');

  useEffect(() => {
    const allUsers = getAllUsers();
    setUsers(allUsers);
  }, []);

  const sortedUsers = [...users].sort((a, b) => {
    if (sortBy === 'level') return b.level - a.level;
    if (sortBy === 'wins') return (b.stats?.wins || 0) - (a.stats?.wins || 0);
    if (sortBy === 'winRate') return (b.stats?.winRate || 0) - (a.stats?.winRate || 0);
    return 0;
  });

  return (
    <div className="relative min-h-screen bg-black">
      {/* Background Image */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: 'url(/site-bg-2.jpg)',
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
              Leaderboard
            </h1>
          </div>
          <p className="text-gray-300 text-lg">
            Top players competing on Vera Rust Servers
          </p>
        </div>

        {/* Sort Options */}
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          <button
            onClick={() => setSortBy('level')}
            className={`px-6 py-2 rounded-lg font-medium transition-all ${
              sortBy === 'level'
                ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg'
                : 'backdrop-blur-sm bg-white/10 text-gray-300 hover:bg-white/20 border border-white/10'
            }`}
          >
            By Level
          </button>
          <button
            onClick={() => setSortBy('wins')}
            className={`px-6 py-2 rounded-lg font-medium transition-all ${
              sortBy === 'wins'
                ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg'
                : 'backdrop-blur-sm bg-white/10 text-gray-300 hover:bg-white/20 border border-white/10'
            }`}
          >
            By Wins
          </button>
          <button
            onClick={() => setSortBy('winRate')}
            className={`px-6 py-2 rounded-lg font-medium transition-all ${
              sortBy === 'winRate'
                ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg'
                : 'backdrop-blur-sm bg-white/10 text-gray-300 hover:bg-white/20 border border-white/10'
            }`}
          >
            By Win Rate
          </button>
        </div>

        {/* Leaderboard Table */}
        {sortedUsers.length > 0 ? (
          <div className="backdrop-blur-md bg-black/40 rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="backdrop-blur-sm bg-black/50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Rank</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Player</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-300">Level</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-300">XP</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-300">Games</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-300">Wins</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-300">Win Rate</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {sortedUsers.map((user, index) => (
                    <tr key={user.id} className="hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full backdrop-blur-sm bg-white/10 text-white font-bold">
                          {index < 3 ? (
                            <span className="text-xl">
                              {index === 0 ? '🥇' : index === 1 ? '🥈' : '🥉'}
                            </span>
                          ) : (
                            <span className="text-sm">{index + 1}</span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center font-bold">
                            {user.displayName.charAt(0).toUpperCase()}
                          </div>
                          <div>
                            <div className="font-semibold text-white">{user.displayName}</div>
                            <div className="text-sm text-gray-400">@{user.username}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm font-medium">
                          {user.level}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center text-gray-300">{user.xp}</td>
                      <td className="px-6 py-4 text-center text-gray-300">
                        {user.stats?.gamesPlayed || 0}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-green-400 font-semibold">
                          {user.stats?.wins || 0}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-orange-400 font-semibold">
                          {user.stats?.winRate.toFixed(1) || 0}%
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="backdrop-blur-md bg-black/40 rounded-2xl border border-white/10 p-12 text-center shadow-2xl">
            <div className="text-6xl mb-4">🏆</div>
            <h3 className="text-xl font-bold text-white mb-2">No Players Yet</h3>
            <p className="text-gray-300 mb-6">
              Be the first to join and claim the top spot!
            </p>
            <a
              href="/register"
              className="inline-block px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 hover:scale-105 text-white rounded-lg font-semibold transition-all shadow-lg"
            >
              Register Now
            </a>
          </div>
        )}

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="backdrop-blur-md bg-black/40 rounded-xl border border-white/10 p-6 text-center shadow-xl">
            <div className="text-4xl mb-2">👥</div>
            <div className="text-3xl font-bold text-orange-400 mb-1">{users.length}</div>
            <div className="text-gray-300">Total Players</div>
          </div>
          <div className="backdrop-blur-md bg-black/40 rounded-xl border border-white/10 p-6 text-center shadow-xl">
            <div className="text-4xl mb-2">🎮</div>
            <div className="text-3xl font-bold text-orange-400 mb-1">
              {users.reduce((sum, u) => sum + (u.stats?.gamesPlayed || 0), 0)}
            </div>
            <div className="text-gray-300">Total Games</div>
          </div>
          <div className="backdrop-blur-md bg-black/40 rounded-xl border border-white/10 p-6 text-center shadow-xl">
            <div className="text-4xl mb-2">⭐</div>
            <div className="text-3xl font-bold text-orange-400 mb-1">
              {users.length > 0
                ? Math.max(...users.map((u) => u.level))
                : 0}
            </div>
            <div className="text-gray-300">Highest Level</div>
          </div>
        </div>
      </div>
    </div>
  );
}
