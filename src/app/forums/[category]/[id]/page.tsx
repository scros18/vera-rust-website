'use client';

import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { 
  forumStorage, 
  incrementPostViews, 
  updateForumPost, 
  moveApplicationToFolder,
  isUserStaff 
} from '@/lib/optimized-db';

interface PageProps {
  params: {
    category: string;
    id: string;
  };
}

export default function ThreadPage({ params }: PageProps) {
  const { user, isAuthenticated } = useAuth();
  const router = useRouter();
  const [post, setPost] = useState<any>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState('');
  const [editContent, setEditContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [isStaff, setIsStaff] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const categoryNames: Record<string, string> = {
    'bug-reports': 'Bug Reports',
    'suggestions': 'Game Suggestions',
    'applications': 'Staff Applications',
    'applications-accepted': 'Accepted Applications',
    'applications-denied': 'Denied Applications',
  };

  useEffect(() => {
    // Load post and increment views
    const posts = forumStorage.get();
    const foundPost = posts.find(p => p.id === params.id);
    
    if (foundPost) {
      setPost(foundPost);
      setEditTitle(foundPost.title);
      setEditContent(foundPost.content);
      incrementPostViews(params.id);
    }
    
    // Check if user is staff
    if (user?.id) {
      setIsStaff(isUserStaff(user.id));
    }
    
    setLoading(false);
  }, [params.id, user]);

  const handleSaveEdit = () => {
    if (!editTitle.trim() || !editContent.trim()) {
      alert('Title and content cannot be empty');
      return;
    }

    const updatedPost = updateForumPost(params.id, {
      title: editTitle.trim(),
      content: editContent.trim(),
      isEdited: true,
    });
    
    if (updatedPost) {
      setPost(updatedPost);
      setIsEditing(false);
      alert('Post updated successfully!');
    }
  };

  const handleApplicationDecision = async (decision: 'accepted' | 'denied') => {
    if (!isStaff) {
      alert('Only staff members can make this decision.');
      return;
    }

    const confirmed = confirm(
      `Are you sure you want to ${decision === 'accepted' ? 'accept' : 'deny'} this application?`
    );

    if (!confirmed) return;

    setIsProcessing(true);

    const movedPost = moveApplicationToFolder(params.id, decision);
    
    if (movedPost) {
      alert(`Application has been ${decision}!`);
      // Redirect to the new category
      router.push(`/forums/applications-${decision}/${params.id}`);
    } else {
      alert('Failed to process application. Please try again.');
    }

    setIsProcessing(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] pt-20 flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-3xl font-display font-bold text-white mb-4">Thread Not Found</h1>
            <Link href="/forums" className="text-orange-500 hover:text-orange-400">
              ← Back to Forums
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const isOwner = isAuthenticated && user?.id === post.authorId;
  const categoryName = categoryNames[post.category] || post.category;
  const isApplication = post.category === 'applications' || post.category.startsWith('applications-');
  const canModerate = isStaff && post.category === 'applications' && post.status === 'pending';

  return (
    <div className="min-h-screen bg-[#0a0a0a] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: 'url(/site-bg-3.jpg)', filter: 'blur(8px)' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-sm">
          <Link href="/" className="text-gray-500 hover:text-orange-500 transition-colors uppercase tracking-wide">
            Home
          </Link>
          <span className="text-gray-600">/</span>
          <Link href="/forums" className="text-gray-500 hover:text-orange-500 transition-colors uppercase tracking-wide">
            Forums
          </Link>
          <span className="text-gray-600">/</span>
          <Link href={`/forums/${post.category}`} className="text-gray-500 hover:text-orange-500 transition-colors uppercase tracking-wide">
            {categoryName}
          </Link>
          <span className="text-gray-600">/</span>
          <span className="text-orange-500 uppercase font-semibold tracking-wide truncate max-w-xs">
            {post.title}
          </span>
        </div>

        {/* Main Thread */}
        <div className="bg-[#0f0f0f] border border-[#1f1f1f] rounded-lg overflow-hidden mb-6">
          {/* Thread Header */}
          <div className="bg-[#0a0a0a] border-b border-[#1f1f1f] px-6 py-4">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                {isEditing ? (
                  <input
                    type="text"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                    className="w-full bg-[#131313] border border-[#1f1f1f] rounded px-4 py-2 text-white text-xl font-display font-bold focus:outline-none focus:border-orange-500/50"
                  />
                ) : (
                  <h1 className="text-2xl md:text-3xl font-display font-bold text-white mb-3">
                    {post.title}
                  </h1>
                )}
                
                <div className="flex flex-wrap items-center gap-3 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white font-bold text-sm">
                      {(post.author?.displayName || post.author?.username || 'U').charAt(0).toUpperCase()}
                    </div>
                    <span className="text-gray-300 font-medium">{post.author?.displayName || post.author?.username || 'Unknown'}</span>
                  </div>
                  <span className="text-gray-600">•</span>
                  <span className="text-gray-500">
                    {new Date(post.createdAt).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric', 
                      year: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </span>
                  {post.isEdited && (
                    <>
                      <span className="text-gray-600">•</span>
                      <span className="text-gray-500 italic text-xs">Edited</span>
                    </>
                  )}
                  <span className="text-gray-600">•</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    post.status === 'approved' ? 'bg-green-500/20 text-green-400' :
                    post.status === 'resolved' ? 'bg-blue-500/20 text-blue-400' :
                    post.status === 'rejected' ? 'bg-red-500/20 text-red-400' :
                    'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {post.status}
                  </span>
                  <span className="text-gray-600">•</span>
                  <span className="text-gray-500">{post.views} views</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {isOwner && !isEditing && post.status === 'pending' && (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="px-4 py-2 bg-[#1f1f1f] hover:bg-[#252525] text-white rounded transition-all text-sm font-semibold"
                  >
                    Edit Post
                  </button>
                )}
                
                {canModerate && (
                  <>
                    <button
                      onClick={() => handleApplicationDecision('accepted')}
                      disabled={isProcessing}
                      className="px-4 py-2 bg-green-600 hover:bg-green-700 disabled:opacity-50 text-white rounded transition-all text-sm font-semibold"
                    >
                      ✓ Accept
                    </button>
                    <button
                      onClick={() => handleApplicationDecision('denied')}
                      disabled={isProcessing}
                      className="px-4 py-2 bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white rounded transition-all text-sm font-semibold"
                    >
                      ✗ Deny
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Thread Content */}
          <div className="p-6">
            {isEditing ? (
              <div className="space-y-4">
                <textarea
                  value={editContent}
                  onChange={(e) => setEditContent(e.target.value)}
                  rows={15}
                  className="w-full bg-[#0a0a0a] border border-[#1f1f1f] rounded px-4 py-3 text-white focus:outline-none focus:border-orange-500/50 font-mono text-sm resize-y"
                />
                <div className="flex items-center gap-3">
                  <button
                    onClick={handleSaveEdit}
                    className="px-6 py-2 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold rounded transition-all"
                  >
                    Save Changes
                  </button>
                  <button
                    onClick={() => {
                      setIsEditing(false);
                      setEditTitle(post.title);
                      setEditContent(post.content);
                    }}
                    className="px-6 py-2 bg-[#1f1f1f] hover:bg-[#252525] text-gray-300 font-semibold rounded transition-all"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div className="prose prose-invert max-w-none">
                <pre className="whitespace-pre-wrap text-gray-300 leading-relaxed font-sans">
                  {post.content}
                </pre>
              </div>
            )}
          </div>
        </div>

        {/* Staff Notice for Applications */}
        {isApplication && post.status === 'pending' && (
          <div className="mb-6 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Staff Application</h3>
                <p className="text-gray-400 text-sm mb-2">
                  This is a staff application thread. Only staff members can reply to this application.
                </p>
                <p className="text-gray-500 text-xs">
                  {isStaff ? (
                    <span className="text-green-400">✓ You have staff permissions and can reply to this thread.</span>
                  ) : (
                    <span>You can view this application and see staff feedback, but cannot reply.</span>
                  )}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Application Status Banner */}
        {isApplication && (post.status === 'accepted' || post.status === 'denied') && (
          <div className={`mb-6 border rounded-lg p-6 ${
            post.status === 'accepted' 
              ? 'bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-green-500/20' 
              : 'bg-gradient-to-r from-red-500/10 to-rose-500/10 border-red-500/20'
          }`}>
            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-2xl ${
                post.status === 'accepted' ? 'bg-green-600' : 'bg-red-600'
              }`}>
                {post.status === 'accepted' ? '✓' : '✗'}
              </div>
              <div>
                <h3 className={`text-xl font-bold ${
                  post.status === 'accepted' ? 'text-green-400' : 'text-red-400'
                }`}>
                  Application {post.status === 'accepted' ? 'Accepted' : 'Denied'}
                </h3>
                <p className="text-gray-400 text-sm">
                  This application has been {post.status} by staff on {new Date(post.updatedAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Back Button */}
        <div>
          <Link
            href={`/forums/${post.category}`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#1f1f1f] hover:bg-[#252525] text-white font-semibold rounded transition-all text-sm"
          >
            ← Back to {categoryName}
          </Link>
        </div>
      </div>
    </div>
  );
}
