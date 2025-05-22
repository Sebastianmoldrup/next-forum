"use client";

import { readUser } from "@/utils/supabase/actions/auth/crud";
import { createContext, useContext, useEffect, useState } from "react";
import { User } from "@/utils/types/auth";

interface AuthContextType {
  user: User | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        const { data, error } = await readUser();

        if (error) {
          console.error("Error fetching user data:", error);
          setUser(null);
          return;
        }
        
        setUser(data ?? null);
      } catch (error) {
        console.error("Unexpected error:", error);
        setUser(null);
      } 
    };

    getUser();
  }, []);

  const values: AuthContextType = {
    user,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}
