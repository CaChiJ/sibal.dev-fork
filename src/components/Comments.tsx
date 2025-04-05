import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { getComments } from "@/libs/supabase/fetchComment";

export const Comments = async () => {
  // const comments = await getComments();

  const comments = [
    {
      id: 6,
      comment: "ㄷㄱㄷㄱㅅㄱ",
      password: "234234",
      created_at: "2025-04-05T02:45:55.266134+00:00",
      nickname: "ㄷㄱㄷㄱ"
    }
  ];

  return (
    <main className="absolute left-[25%] top-48 w-1/2">
      {comments.map(({ id, comment, nickname, created_at }) => {
        return (
          <Card key={id}>
            <CardContent>{comment}</CardContent>
            <CardFooter className="flex justify-between">
              <p>{nickname}</p>
              <p>{new Date(created_at).toLocaleString()}</p>
            </CardFooter>
          </Card>
        );
      })}
    </main>
  );
};
