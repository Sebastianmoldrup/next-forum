"use server";
import { createClient } from "@/utils/supabase/server";
import { AuthResponse, SignUpValues, User } from "@/utils/types/auth";
import { revalidatePath } from "next/cache";
import { createUser } from "@/utils/supabase/actions/auth/crud";

export const signUp = async ({ username, email, password }: SignUpValues): Promise<AuthResponse> => {
  // initialize supabase client
  const supabase = await createClient();

  // authenticate user
  const { data, error } = await supabase.auth.signUp({ email, password });

  if (error) {
    return {
      success: false,
      error: true,
      message: error.message,
    };
  }

  const user: User = {
    id: data.user?.id,
    uid: data.user?.id,
    username: username,
    email: email,
    avatar_url: "",
    created_at: data.user?.created_at,
  }

  const createUserResponse = await createUser(user);

  console.log("createUserResponse", createUserResponse);

  return { success: true, error: false };
}
