'use server';
import { User, AuthResponse } from '@/utils/types/auth';
import { createClient } from "@/utils/supabase/server";

export const createUser = async (user: User) => { };

export const readUser = async (): Promise<AuthResponse> => {
  // initialize supabase client
  const supabase = await createClient();

  // Get the user from the session
  const { data: { user }, error } = await supabase.auth.getUser();

  // error handling
  if (error || !user) {
    return {
      success: false,
      error: true,
    }
  }
  console.log(user);

  return { success: true, error: false }
};

export const updateUser = async (user: User) => { };

export const deleteUser = async (userId: string) => { };
