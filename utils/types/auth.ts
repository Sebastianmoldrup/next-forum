export interface User {
  id?: string;
  uid?: string;
  username?: string;
  email?: string;
  avatar_url?: string;
  created_at?: string;
}

export interface AuthResponse {
  success?: boolean;
  error?: boolean;
  message?: string;
  data?: User | null;
  user?: User | null;
}

export interface SignInValues {
  email: string;
  password: string;
}

export interface SignUpValues extends SignInValues {
  username: string;
}

export interface SignInResponse {}

// export interface AuthContextType {
//   user: User | null;
//   signIn: (values: SignInValues) => Promise<AuthResponse>;
//   signUp: (values: SignUpValues) => Promise<AuthResponse>;
//   signOut: () => Promise<AuthResponse>;
//   updateUser: (user: User) => Promise<AuthResponse>;
//   deleteUser: () => Promise<AuthResponse>;
// }