'use client';

import { createContext, useContext, useEffect, useState } from "react";
import { User } from "@/utils/types/auth";

interface AuthContextType {

}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
  const context = useContext(AuthContext);

  // Guard clause to ensure the context is not undefined
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  // State management for user authentication
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const getUser = async () => {
      const { success, error, data } = await readUser();
    };
  }, []);


}
