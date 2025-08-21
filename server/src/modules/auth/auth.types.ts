import { z } from 'zod';

export const RegisterRequest = z.object({
  name: z.string().min(1, 'Name is required').max(100, 'Name must be less than 100 characters'),
  email: z.string().email('Invalid email format'),
  password: z.string().min(8, 'Password must be at least 8 characters long'),
});

export const LoginRequest = z.object({
  email: z.string().email('Invalid email format'),
  password: z.string().min(1, 'Password is required'),
});

export const RefreshRequest = z.object({
  refreshToken: z.string().min(1, 'Refresh token is required'),
});

export type RegisterRequestType = z.infer<typeof RegisterRequest>;
export type LoginRequestType = z.infer<typeof LoginRequest>;
export type RefreshRequestType = z.infer<typeof RefreshRequest>;

export interface AuthResponse {
  user: {
    id: string;
    email: string;
    name: string;
  };
  accessToken: string;
  refreshToken: string;
}

export interface RefreshResponse {
  accessToken: string;
}