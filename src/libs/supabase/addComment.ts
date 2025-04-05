"use server";

import { createClient } from "@/libs/supabase/server";

export const addComment = async (comment: string, password: string) => {
  const supabase = await createClient();

  const { data, error } = await supabase.from("comments").insert([
    {
      comment,
      password
    }
  ]);

  if (error) throw error;

  return data;
};

console.log(await addComment("hahah", "1234"));
