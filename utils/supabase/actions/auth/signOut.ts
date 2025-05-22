"use client";

import { createClient } from "@/utils/supabase/client";
import { AuthResponse } from "@/utils/types/auth";

export const signOut = async (): Promise<AuthResponse> => {
  // initialize supabase client
  const supabase = createClient();

  // sign out user
  const { error } = await supabase.auth.signOut();

  // error handling
  if (error) {
    return {
      success: false,
      error: true,
    };
  }

  // return success response
  return { success: true, error: false };
};
