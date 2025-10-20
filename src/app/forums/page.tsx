'use client';

import { useAuth } from '@/contexts/AuthContext';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getCategoryStats } from '@/lib/optimized-db';
import Head from 'next/head';
import Script from 'next/script';
import { forumStructuredData, organizationStructuredData, breadcrumbStructuredData } from '@/lib/structured-data';

interface ForumCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  threads: number;
  posts: number;
  color: string;
}

export default function ForumsPage() {
  const { isAuthenticated } = useAuth();
  const [categories, setCategories] = useState<ForumCategory[]>([
    {
      id: 'bug-reports',
      name: 'Bug Reports',
      description: 'Report server bugs and technical issues',
      icon: '🐛',
      threads: 0,
      posts: 0,
      color: '#ef4444',
    },
    {
      id: 'suggestions',
      name: 'Game Suggestions',
      description: 'Share your ideas to improve the server',
      icon: '💡',
      threads: 0,
      posts: 0,
      color: '#3b82f6',
    },
    {
      id: 'applications',
      name: 'Staff Applications',
      description: 'Apply to join our staff team',
      icon: '📋',
      threads: 0,
      posts: 0,
      color: '#8b5cf6',
    },
  ]);

  useEffect(() => {
    // Update stats from database
    setCategories(cats => cats.map(cat => ({
      ...cat,
      ...getCategoryStats(cat.id),
    })));
  }, []);

  const breadcrumbData = breadcrumbStructuredData([
    { name: 'Home', url: 'https://verarust.com' },
    { name: 'Forums', url: 'https://verarust.com/forums' },
  ]);

  return (
    <>
      <Head>
        <link rel="canonical" href="https://verarust.com/forums" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#ea580c" />
      </Head>
      <Script
        id="forum-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([forumStructuredData, organizationStructuredData, breadcrumbData]),
        }}
      />
      <article itemScope itemType="https://schema.org/WebPage">
        <div className="min-h-screen bg-[#0a0a0a] relative overflow-hidden">
          {/* Background Image with Blur */}
          <div className="absolute inset-0 z-0">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-10"
              style={{ backgroundImage: 'url(/site-bg-3.jpg)', filter: 'blur(8px)' }}
            />
          </div>

      {/* Hero Section */}
  <div className="relative z-10 pt-16 pb-12 bg-gradient-to-b from-black via-black/95 to-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title Box */}
          <div className="max-w-2xl mx-auto text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg mb-4 shadow-lg shadow-orange-500/20 transition-transform hover:scale-102 duration-200">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"/>
                <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"/>
              </svg>
            </div>
            <h1 itemProp="headline" className="text-4xl md:text-5xl lg:text-6xl font-bold text-orange-500 mb-2 uppercase tracking-wider animate-fade-in-up" style={{ letterSpacing: '0.08em' }}>
              FORUMS
            </h1>
            <p itemProp="description" className="text-gray-400 text-xs md:text-sm uppercase tracking-wide font-medium">
              Join the discussion on our forums!
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Separator */}
      <div className="relative z-10">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent"></div>
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/30 via-transparent to-transparent pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-12">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-sm">
          <Link href="/" className="text-gray-500 hover:text-orange-500 transition-colors uppercase tracking-wide">
            Home
          </Link>
          <span className="text-gray-600">/</span>
          <span className="text-orange-500 uppercase font-semibold tracking-wide">Forums</span>
        </div>

        {/* Community Guidelines Section */}
        <div className="mb-8 bg-[#0f0f0f] border border-[#1f1f1f] rounded-lg overflow-hidden hover:border-[#2a2a2a] transition-all duration-300 animate-fade-in-up">
          <div className="bg-gradient-to-r from-orange-500/10 to-red-600/10 border-b border-[#1f1f1f] px-6 py-4">
            <h2 className="font-bold text-white uppercase tracking-wide flex items-center gap-2">
              <span className="text-orange-500" aria-hidden="true">📘</span>
              Community Guidelines
            </h2>
          </div>
          <div className="px-6 py-5">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-400">
              <div className="flex items-start gap-3 hover:translate-x-1 transition-transform duration-200">
                <span className="text-orange-500 text-xl" aria-hidden="true">📝</span>
                <div>
                  <p className="text-gray-300 font-semibold mb-1">Be Detailed</p>
                  <p className="text-xs">Provide clear information when reporting bugs or suggesting features</p>
                </div>
              </div>
              <div className="flex items-start gap-3 hover:translate-x-1 transition-transform duration-200">
                <span className="text-orange-500 text-xl" aria-hidden="true">🤝</span>
                <div>
                  <p className="text-gray-300 font-semibold mb-1">Be Respectful</p>
                  <p className="text-xs">Treat all community members with respect and courtesy</p>
                </div>
              </div>
              <div className="flex items-start gap-3 hover:translate-x-1 transition-transform duration-200">
                <span className="text-orange-500 text-xl" aria-hidden="true">🔍</span>
                <div>
                  <p className="text-gray-300 font-semibold mb-1">Search First</p>
                  <p className="text-xs">Check if your topic has already been discussed before posting</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Forum Categories */}
        <div className="space-y-4" itemScope itemType="https://schema.org/ItemList">
          {categories.map((category, index) => (
            <div
              key={category.id}
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
              className="bg-[#0f0f0f] border border-[#1f1f1f] rounded-lg overflow-hidden hover:border-[#2a2a2a] hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-300 group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <meta itemProp="position" content={(index + 1).toString()} />
              <div className="flex items-center p-6 gap-6">
                {/* Icon */}
                <div 
                  className="hidden md:flex w-16 h-16 rounded-lg items-center justify-center text-3xl flex-shrink-0"
                  style={{ backgroundColor: `${category.color}20`, border: `2px solid ${category.color}40` }}
                >
                  {category.icon}
                </div>

                {/* Category Info */}
                <div className="flex-1 min-w-0">
                  <Link 
                    href={`/forums/${category.id}`}
                    className="block"
                    itemProp="url"
                  >
                    <h3 itemProp="name" className="text-lg font-bold text-white group-hover:text-orange-500 transition-colors duration-200 mb-1 flex items-center gap-2 uppercase tracking-wide">
                      <span className="md:hidden" aria-hidden="true">{category.icon}</span>
                      {category.name}
                    </h3>
                    <p itemProp="description" className="text-sm text-gray-400 normal-case tracking-normal">{category.description}</p>
                  </Link>
                </div>

                {/* Stats */}
                <div className="hidden lg:flex items-center gap-8 text-center">
                  <div>
                    <div className="text-2xl font-display font-bold text-white">{category.threads}</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide">Threads</div>
                  </div>
                  <div>
                    <div className="text-2xl font-display font-bold text-white">{category.posts}</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide">Posts</div>
                  </div>
                </div>

                {/* Mobile Stats */}
                <div className="flex lg:hidden flex-col items-end gap-1 text-right">
                  <div className="text-sm font-display font-semibold text-gray-400">
                    {category.threads} <span className="text-xs text-gray-600">threads</span>
                  </div>
                  <div className="text-sm font-display font-semibold text-gray-400">
                    {category.posts} <span className="text-xs text-gray-600">posts</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Login Prompt */}
        {!isAuthenticated && (
          <div className="mt-8 bg-gradient-to-r from-orange-500/10 to-red-600/10 border border-orange-500/20 rounded-lg p-6 text-center">
            <p className="text-gray-300 font-display mb-3">
              Want to participate in the forums?
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link
                href="/login"
                className="px-6 py-2 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-display font-bold rounded transition-all"
              >
                Sign In
              </Link>
              <Link
                href="/register"
                className="px-6 py-2 bg-[#1f1f1f] hover:bg-[#252525] text-white font-display font-semibold rounded transition-all border border-[#2a2a2a]"
              >
                Register
              </Link>
            </div>
          </div>
        )}

        {/* Footer Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 text-sm font-display">
            © 2025 Vera Rust | All rights reserved.
          </p>
        </div>
      </div>
    </div>
      </article>
    </>
  );
}
