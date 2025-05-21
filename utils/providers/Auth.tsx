"use client";

import { readUser } from "@/utils/supabase/actions/auth/crud";
import { createContext, useContext, useEffect, useState } from "react";
import { User } from "@/utils/types/auth";

interface AuthContextType {
  userData: () => User | undefined;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);

  // Guard clause to ensure the context is not undefined
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
  // State
  const [user, setUser] = useState<User | undefined>(undefined);

  useEffect(() => {
    const getUser = async () => {
      const { data, error } = await readUser();

      if (error) {
        console.error("Error fetching user data:", error);
        return;
      }

      setUser(data);
    };
    getUser();
  });

  const userData = (): User | null => {
    return user;
  };

  const values = {
    userData,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}
