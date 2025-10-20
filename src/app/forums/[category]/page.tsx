'use client';

import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { createForumPost, getForumPostsByCategory } from '@/lib/optimized-db';

interface PageProps {
  params: {
    category: string;
  };
}

const categoryData = {
  'bug-reports': {
    name: 'Bug Reports',
    icon: '🐛',
    color: '#ef4444',
    description: 'Report server bugs and technical issues',
    guide: {
      title: 'How to Report a Bug',
      steps: [
        'Provide a clear and descriptive title',
        'Describe what happened and what you expected to happen',
        'Include steps to reproduce the bug',
        'Mention your game version and any mods/plugins',
        'Attach screenshots or videos if possible',
        'Check if the bug has already been reported',
      ],
      template: `**Bug Title:** 
Describe the bug briefly

**Description:**
What happened? What did you expect?

**Steps to Reproduce:**
1. 
2. 
3. 

**Game Version:**
Your Rust client version

**Additional Info:**
Any other relevant details`,
    },
  },
  'suggestions': {
    name: 'Game Suggestions',
    icon: '💡',
    color: '#3b82f6',
    description: 'Share your ideas to improve the server',
    guide: {
      title: 'How to Submit a Suggestion',
      steps: [
        'Use a clear and specific title',
        'Explain your suggestion in detail',
        'Describe how it would improve the server',
        'Consider potential drawbacks or balance issues',
        'Check if the suggestion has been made before',
        'Be open to feedback and discussion',
      ],
      template: `**Suggestion:**
Brief summary of your idea

**Detailed Description:**
Explain your suggestion in detail

**Benefits:**
How would this improve the server?

**Potential Issues:**
Any possible drawbacks?

**Additional Notes:**
Any other thoughts or ideas`,
    },
  },
  'applications': {
    name: 'Staff Applications',
    icon: '📋',
    color: '#8b5cf6',
    description: 'Apply to join our staff team',
    guide: {
      title: 'Staff Application Guidelines',
      steps: [
        'Be at least 16 years old',
        'Have 50+ hours of playtime on our servers',
        'Be active and engaged with the community',
        'Have a clean record (no recent bans)',
        'Fill out the application honestly and completely',
        'Be patient - reviews can take up to 7 days',
      ],
      template: `**In-Game Name:**
Your current username

**Age:**
Your age

**Playtime:**
Hours played on our servers

**Timezone:**
Your timezone (e.g., EST, PST)

**Why do you want to be staff?**
Explain your motivation

**Previous Experience:**
Any moderation/admin experience?

**How would you handle [scenario]:**
Example: A player is spamming chat

**Availability:**
How many hours per week can you dedicate?

**Additional Information:**
Anything else we should know?`,
    },
  },
};

export default function CategoryPage({ params }: PageProps) {
  const { user, isAuthenticated } = useAuth();
  const router = useRouter();
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [posts, setPosts] = useState<any[]>([]);

  const category = params.category as keyof typeof categoryData;
  const data = categoryData[category];

  useEffect(() => {
    if (data) {
      const categoryPosts = getForumPostsByCategory(category);
      setPosts(categoryPosts);
    }
  }, [category, data]);

  if (!data) {
    router.push('/forums');
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isAuthenticated || !user) {
      router.push('/login');
      return;
    }

    if (!title.trim() || !content.trim()) {
      alert('Please fill in all fields');
      return;
    }

    setIsSubmitting(true);

    try {
      const newPost = createForumPost({
        category,
        title: title.trim(),
        content: content.trim(),
        authorId: user.id,
        author: {
          username: user.username,
          displayName: user.displayName,
          avatar: user.avatar,
        },
        status: 'pending',
      });

      // Update posts list
      setPosts([newPost, ...posts]);

      // Reset form
      setTitle('');
      setContent('');
      setShowForm(false);

      alert('Your post has been submitted successfully!');
    } catch (error) {
      console.error('Error submitting post:', error);
      alert('Failed to submit post. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const useTemplate = () => {
    setContent(data.guide.template);
  };

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
                backgroundColor: `${data.color}20`, 
                border: `2px solid ${data.color}60`,
                boxShadow: `0 10px 30px ${data.color}30`
              }}
            >
              {data.icon}
            </div>
            <div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white uppercase tracking-wider mb-2" style={{ letterSpacing: '0.08em' }}>
                {data.name}
              </h1>
              <p className="text-gray-400 text-sm md:text-base">
                {data.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Separator */}
      <div className="relative z-10">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent"></div>
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
          <span className="text-orange-500 uppercase font-semibold tracking-wide">{data.name}</span>
        </div>

        {/* Guide Section */}
        <div className="mb-8 bg-[#0f0f0f] border border-[#1f1f1f] rounded-lg overflow-hidden">
          <div 
            className="border-b border-[#1f1f1f] px-6 py-4"
            style={{ backgroundColor: `${data.color}10` }}
          >
            <h2 className="font-display font-bold text-white uppercase tracking-wide flex items-center gap-2">
              <span>📖</span> {data.guide.title}
            </h2>
          </div>
          <div className="p-6">
            <ol className="space-y-3">
              {data.guide.steps.map((step, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-300">
                  <span 
                    className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white"
                    style={{ backgroundColor: data.color }}
                  >
                    {index + 1}
                  </span>
                  <span className="pt-0.5">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* New Post Button */}
        {isAuthenticated ? (
          !showForm && (
            <div className="mb-8">
              <button
                onClick={() => setShowForm(true)}
                className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-display font-bold rounded transition-all"
              >
                + Create New Post
              </button>
            </div>
          )
        ) : (
          <div className="mb-8 bg-gradient-to-r from-orange-500/10 to-red-600/10 border border-orange-500/20 rounded-lg p-4">
            <p className="text-gray-300 text-sm">
              <Link href="/login" className="text-orange-500 hover:text-orange-400 font-semibold">
                Login
              </Link>{' '}
              or{' '}
              <Link href="/register" className="text-orange-500 hover:text-orange-400 font-semibold">
                Register
              </Link>{' '}
              to create a post
            </p>
          </div>
        )}

        {/* New Post Form */}
        {showForm && (
          <div className="mb-8 bg-[#0f0f0f] border border-[#1f1f1f] rounded-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-display font-bold text-white">Create New Post</h3>
              <button
                onClick={() => setShowForm(false)}
                className="text-gray-500 hover:text-white transition-colors"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-display font-semibold text-gray-400 mb-2">
                  Title *
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter a clear and descriptive title"
                  className="w-full bg-[#0a0a0a] border border-[#1f1f1f] rounded px-4 py-3 text-white focus:outline-none focus:border-orange-500/50 transition-colors"
                  required
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-display font-semibold text-gray-400">
                    Content *
                  </label>
                  <button
                    type="button"
                    onClick={useTemplate}
                    className="text-xs text-orange-500 hover:text-orange-400 font-display font-semibold"
                  >
                    Use Template
                  </button>
                </div>
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Describe your issue, suggestion, or application in detail..."
                  rows={12}
                  className="w-full bg-[#0a0a0a] border border-[#1f1f1f] rounded px-4 py-3 text-white focus:outline-none focus:border-orange-500/50 transition-colors font-mono text-sm resize-y"
                  required
                />
                <p className="text-xs text-gray-600 mt-2">
                  Markdown formatting is supported
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-display font-bold rounded transition-all"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Post'}
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-6 py-3 bg-[#1f1f1f] hover:bg-[#252525] text-gray-300 font-display font-semibold rounded transition-all"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Accepted/Denied Applications (Pinned at top for Staff Applications) */}
        {category === 'applications' && (
          <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/forums/applications/accepted"
              className="group bg-gradient-to-r from-green-500/10 to-green-600/5 border border-green-500/30 hover:border-green-500/50 rounded-lg overflow-hidden transition-all shadow-lg hover:shadow-green-500/10"
            >
              <div className="px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-green-500/20 border-2 border-green-500/40 flex items-center justify-center">
                    <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-white uppercase tracking-wide text-sm mb-1">📌 Accepted Applications</h3>
                    <p className="text-xs text-gray-400">View approved staff members</p>
                  </div>
                </div>
                <svg className="w-5 h-5 text-gray-600 group-hover:text-green-400 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>

            <Link
              href="/forums/applications/denied"
              className="group bg-gradient-to-r from-red-500/10 to-red-600/5 border border-red-500/30 hover:border-red-500/50 rounded-lg overflow-hidden transition-all shadow-lg hover:shadow-red-500/10"
            >
              <div className="px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-red-500/20 border-2 border-red-500/40 flex items-center justify-center">
                    <svg className="w-7 h-7 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-white uppercase tracking-wide text-sm mb-1">📌 Denied Applications</h3>
                    <p className="text-xs text-gray-400">View rejected applications</p>
                  </div>
                </div>
                <svg className="w-5 h-5 text-gray-600 group-hover:text-red-400 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          </div>
        )}

        {/* Posts List */}
        <div className="bg-[#0f0f0f] border border-[#1f1f1f] rounded-lg overflow-hidden">
          <div className="bg-[#0a0a0a] border-b border-[#1f1f1f] px-6 py-4">
            <h3 className="font-display font-bold text-white uppercase tracking-wide">
              Recent Posts ({posts.length})
            </h3>
          </div>

          {posts.length === 0 ? (
            <div className="px-6 py-12 text-center">
              <p className="text-gray-500 font-display">No posts yet. Be the first to post!</p>
            </div>
          ) : (
            <div className="divide-y divide-[#1f1f1f]">
              {posts.map((post) => (
                <Link
                  key={post.id}
                  href={`/forums/${category}/${post.id}`}
                  className="block px-6 py-4 hover:bg-[#131313] transition-colors"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="font-display font-semibold text-white mb-1 hover:text-orange-400 transition-colors">
                        {post.title}
                      </h4>
                      <div className="flex items-center gap-3 text-xs text-gray-500">
                        <span>by <span className="text-gray-400">{post.author.displayName || post.author}</span></span>
                        <span>•</span>
                        <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                        <span>•</span>
                        <span className={`px-2 py-0.5 rounded-full ${
                          post.status === 'approved' ? 'bg-green-500/20 text-green-400' :
                          post.status === 'resolved' ? 'bg-blue-500/20 text-blue-400' :
                          post.status === 'rejected' ? 'bg-red-500/20 text-red-400' :
                          'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {post.status}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-6 text-sm text-gray-500">
                      <div className="text-center">
                        <div className="font-display font-semibold text-gray-400">{post.replies}</div>
                        <div className="text-xs">replies</div>
                      </div>
                      <div className="text-center">
                        <div className="font-display font-semibold text-gray-400">{post.views}</div>
                        <div className="text-xs">views</div>
                      </div>
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
