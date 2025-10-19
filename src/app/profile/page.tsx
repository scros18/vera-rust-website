'use client';

import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function ProfilePage() {
  const { user, isAuthenticated, logout } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [displayName, setDisplayName] = useState('');

  useEffect(() => {
    setLoading(false);
    if (!isAuthenticated) {
      router.push('/');
    }
    if (user) {
      setDisplayName(user.displayName);
    }
  }, [isAuthenticated, router, user]);

  if (loading || !user) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  const level = user.level || 1;
  const xp = user.xp || 0;
  const nextLevelXP = level * 1000;
  const xpProgress = (xp / nextLevelXP) * 100;
  const isAdmin = user.email === 'admin@system.local';

  const handleSaveProfile = () => {
    // Save display name to localStorage
    if (user) {
      const updatedUser = { ...user, displayName };
      localStorage.setItem('currentUser', JSON.stringify(updatedUser));
      setIsEditing(false);
      // Reload page to reflect changes
      window.location.reload();
    }
  };

  const stats = user.stats || { 
    gamesPlayed: 0, 
    wins: 0, 
    losses: 0, 
    winRate: 0 
  };

  const recentActivities = [
    { icon: '🏆', text: 'Won a match on Rust Main', time: '2 hours ago' },
    { icon: '⚔️', text: 'Eliminated 5 players', time: '5 hours ago' },
    { icon: '🎯', text: 'Completed daily challenge', time: '1 day ago' },
    { icon: '📦', text: 'Unlocked new skin', time: '2 days ago' },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <div className="bg-[#131313] border border-[#1f1f1f] rounded-lg p-8 mb-6">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            {/* Avatar */}
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-4xl font-display font-bold text-white">
                {user.displayName.charAt(0).toUpperCase()}
              </div>
              {isAdmin && (
                <div className="absolute -top-2 -right-2 bg-yellow-500 rounded-full w-8 h-8 flex items-center justify-center text-xl">
                  👑
                </div>
              )}
            </div>

            {/* User Info */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                {isEditing ? (
                  <input
                    type="text"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    className="bg-[#0a0a0a] border border-[#1f1f1f] rounded px-3 py-1 text-white font-display text-2xl font-bold focus:outline-none focus:border-orange-500/50"
                  />
                ) : (
                  <h1 className="text-2xl md:text-3xl font-display font-bold text-white">
                    {user.displayName}
                  </h1>
                )}
                <span className="px-3 py-1 bg-gradient-to-r from-orange-500/20 to-red-600/20 border border-orange-500/30 rounded-full text-sm font-display font-semibold text-orange-400">
                  Level {level}
                </span>
                {isAdmin && (
                  <span className="px-3 py-1 bg-yellow-500/20 border border-yellow-500/30 rounded-full text-sm font-display font-semibold text-yellow-400">
                    Admin
                  </span>
                )}
              </div>
              <p className="text-gray-400 mb-1">@{user.username}</p>
              <p className="text-sm text-gray-500">
                Member since {new Date(user.joinedDate || Date.now()).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-2 w-full md:w-auto">
              {isEditing ? (
                <>
                  <button
                    onClick={handleSaveProfile}
                    className="px-6 py-2 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-display font-semibold rounded transition-all"
                  >
                    Save Changes
                  </button>
                  <button
                    onClick={() => {
                      setIsEditing(false);
                      setDisplayName(user.displayName);
                    }}
                    className="px-6 py-2 bg-[#1f1f1f] hover:bg-[#252525] text-gray-300 font-display font-semibold rounded transition-all border border-[#2a2a2a]"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => setIsEditing(true)}
                    className="px-6 py-2 bg-[#1f1f1f] hover:bg-[#252525] text-white font-display font-semibold rounded transition-all border border-[#2a2a2a]"
                  >
                    Edit Profile
                  </button>
                  {isAdmin && (
                    <Link
                      href="/admin"
                      className="px-6 py-2 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-display font-semibold rounded transition-all text-center"
                    >
                      Admin Panel
                    </Link>
                  )}
                  <button
                    onClick={() => router.push('/')}
                    className="px-6 py-2 bg-[#1f1f1f] hover:bg-[#252525] text-gray-300 font-display font-semibold rounded transition-all border border-[#2a2a2a]"
                  >
                    Join Server
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Stats Card */}
          <div className="bg-[#131313] border border-[#1f1f1f] rounded-lg p-6">
            <h2 className="text-xl font-display font-bold text-white mb-4">Statistics</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#0a0a0a] border border-[#1f1f1f] rounded-lg p-4">
                <p className="text-sm text-gray-400 mb-1">Matches</p>
                <p className="text-2xl font-display font-bold text-white">{stats.gamesPlayed}</p>
              </div>
              <div className="bg-[#0a0a0a] border border-[#1f1f1f] rounded-lg p-4">
                <p className="text-sm text-gray-400 mb-1">Wins</p>
                <p className="text-2xl font-display font-bold text-green-400">{stats.wins}</p>
              </div>
              <div className="bg-[#0a0a0a] border border-[#1f1f1f] rounded-lg p-4">
                <p className="text-sm text-gray-400 mb-1">Losses</p>
                <p className="text-2xl font-display font-bold text-red-400">{stats.losses}</p>
              </div>
              <div className="bg-[#0a0a0a] border border-[#1f1f1f] rounded-lg p-4">
                <p className="text-sm text-gray-400 mb-1">Win Rate</p>
                <p className="text-2xl font-display font-bold text-orange-400">{stats.winRate.toFixed(1)}%</p>
              </div>
            </div>
          </div>

          {/* Experience Card */}
          <div className="bg-[#131313] border border-[#1f1f1f] rounded-lg p-6">
            <h2 className="text-xl font-display font-bold text-white mb-4">Experience</h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-400">Level {level}</span>
                  <span className="text-sm text-gray-400">{xp.toLocaleString()} / {nextLevelXP.toLocaleString()} XP</span>
                </div>
                <div className="w-full bg-[#0a0a0a] border border-[#1f1f1f] rounded-full h-2 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-orange-500 to-red-600 transition-all duration-300"
                    style={{ width: `${Math.min(xpProgress, 100)}%` }}
                  />
                </div>
              </div>
              <div className="bg-[#0a0a0a] border border-[#1f1f1f] rounded-lg p-4">
                <p className="text-sm text-gray-400 mb-1">Next Level</p>
                <p className="text-lg font-display font-bold text-white">
                  {(nextLevelXP - xp).toLocaleString()} XP needed
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-6 bg-[#131313] border border-[#1f1f1f] rounded-lg p-6">
          <h2 className="text-xl font-display font-bold text-white mb-4">Recent Activity</h2>
          <div className="space-y-3">
            {recentActivities.map((activity, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 bg-[#0a0a0a] border border-[#1f1f1f] rounded-lg hover:border-[#2a2a2a] transition-colors"
              >
                <span className="text-2xl">{activity.icon}</span>
                <div className="flex-1">
                  <p className="text-white font-display">{activity.text}</p>
                  <p className="text-sm text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
