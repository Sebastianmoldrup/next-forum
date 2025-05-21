export interface User {
  id?: string;
  uid?: string;
  username: string;
  email: string;
  avatar_url: string;
  created_at?: string;
}

export interface AuthResponse {
  success: boolean;
  error: boolean;
  message?: string;
  data?: User | null;
}

export interface SignInValues {
  email: string;
  password: string;
}

export interface SignUpValues extends SignInValues {
  username: string;
}
