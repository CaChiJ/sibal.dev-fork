import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { getComments } from "@/libs/supabase/fetchComment";

export const Comments = async () => {
  const comments = await getComments();

  const sortedComments = comments.sort((a, b) => {
    if (a.created_at > b.created_at) return -1;
    if (a.created_at < b.created_at) return 1;

    return 0;
  });

  return (
    <main className="w-1/2 space-y-8 pb-8">
      {sortedComments.map(
        ({ id, title, comment, nickname, created_at }) => {
          return (
            <Card key={id}>
              <CardHeader>
                <CardTitle className="text-2xl font-bold">
                  {title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{comment}</p>
              </CardContent>
              <CardFooter className="flex justify-between text-sm">
                <p>{nickname}</p>
                <p>{new Date(created_at).toLocaleString()}</p>
              </CardFooter>
            </Card>
          );
        }
      )}
    </main>
  );
};
