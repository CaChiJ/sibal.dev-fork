import { Comments } from "@/components/Comments";
import { getComments } from "@/libs/supabase/fetchComment";

export const CommentsWrapperGetComments = async () => {
  const comments: {
    id: number;
    title: string;
    comment: string;
    nickname: string;
    password: string;
    created_at: string;
  }[] = await getComments();

  return <Comments comments={comments} />;
};
