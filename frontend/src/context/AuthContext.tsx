import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  joinDate: string;
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  signup: (userData: SignupData) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
  isAuthenticated: boolean;
}

interface SignupData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone?: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Dummy user credentials for testing
const DUMMY_USERS = [
  {
    id: '1',
    firstName: 'Isabella',
    lastName: 'Chen',
    email: 'isabella@example.com',
    password: 'password123',
    phone: '+1 (555) 123-4567',
    joinDate: 'March 2023',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b5bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80'
  },
  {
    id: '2',
    firstName: 'Alexander',
    lastName: 'Rodriguez',
    email: 'alex@example.com',
    password: 'password123',
    phone: '+1 (555) 987-6543',
    joinDate: 'January 2024',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80'
  },
  {
    id: '3',
    firstName: 'Sophia',
    lastName: 'Johnson',
    email: 'sophia@example.com',
    password: 'password123',
    phone: '+1 (555) 456-7890',
    joinDate: 'February 2024',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80'
  },
  {
    id: '4',
    firstName: 'James',
    lastName: 'Wilson',
    email: 'james@example.com',
    password: 'password123',
    phone: '+1 (555) 234-5678',
    joinDate: 'December 2023',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80'
  }
];

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check for existing session on mount
  useEffect(() => {
    const checkAuth = () => {
      const userData = localStorage.getItem('velato_user');
      if (userData) {
        try {
          const parsedUser = JSON.parse(userData);
          setUser(parsedUser);
        } catch (error) {
          console.error('Error parsing user data:', error);
          localStorage.removeItem('velato_user');
        }
      }
      setIsLoading(false);
    };

    checkAuth();
  }, []);

  const login = async (email: string, password: string): Promise<{ success: boolean; error?: string }> => {
    setIsLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const foundUser = DUMMY_USERS.find(u => u.email === email && u.password === password);
    
    if (foundUser) {
      const { password: _, ...userWithoutPassword } = foundUser;
      setUser(userWithoutPassword);
      localStorage.setItem('velato_user', JSON.stringify(userWithoutPassword));
      setIsLoading(false);
      return { success: true };
    } else {
      setIsLoading(false);
      return { success: false, error: 'Invalid email or password' };
    }
  };

  const signup = async (userData: SignupData): Promise<{ success: boolean; error?: string }> => {
    setIsLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Check if user already exists
    const existingUser = DUMMY_USERS.find(u => u.email === userData.email);
    if (existingUser) {
      setIsLoading(false);
      return { success: false, error: 'User with this email already exists' };
    }
    
    // Create new user
    const newUser: User = {
      id: Date.now().toString(),
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
      phone: userData.phone,
      joinDate: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
      avatar: `https://ui-avatars.com/api/?name=${userData.firstName}+${userData.lastName}&background=d4af37&color=fff&size=256`
    };
    
    // Add to dummy users (in real app, this would be API call)
    DUMMY_USERS.push({
      ...newUser,
      password: userData.password,
      phone: userData.phone || '',
      avatar: newUser.avatar || ''
    });
    
    setUser(newUser);
    localStorage.setItem('velato_user', JSON.stringify(newUser));
    setIsLoading(false);
    return { success: true };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('velato_user');
  };

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider value={{
      user,
      isLoading,
      login,
      signup,
      logout,
      isAuthenticated
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Export dummy users for reference
export const getDummyUsers = () => DUMMY_USERS.map(({ password, ...user }) => user); 