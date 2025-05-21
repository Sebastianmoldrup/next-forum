"use server";
import { createClient } from "@/utils/supabase/server";
import { SignInValues } from "@/utils/types/auth";

export const signIn = async ({ email, password }: SignInValues) => {
  // initialize supabase client
  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    return {
      success: false,
      error: true,
      message: error.message,
    };
  }

  return {
    success: true,
    error: false,
  }

};
