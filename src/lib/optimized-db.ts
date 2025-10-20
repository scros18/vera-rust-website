// Optimized database interface with Prisma-ready structure
// Supports localStorage fallback and future database integration

export interface User {
  id: string;
  email: string;
  username: string;
  displayName: string;
  avatar?: string;
  provider: 'local' | 'discord';
  providerId?: string;
  role: 'user' | 'staff' | 'admin';
  level: number;
  xp: number;
  stats: {
    gamesPlayed: number;
    wins: number;
    losses: number;
    winRate: number;
  };
  joinedDate: string;
  lastLogin: string;
}

export interface ForumPost {
  id: string;
  category: 'bug-reports' | 'suggestions' | 'applications' | 'applications-accepted' | 'applications-denied';
  title: string;
  content: string;
  authorId: string;
  author: {
    username: string;
    displayName: string;
    avatar?: string;
  };
  status: 'pending' | 'approved' | 'resolved' | 'rejected' | 'accepted' | 'denied';
  replies: number;
  views: number;
  createdAt: string;
  updatedAt: string;
  isPinned: boolean;
  isLocked: boolean;
  isEdited?: boolean;
  canReply?: boolean; // For staff applications - only staff can reply
}

export interface RustServerStats {
  serverId: string;
  serverName: string;
  players: {
    current: number;
    max: number;
  };
  uptime: number;
  fps: number;
  entities: number;
  map: string;
  wipeDate: string;
  lastUpdate: string;
}

// Storage keys
const STORAGE_KEYS = {
  USERS: 'verarust_users',
  FORUM_POSTS: 'verarust_forum_posts',
  SERVER_STATS: 'verarust_server_stats',
  CURRENT_USER: 'verarust_current_user',
} as const;

// Database availability check
export const isDatabaseAvailable = (): boolean => {
  return typeof process !== 'undefined' && !!process.env?.DATABASE_URL;
};

// Generic storage wrapper with optimized reads/writes
class StorageManager<T> {
  constructor(private key: string) {}

  get(): T[] {
    if (typeof window === 'undefined') return [];
    
    try {
      const data = localStorage.getItem(this.key);
      if (!data) return [];
      
      const parsed = JSON.parse(data);
      return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
      console.error(`Error reading ${this.key}:`, error);
      return [];
    }
  }

  set(data: T[]): void {
    if (typeof window === 'undefined') return;
    
    try {
      localStorage.setItem(this.key, JSON.stringify(data));
    } catch (error) {
      console.error(`Error writing ${this.key}:`, error);
    }
  }

  clear(): void {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(this.key);
  }

  update(predicate: (item: T) => boolean, updates: Partial<T>): boolean {
    const items = this.get();
    const index = items.findIndex(predicate);
    
    if (index === -1) return false;
    
    items[index] = { ...items[index], ...updates };
    this.set(items);
    return true;
  }
}

// User operations
export const userStorage = new StorageManager<User>(STORAGE_KEYS.USERS);

export const createUser = (userData: Omit<User, 'id' | 'joinedDate' | 'lastLogin'>): User => {
  const user: User = {
    ...userData,
    role: userData.role || 'user',
    id: `user-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    joinedDate: new Date().toISOString(),
    lastLogin: new Date().toISOString(),
  };

  const users = userStorage.get();
  users.push(user);
  userStorage.set(users);

  return user;
};

export const getUserByEmail = (email: string): User | null => {
  const users = userStorage.get();
  return users.find(u => u.email.toLowerCase() === email.toLowerCase()) || null;
};

export const getUserByProviderId = (providerId: string): User | null => {
  const users = userStorage.get();
  return users.find(u => u.providerId === providerId) || null;
};

export const updateUserStats = (userId: string, stats: Partial<User['stats']>): boolean => {
  const users = userStorage.get();
  const index = users.findIndex(u => u.id === userId);
  
  if (index === -1) return false;
  
  users[index].stats = { ...users[index].stats, ...stats };
  userStorage.set(users);
  return true;
};

// Forum operations
export const forumStorage = new StorageManager<ForumPost>(STORAGE_KEYS.FORUM_POSTS);

export const createForumPost = (
  postData: Omit<ForumPost, 'id' | 'createdAt' | 'updatedAt' | 'replies' | 'views' | 'isPinned' | 'isLocked'>
): ForumPost => {
  const post: ForumPost = {
    ...postData,
    id: `post-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    replies: 0,
    views: 0,
    isPinned: false,
    isLocked: false,
  };

  const posts = forumStorage.get();
  posts.unshift(post);
  forumStorage.set(posts);

  return post;
};

export const getForumPostsByCategory = (category: string): ForumPost[] => {
  return forumStorage.get().filter(p => p.category === category);
};

export const incrementPostViews = (postId: string): void => {
  forumStorage.update(
    p => p.id === postId,
    { views: (forumStorage.get().find(p => p.id === postId)?.views || 0) + 1 }
  );
};

export const getCategoryStats = (category: string) => {
  const posts = getForumPostsByCategory(category);
  return {
    threads: posts.length,
    posts: posts.reduce((sum, p) => sum + p.replies + 1, 0),
  };
};

export const updateForumPost = (
  postId: string,
  updates: Partial<ForumPost>
): ForumPost | null => {
  const posts = forumStorage.get();
  const index = posts.findIndex(p => p.id === postId);
  
  if (index === -1) return null;
  
  posts[index] = {
    ...posts[index],
    ...updates,
    updatedAt: new Date().toISOString(),
  };
  
  forumStorage.set(posts);
  return posts[index];
};

export const moveApplicationToFolder = (
  postId: string,
  decision: 'accepted' | 'denied'
): ForumPost | null => {
  const posts = forumStorage.get();
  const index = posts.findIndex(p => p.id === postId);
  
  if (index === -1) return null;
  
  const newCategory = decision === 'accepted' ? 'applications-accepted' : 'applications-denied';
  const newStatus = decision === 'accepted' ? 'accepted' : 'denied';
  
  posts[index] = {
    ...posts[index],
    category: newCategory as ForumPost['category'],
    status: newStatus as ForumPost['status'],
    isLocked: true,
    updatedAt: new Date().toISOString(),
  };
  
  forumStorage.set(posts);
  return posts[index];
};

export const getForumPostById = (postId: string): ForumPost | null => {
  return forumStorage.get().find(p => p.id === postId) || null;
};

export const isUserStaff = (userId: string): boolean => {
  const users = userStorage.get();
  const user = users.find(u => u.id === userId);
  return user?.role === 'staff' || user?.role === 'admin';
};

// Server stats operations
export const serverStatsStorage = new StorageManager<RustServerStats>(STORAGE_KEYS.SERVER_STATS);

export const updateServerStats = (stats: RustServerStats): void => {
  const allStats = serverStatsStorage.get();
  const index = allStats.findIndex(s => s.serverId === stats.serverId);
  
  if (index !== -1) {
    allStats[index] = stats;
  } else {
    allStats.push(stats);
  }
  
  serverStatsStorage.set(allStats);
};

export const getServerStats = (serverId: string): RustServerStats | null => {
  return serverStatsStorage.get().find(s => s.serverId === serverId) || null;
};

// Clear all data on restart if no database
export const clearAllDataIfNoDB = (): void => {
  if (!isDatabaseAvailable() && typeof window !== 'undefined') {
    Object.values(STORAGE_KEYS).forEach(key => {
      localStorage.removeItem(key);
    });
    console.log('🗑️ Cleared all data (no database configured)');
  }
};

// Export storage keys for use in other modules
export { STORAGE_KEYS };
