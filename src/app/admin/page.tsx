'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import Link from 'next/link';

export default function AdminPanel() {
  const { user, isAuthenticated, loading } = useAuth();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'overview' | 'server' | 'files' | 'console' | 'users'>('overview');
  const [serverStatus, setServerStatus] = useState<'online' | 'offline' | 'starting' | 'stopping'>('online');
  const [consoleLogs, setConsoleLogs] = useState<string[]>([
    '[INFO] Server started successfully',
    '[INFO] Loading world data...',
    '[INFO] World loaded in 2.3s',
    '[INFO] Server is now accepting connections',
  ]);
  const [consoleInput, setConsoleInput] = useState('');
  const [currentPath, setCurrentPath] = useState('/rust-server');

  const isAdmin = user?.email === 'admin@system.local';

  useEffect(() => {
    if (!loading && (!isAuthenticated || !isAdmin)) {
      router.push('/');
    }
  }, [isAuthenticated, loading, isAdmin, router]);

  if (loading || !user || !isAdmin) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] pt-20 flex items-center justify-center relative overflow-hidden">
        {/* Background Image with Blur */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: 'url(/site-bg.jpg)', filter: 'blur(8px)' }}
          />
        </div>
        
        <div className="flex flex-col items-center space-y-4 relative z-10">
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 border-4 border-orange-500/20 rounded-lg"></div>
            <div className="absolute inset-0 border-4 border-t-orange-500 border-r-transparent border-b-transparent border-l-transparent rounded-lg animate-spin"></div>
          </div>
          <span className="text-gray-500 font-display text-sm">Loading Admin Panel...</span>
        </div>
      </div>
    );
  }

  const handleServerAction = (action: 'start' | 'stop' | 'restart') => {
    setServerStatus(action === 'start' ? 'starting' : 'stopping');
    setConsoleLogs(prev => [...prev, `[ADMIN] ${action.toUpperCase()} command executed by ${user.displayName}`]);
    setTimeout(() => {
      setServerStatus(action === 'stop' ? 'offline' : 'online');
      setConsoleLogs(prev => [...prev, `[INFO] Server ${action === 'stop' ? 'stopped' : 'started'} successfully`]);
    }, 2000);
  };

  const handleConsoleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!consoleInput.trim()) return;
    setConsoleLogs(prev => [...prev, `> ${consoleInput}`, `[INFO] Command executed`]);
    setConsoleInput('');
  };

  const files = [
    { name: 'server.cfg', type: 'file', size: '2.4 KB', modified: '2 hours ago' },
    { name: 'oxide', type: 'folder', size: '-', modified: '1 day ago' },
    { name: 'rust_server.log', type: 'file', size: '15.2 MB', modified: '5 min ago' },
    { name: 'procedural_map.map', type: 'file', size: '127 MB', modified: '3 days ago' },
  ];

  const users = [
    { name: 'System Admin', email: 'admin@system.local', role: 'Admin', status: 'online' },
    { name: 'Player One', email: 'player1@test.com', role: 'User', status: 'online' },
    { name: 'Player Two', email: 'player2@test.com', role: 'User', status: 'offline' },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-20 pb-12 relative overflow-hidden">
      {/* Background Image with Blur */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url(/site-bg.jpg)', filter: 'blur(8px)' }}
        />
      </div>
      
      <div className="max-w-[1920px] mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <div>
              <h1 className="text-3xl font-display font-black text-white mb-2">Admin Panel</h1>
              <p className="text-sm text-gray-500">Vera Rust Server Management</p>
            </div>
            <Link
              href="/profile"
              className="px-4 py-2 bg-[#1f1f1f] hover:bg-[#252525] border border-[#2a2a2a] text-gray-300 rounded text-sm font-medium transition-colors"
            >
              ← Back to Profile
            </Link>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {[
            { id: 'overview', label: 'Overview', icon: '📊' },
            { id: 'server', label: 'Server Control', icon: '🖥️' },
            { id: 'console', label: 'Console', icon: '💻' },
            { id: 'files', label: 'File Manager', icon: '📁' },
            { id: 'users', label: 'Users', icon: '👥' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 rounded text-sm font-medium transition-colors whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white'
                  : 'bg-[#131313] border border-[#1f1f1f] text-gray-400 hover:bg-[#1f1f1f]'
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="space-y-6">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="bg-[#131313] border border-[#1f1f1f] rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-gray-500 uppercase tracking-wide">Server Status</span>
                    <div className={`w-2 h-2 rounded-full ${serverStatus === 'online' ? 'bg-green-500' : serverStatus === 'offline' ? 'bg-red-500' : 'bg-yellow-500 animate-pulse'}`}></div>
                  </div>
                  <div className="text-2xl font-display font-black text-white capitalize">{serverStatus}</div>
                </div>
                <div className="bg-[#131313] border border-[#1f1f1f] rounded-lg p-4">
                  <span className="text-xs text-gray-500 uppercase tracking-wide block mb-2">Players Online</span>
                  <div className="text-2xl font-display font-black text-white">178 / 200</div>
                </div>
                <div className="bg-[#131313] border border-[#1f1f1f] rounded-lg p-4">
                  <span className="text-xs text-gray-500 uppercase tracking-wide block mb-2">CPU Usage</span>
                  <div className="text-2xl font-display font-black text-orange-400">47%</div>
                </div>
                <div className="bg-[#131313] border border-[#1f1f1f] rounded-lg p-4">
                  <span className="text-xs text-gray-500 uppercase tracking-wide block mb-2">RAM Usage</span>
                  <div className="text-2xl font-display font-black text-orange-400">12.4 GB</div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-[#131313] border border-[#1f1f1f] rounded-lg p-6">
                  <h3 className="text-sm font-display font-bold text-gray-400 uppercase tracking-wide mb-4">Server Information</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Server Name</span>
                      <span className="text-white font-mono">Vera Vanilla EU West</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Map</span>
                      <span className="text-white font-mono">Procedural 4000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Wipe Schedule</span>
                      <span className="text-white font-mono">Weekly Thursday</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Uptime</span>
                      <span className="text-white font-mono">4d 12h 34m</span>
                    </div>
                  </div>
                </div>

                <div className="bg-[#131313] border border-[#1f1f1f] rounded-lg p-6">
                  <h3 className="text-sm font-display font-bold text-gray-400 uppercase tracking-wide mb-4">Quick Actions</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <button className="px-4 py-3 bg-green-500/10 hover:bg-green-500/20 border border-green-500/30 text-green-400 rounded text-sm font-medium transition-colors">
                      Announce
                    </button>
                    <button className="px-4 py-3 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 text-blue-400 rounded text-sm font-medium transition-colors">
                      Backup
                    </button>
                    <button className="px-4 py-3 bg-yellow-500/10 hover:bg-yellow-500/20 border border-yellow-500/30 text-yellow-400 rounded text-sm font-medium transition-colors">
                      Update
                    </button>
                    <button className="px-4 py-3 bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 text-purple-400 rounded text-sm font-medium transition-colors">
                      Wipe Data
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Server Control Tab */}
          {activeTab === 'server' && (
            <div className="bg-[#131313] border border-[#1f1f1f] rounded-lg p-6">
              <h3 className="text-lg font-display font-bold text-white mb-6">Server Control</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className={`px-4 py-2 rounded border ${
                    serverStatus === 'online' ? 'bg-green-500/10 border-green-500/30 text-green-400' :
                    serverStatus === 'offline' ? 'bg-red-500/10 border-red-500/30 text-red-400' :
                    'bg-yellow-500/10 border-yellow-500/30 text-yellow-400'
                  }`}>
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${serverStatus === 'online' ? 'bg-green-500' : serverStatus === 'offline' ? 'bg-red-500' : 'bg-yellow-500 animate-pulse'}`}></div>
                      <span className="text-sm font-display font-bold uppercase">{serverStatus}</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => handleServerAction('start')}
                    disabled={serverStatus === 'online' || serverStatus === 'starting'}
                    className="px-6 py-3 bg-green-500 hover:bg-green-600 disabled:bg-gray-700 disabled:text-gray-500 text-white rounded font-medium transition-colors disabled:cursor-not-allowed"
                  >
                    Start Server
                  </button>
                  <button
                    onClick={() => handleServerAction('stop')}
                    disabled={serverStatus === 'offline' || serverStatus === 'stopping'}
                    className="px-6 py-3 bg-red-500 hover:bg-red-600 disabled:bg-gray-700 disabled:text-gray-500 text-white rounded font-medium transition-colors disabled:cursor-not-allowed"
                  >
                    Stop Server
                  </button>
                  <button
                    onClick={() => handleServerAction('restart')}
                    disabled={serverStatus !== 'online'}
                    className="px-6 py-3 bg-orange-500 hover:bg-orange-600 disabled:bg-gray-700 disabled:text-gray-500 text-white rounded font-medium transition-colors disabled:cursor-not-allowed"
                  >
                    Restart Server
                  </button>
                </div>

                <div className="pt-4 border-t border-[#1f1f1f]">
                  <h4 className="text-sm font-display font-bold text-gray-400 uppercase tracking-wide mb-3">Resource Usage</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-400">CPU</span>
                        <span className="text-gray-500 font-mono">47%</span>
                      </div>
                      <div className="h-2 bg-[#0a0a0a] rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-orange-500 to-red-600" style={{ width: '47%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-400">RAM</span>
                        <span className="text-gray-500 font-mono">12.4 GB / 16 GB</span>
                      </div>
                      <div className="h-2 bg-[#0a0a0a] rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-blue-500 to-purple-600" style={{ width: '77.5%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-400">Disk</span>
                        <span className="text-gray-500 font-mono">34.2 GB / 100 GB</span>
                      </div>
                      <div className="h-2 bg-[#0a0a0a] rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-green-500 to-emerald-600" style={{ width: '34.2%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Console Tab */}
          {activeTab === 'console' && (
            <div className="bg-[#131313] border border-[#1f1f1f] rounded-lg overflow-hidden">
              <div className="bg-[#0a0a0a] border-b border-[#1f1f1f] p-4 flex items-center justify-between">
                <h3 className="text-sm font-display font-bold text-gray-400 uppercase tracking-wide">Server Console</h3>
                <button
                  onClick={() => setConsoleLogs([])}
                  className="px-3 py-1 bg-[#1f1f1f] hover:bg-[#252525] text-gray-400 text-xs rounded transition-colors"
                >
                  Clear
                </button>
              </div>
              <div className="p-4">
                <div className="bg-black rounded border border-[#1f1f1f] p-4 h-96 overflow-y-auto font-mono text-sm mb-4">
                  {consoleLogs.map((log, i) => (
                    <div key={i} className={`mb-1 ${log.startsWith('>') ? 'text-orange-400' : log.includes('[ERROR]') ? 'text-red-400' : log.includes('[WARN]') ? 'text-yellow-400' : log.includes('[ADMIN]') ? 'text-purple-400' : 'text-gray-400'}`}>
                      {log}
                    </div>
                  ))}
                </div>
                <form onSubmit={handleConsoleCommand} className="flex gap-2">
                  <input
                    type="text"
                    value={consoleInput}
                    onChange={(e) => setConsoleInput(e.target.value)}
                    placeholder="Enter command..."
                    className="flex-1 px-4 py-2 bg-[#0a0a0a] border border-[#1f1f1f] focus:border-orange-500/50 rounded text-white text-sm font-mono focus:outline-none transition-colors"
                  />
                  <button
                    type="submit"
                    className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded font-medium transition-colors"
                  >
                    Execute
                  </button>
                </form>
              </div>
            </div>
          )}

          {/* File Manager Tab */}
          {activeTab === 'files' && (
            <div className="bg-[#131313] border border-[#1f1f1f] rounded-lg overflow-hidden">
              <div className="bg-[#0a0a0a] border-b border-[#1f1f1f] p-4">
                <div className="flex items-center gap-2 text-sm font-mono text-gray-400">
                  <span>/</span>
                  {currentPath.split('/').filter(Boolean).map((part, i) => (
                    <span key={i}>
                      <span className="text-gray-600">/</span>
                      <span className="text-orange-400">{part}</span>
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-4">
                <div className="space-y-1">
                  {files.map((file, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-3 bg-[#0a0a0a] border border-[#1f1f1f] rounded hover:border-[#2a2a2a] transition-colors cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{file.type === 'folder' ? '📁' : '📄'}</span>
                        <div>
                          <div className="text-sm text-white font-mono">{file.name}</div>
                          <div className="text-xs text-gray-600">{file.modified}</div>
                        </div>
                      </div>
                      <div className="text-xs text-gray-500 font-mono">{file.size}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Users Tab */}
          {activeTab === 'users' && (
            <div className="bg-[#131313] border border-[#1f1f1f] rounded-lg overflow-hidden">
              <div className="p-4">
                <div className="space-y-1">
                  {users.map((u, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-4 bg-[#0a0a0a] border border-[#1f1f1f] rounded hover:border-[#2a2a2a] transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded flex items-center justify-center text-white font-display font-black">
                          {u.name.charAt(0)}
                        </div>
                        <div>
                          <div className="text-sm text-white font-medium">{u.name}</div>
                          <div className="text-xs text-gray-500">{u.email}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className={`px-3 py-1 rounded text-xs font-bold ${u.role === 'Admin' ? 'bg-yellow-500/10 border border-yellow-500/30 text-yellow-400' : 'bg-gray-500/10 border border-gray-500/30 text-gray-400'}`}>
                          {u.role}
                        </span>
                        <div className={`w-2 h-2 rounded-full ${u.status === 'online' ? 'bg-green-500' : 'bg-gray-600'}`}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
