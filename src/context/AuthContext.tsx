import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { apiClient, User, LoginRequest, RegisterRequest } from '@/lib/api';
import { useToast } from '@/hooks/use-toast';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

interface AuthContextType extends AuthState {
  login: (data: LoginRequest) => Promise<void>;
  register: (data: RegisterRequest) => Promise<void>;
  logout: () => Promise<void>;
  refreshAuth: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true,
  });
  const { toast } = useToast();

  // Initialize auth state on mount
  useEffect(() => {
    initializeAuth();
  }, []);

  const initializeAuth = async () => {
    try {
      const token = localStorage.getItem('accessToken');
      if (!token) {
        setAuthState(prev => ({ ...prev, isLoading: false }));
        return;
      }

      // Try to get user info with existing token
      const response = await apiClient.getMe();
      setAuthState({
        user: response.user,
        isAuthenticated: true,
        isLoading: false,
      });
    } catch (error) {
      // Token might be expired, try to refresh
      try {
        const refreshResponse = await apiClient.refresh();
        apiClient.setAccessToken(refreshResponse.accessToken);
        
        const userResponse = await apiClient.getMe();
        setAuthState({
          user: userResponse.user,
          isAuthenticated: true,
          isLoading: false,
        });
      } catch (refreshError) {
        // Refresh failed, clear auth state
        apiClient.setAccessToken(null);
        setAuthState({
          user: null,
          isAuthenticated: false,
          isLoading: false,
        });
      }
    }
  };

  const login = async (data: LoginRequest) => {
    try {
      setAuthState(prev => ({ ...prev, isLoading: true }));
      
      const response = await apiClient.login(data);
      apiClient.setAccessToken(response.accessToken);
      
      setAuthState({
        user: response.user,
        isAuthenticated: true,
        isLoading: false,
      });

      toast({
        title: 'Login successful!',
        description: `Welcome back, ${response.user.name}!`,
      });
    } catch (error) {
      setAuthState(prev => ({ ...prev, isLoading: false }));
      toast({
        title: 'Login failed',
        description: error instanceof Error ? error.message : 'Please check your credentials.',
        variant: 'destructive',
      });
      throw error;
    }
  };

  const register = async (data: RegisterRequest) => {
    try {
      setAuthState(prev => ({ ...prev, isLoading: true }));
      
      const response = await apiClient.register(data);
      apiClient.setAccessToken(response.accessToken);
      
      setAuthState({
        user: response.user,
        isAuthenticated: true,
        isLoading: false,
      });

      toast({
        title: 'Registration successful!',
        description: `Welcome to Momentum AI, ${response.user.name}!`,
      });
    } catch (error) {
      setAuthState(prev => ({ ...prev, isLoading: false }));
      toast({
        title: 'Registration failed',
        description: error instanceof Error ? error.message : 'Please try again.',
        variant: 'destructive',
      });
      throw error;
    }
  };

  const logout = async () => {
    try {
      await apiClient.logout();
    } catch (error) {
      // Continue with logout even if API call fails
      console.warn('Logout API call failed:', error);
    } finally {
      apiClient.setAccessToken(null);
      setAuthState({
        user: null,
        isAuthenticated: false,
        isLoading: false,
      });
      
      toast({
        title: 'Logged out',
        description: 'You have been successfully logged out.',
      });
    }
  };

  const refreshAuth = async () => {
    try {
      const response = await apiClient.refresh();
      apiClient.setAccessToken(response.accessToken);
      
      const userResponse = await apiClient.getMe();
      setAuthState(prev => ({
        ...prev,
        user: userResponse.user,
        isAuthenticated: true,
      }));
    } catch (error) {
      // Refresh failed, redirect to login
      apiClient.setAccessToken(null);
      setAuthState({
        user: null,
        isAuthenticated: false,
        isLoading: false,
      });
      throw error;
    }
  };

  const contextValue: AuthContextType = {
    ...authState,
    login,
    register,
    logout,
    refreshAuth,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};