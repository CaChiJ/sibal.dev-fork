"use server";

import { createClient } from "@/libs/supabase/server";

export const addComment = async (
  comment: string,
  nickname: string,
  password: string
) => {
  const supabase = await createClient();

  const { data, error } = await supabase.from("comments").insert([
    {
      comment,
      nickname,
      password
    }
  ]);

  if (error) throw error;

  return data;
};
