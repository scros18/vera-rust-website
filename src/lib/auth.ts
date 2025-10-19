// Local storage authentication utilities
export interface User {
  id: string;
  username: string;
  email: string;
  displayName: string;
  avatar?: string;
  bio?: string;
  level: number;
  xp: number;
  joinedDate: string;
  stats?: {
    gamesPlayed: number;
    wins: number;
    losses: number;
    winRate: number;
  };
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}

const USERS_KEY = 'warbandits_users';
const CURRENT_USER_KEY = 'warbandits_current_user';

// Initialize storage
const initStorage = () => {
  if (typeof window !== 'undefined') {
    const users = localStorage.getItem(USERS_KEY);
    if (!users) {
      localStorage.setItem(USERS_KEY, JSON.stringify([]));
    }
  }
};

// Get all users
export const getAllUsers = (): User[] => {
  if (typeof window === 'undefined') return [];
  initStorage();
  const users = localStorage.getItem(USERS_KEY);
  return users ? JSON.parse(users) : [];
};

// Save all users
const saveAllUsers = (users: User[]) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  }
};

// Register new user
export const register = (
  username: string,
  email: string,
  password: string,
  displayName: string
): { success: boolean; error?: string; user?: User } => {
  initStorage();
  const users = getAllUsers();

  // Check if username or email already exists
  if (users.some((u) => u.username === username)) {
    return { success: false, error: 'Username already exists' };
  }
  if (users.some((u) => u.email === email)) {
    return { success: false, error: 'Email already exists' };
  }

  // Create new user
  const newUser: User = {
    id: crypto.randomUUID(),
    username,
    email,
    displayName,
    level: 1,
    xp: 0,
    joinedDate: new Date().toISOString(),
    stats: {
      gamesPlayed: 0,
      wins: 0,
      losses: 0,
      winRate: 0,
    },
  };

  users.push(newUser);
  saveAllUsers(users);

  // Store password separately (in real app, this would be hashed on backend)
  const passwords = JSON.parse(localStorage.getItem('warbandits_passwords') || '{}');
  passwords[username] = password;
  localStorage.setItem('warbandits_passwords', JSON.stringify(passwords));

  return { success: true, user: newUser };
};

// Login user
export const login = (
  username: string,
  password: string
): { success: boolean; error?: string; user?: User } => {
  initStorage();
  const users = getAllUsers();
  const passwords = JSON.parse(localStorage.getItem('warbandits_passwords') || '{}');

  const user = users.find((u) => u.username === username);
  if (!user) {
    return { success: false, error: 'Invalid username or password' };
  }

  if (passwords[username] !== password) {
    return { success: false, error: 'Invalid username or password' };
  }

  // Set current user
  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));

  return { success: true, user };
};

// Logout user
export const logout = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(CURRENT_USER_KEY);
  }
};

// Get current user
export const getCurrentUser = (): User | null => {
  if (typeof window === 'undefined') return null;
  const userStr = localStorage.getItem(CURRENT_USER_KEY);
  return userStr ? JSON.parse(userStr) : null;
};

// Update user profile
export const updateProfile = (updates: Partial<User>): { success: boolean; error?: string } => {
  const currentUser = getCurrentUser();
  if (!currentUser) {
    return { success: false, error: 'Not authenticated' };
  }

  const users = getAllUsers();
  const userIndex = users.findIndex((u) => u.id === currentUser.id);
  
  if (userIndex === -1) {
    return { success: false, error: 'User not found' };
  }

  // Update user
  users[userIndex] = { ...users[userIndex], ...updates };
  saveAllUsers(users);

  // Update current user in session
  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(users[userIndex]));

  return { success: true };
};

// Check if user is authenticated
export const isAuthenticated = (): boolean => {
  return getCurrentUser() !== null;
};
