'use client';

import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { getForumPostsByCategory } from '@/lib/optimized-db';

export default function AcceptedApplicationsPage() {
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    const acceptedPosts = getForumPostsByCategory('applications-accepted');
    setPosts(acceptedPosts);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: 'url(/site-bg-3.jpg)', filter: 'blur(8px)' }}
        />
      </div>

      {/* Hero Section */}
      <div className="relative z-10 pt-24 pb-24 bg-gradient-to-b from-black via-black/95 to-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6 mb-8">
            <div 
              className="w-20 h-20 md:w-24 md:h-24 rounded-lg flex items-center justify-center text-4xl md:text-5xl shadow-lg flex-shrink-0"
              style={{ 
                backgroundColor: '#10b98120', 
                border: '2px solid #10b98160',
                boxShadow: '0 10px 30px #10b98130'
              }}
            >
              ✅
            </div>
            <div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white uppercase tracking-wider mb-2" style={{ letterSpacing: '0.08em' }}>
                Accepted Applications
              </h1>
              <p className="text-gray-400 text-sm md:text-base">
                View accepted staff applications
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Separator */}
      <div className="relative z-10">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent"></div>
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/30 via-transparent to-transparent pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-sm">
          <Link href="/" className="text-gray-500 hover:text-orange-500 transition-colors uppercase tracking-wide">
            Home
          </Link>
          <span className="text-gray-600">/</span>
          <Link href="/forums" className="text-gray-500 hover:text-orange-500 transition-colors uppercase tracking-wide">
            Forums
          </Link>
          <span className="text-gray-600">/</span>
          <span className="text-green-500 uppercase font-semibold tracking-wide">Accepted Applications</span>
        </div>

        {/* Posts List */}
        <div className="bg-[#0f0f0f] border border-[#1f1f1f] rounded-lg overflow-hidden">
          <div className="bg-[#0a0a0a] border-b border-[#1f1f1f] px-6 py-4">
            <h3 className="font-bold text-white uppercase tracking-wide">
              Accepted Applications ({posts.length})
            </h3>
          </div>

          {posts.length === 0 ? (
            <div className="px-6 py-12 text-center">
              <p className="text-gray-500">No accepted applications yet.</p>
            </div>
          ) : (
            <div className="divide-y divide-[#1f1f1f]">
              {posts.map((post) => (
                <Link
                  key={post.id}
                  href={`/forums/applications-accepted/${post.id}`}
                  className="block px-6 py-4 hover:bg-[#131313] transition-colors"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-green-400 text-sm">✓</span>
                        <h4 className="font-semibold text-white hover:text-orange-400 transition-colors">
                          {post.title}
                        </h4>
                      </div>
                      <div className="flex items-center gap-3 text-xs text-gray-500">
                        <span>by <span className="text-gray-400">{post.author.displayName || post.author}</span></span>
                        <span>•</span>
                        <span>Accepted on {new Date(post.updatedAt).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-gray-400 text-sm">{post.views}</div>
                      <div className="text-xs text-gray-600">views</div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
