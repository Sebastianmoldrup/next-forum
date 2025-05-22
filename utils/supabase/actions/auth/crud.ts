'use server';
import { User, AuthResponse } from '@/utils/types/auth';
import { createClient } from "@/utils/supabase/server";

export const createUser = async (user: User): Promise<AuthResponse> => {
  // initialize supabase client
  const supabase = await createClient();

  // Insert / create user in the database
  const { error } = await supabase.from("users").insert(user);

  // error handling
  if (error) {
    return {
      success: false,
      error: true,
      message: error.message,
    }
  }

  // return success response
  return {
    success: true,
    error: false,
  }
};

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

  // return success response
  return { success: true, error: false }
};

export const updateUser = async (user: User) => { };

export const deleteUser = async (userId: string) => { };
