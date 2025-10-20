// Database utilities for forum posts
// Falls back to localStorage if no database is configured

interface ForumPost {
  id: string;
  category: 'bug-reports' | 'suggestions' | 'applications';
  title: string;
  content: string;
  author: string;
  authorEmail: string;
  createdAt: string;
  status: 'pending' | 'approved' | 'resolved' | 'rejected';
  replies: number;
  views: number;
}

const STORAGE_KEY = 'verarust_forum_posts';

// Check if database is available (placeholder for future database integration)
const isDatabaseAvailable = () => {
  return typeof process !== 'undefined' && process.env?.DATABASE_URL;
};

// Get all posts from storage
export const getAllPosts = (): ForumPost[] => {
  if (typeof window === 'undefined') return [];
  
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Error reading posts:', error);
    return [];
  }
};

// Get posts by category
export const getPostsByCategory = (category: string): ForumPost[] => {
  return getAllPosts().filter(post => post.category === category);
};

// Create a new post
export const createPost = (post: Omit<ForumPost, 'id' | 'createdAt' | 'replies' | 'views' | 'status'>): ForumPost => {
  const newPost: ForumPost = {
    ...post,
    id: `post-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    createdAt: new Date().toISOString(),
    status: 'pending',
    replies: 0,
    views: 0,
  };

  if (isDatabaseAvailable()) {
    // TODO: Save to database
    console.log('Would save to database:', newPost);
  }

  // Save to localStorage
  const posts = getAllPosts();
  posts.unshift(newPost);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));

  return newPost;
};

// Get a single post by ID
export const getPostById = (id: string): ForumPost | null => {
  const posts = getAllPosts();
  return posts.find(post => post.id === id) || null;
};

// Update post views
export const incrementViews = (id: string): void => {
  const posts = getAllPosts();
  const postIndex = posts.findIndex(post => post.id === id);
  
  if (postIndex !== -1) {
    posts[postIndex].views++;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
  }
};

// Get stats by category
export const getCategoryStats = (category: string) => {
  const posts = getPostsByCategory(category);
  return {
    threads: posts.length,
    posts: posts.reduce((sum, post) => sum + post.replies + 1, 0),
  };
};

// Clear all data (happens on restart if no database)
export const clearAllData = (): void => {
  if (!isDatabaseAvailable()) {
    localStorage.removeItem(STORAGE_KEY);
    console.log('Cleared forum posts from localStorage');
  }
};
