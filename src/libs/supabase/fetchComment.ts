"use server";

import { createClient } from "@/libs/supabase/server";

export const addComment = async (
  title: string,
  comment: string,
  nickname: string,
  password: string
) => {
  const supabase = await createClient();

  const { data, error } = await supabase.from("comments").insert([
    {
      title,
      comment,
      nickname,
      password
    }
  ]);

  if (error) throw error;

  return data;
};

export const getComments = async () => {
  const supabase = await createClient();

  const { data, error } = await supabase.from("comments").select("*");

  if (error) throw error;

  return data;
};

export const deleteComment = async (id: number, password: string) => {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("comments")
    .delete()
    // .eq("password", password);
    .match({ id, password })
    .select();

  if (error) throw error;

  return data;
};
