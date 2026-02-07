
import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, MembershipLevel } from '../types';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string) => Promise<void>;
  logout: () => void;
  updateUser: (updates: Partial<User>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate checking local storage or firebase auth state
    const savedUser = localStorage.getItem('studiofitness_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email: string) => {
    // Mocking Firebase Login
    const mockUser: User = {
      uid: 'user123',
      email: email,
      displayName: 'Miembro VIP',
      membership: 'Premium',
      currentWeight: 75,
      attendanceCount: 12,
      weightHistory: [
        { date: '2023-10-01', weight: 80 },
        { date: '2023-11-01', weight: 78 },
        { date: '2023-12-01', weight: 76 },
        { date: '2024-01-01', weight: 75 },
      ],
      achievements: [
        { id: '1', title: 'Madrugador', description: 'Asiste a 5 clases antes de las 8 AM', unlocked: true, icon: 'Sun' },
        { id: '2', title: 'Guerrero HIIT', description: 'Completa 10 clases de HIIT', unlocked: false, icon: 'Zap' },
      ],
    };
    setUser(mockUser);
    localStorage.setItem('studiofitness_user', JSON.stringify(mockUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('studiofitness_user');
  };

  const updateUser = (updates: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...updates };
      setUser(updatedUser);
      localStorage.setItem('studiofitness_user', JSON.stringify(updatedUser));
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};
