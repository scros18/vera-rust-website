'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { updateProfile } from '@/lib/auth';

export default function ProfilePage() {
  const { user, isAuthenticated, loading, refreshUser } = useAuth();
  const router = useRouter();
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    displayName: '',
    bio: '',
  });
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push('/login');
    }
    if (user) {
      setFormData({
        displayName: user.displayName,
        bio: user.bio || '',
      });
    }
  }, [user, isAuthenticated, loading, router]);

  const handleUpdate = () => {
    const result = updateProfile(formData);
    if (result.success) {
      setMessage('Profile updated successfully!');
      setEditing(false);
      refreshUser();
      setTimeout(() => setMessage(''), 3000);
    } else {
      setMessage(result.error || 'Update failed');
    }
  };

  if (loading || !user) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 py-20 px-4 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  const memberSince = new Date(user.joinedDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {message && (
          <div className="mb-4 p-3 bg-green-500/10 border border-green-500 rounded-lg text-green-400 text-sm">
            {message}
          </div>
        )}

        {/* Profile Header */}
        <div className="bg-gray-800 rounded-xl border border-gray-700 p-8 shadow-2xl mb-6">
          <div className="flex items-start gap-6">
            <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-4xl font-bold">
              {user.displayName.charAt(0).toUpperCase()}
            </div>
            <div className="flex-1">
              {editing ? (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Display Name
                    </label>
                    <input
                      type="text"
                      value={formData.displayName}
                      onChange={(e) =>
                        setFormData({ ...formData, displayName: e.target.value })
                      }
                      className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-orange-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Bio
                    </label>
                    <textarea
                      value={formData.bio}
                      onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                      className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-orange-500 h-24"
                      placeholder="Tell us about yourself..."
                    />
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={handleUpdate}
                      className="px-4 py-2 bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white rounded-lg font-medium transition-all"
                    >
                      Save Changes
                    </button>
                    <button
                      onClick={() => setEditing(false)}
                      className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-medium transition-all"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-3xl font-bold text-white">{user.displayName}</h1>
                    <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm font-medium">
                      Level {user.level}
                    </span>
                  </div>
                  <p className="text-gray-400 mb-1">@{user.username}</p>
                  <p className="text-gray-500 text-sm mb-4">Member since {memberSince}</p>
                  {user.bio && <p className="text-gray-300 mb-4">{user.bio}</p>}
                  <button
                    onClick={() => setEditing(true)}
                    className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-medium transition-all"
                  >
                    Edit Profile
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
            <h2 className="text-xl font-bold text-white mb-4">Player Stats</h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-400">Games Played</span>
                <span className="text-white font-semibold">{user.stats?.gamesPlayed || 0}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Wins</span>
                <span className="text-green-400 font-semibold">{user.stats?.wins || 0}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Losses</span>
                <span className="text-red-400 font-semibold">{user.stats?.losses || 0}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Win Rate</span>
                <span className="text-orange-400 font-semibold">
                  {user.stats?.winRate.toFixed(1) || 0}%
                </span>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
            <h2 className="text-xl font-bold text-white mb-4">Experience</h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-400">Level {user.level}</span>
                  <span className="text-gray-400">
                    {user.xp} / {user.level * 1000} XP
                  </span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-orange-500 to-red-500 h-3 rounded-full transition-all"
                    style={{ width: `${(user.xp / (user.level * 1000)) * 100}%` }}
                  ></div>
                </div>
              </div>
              <p className="text-sm text-gray-400">
                Keep playing to earn XP and level up! Compete in matches and climb the leaderboard.
              </p>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
          <h2 className="text-xl font-bold text-white mb-4">Recent Activity</h2>
          <div className="text-center py-8 text-gray-400">
            <p>No recent activity yet. Join a server to get started!</p>
            <a
              href="/servers"
              className="inline-block mt-4 px-6 py-2 bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white rounded-lg font-medium transition-all"
            >
              Browse Servers
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
