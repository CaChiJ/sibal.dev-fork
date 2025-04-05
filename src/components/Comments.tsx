"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { useNewCommentStore } from "@/libs/zustand/store";

import { useMemo } from "react";

export const Comments = ({
  comments
}: {
  comments: {
    id: number;
    title: string;
    comment: string;
    nickname: string;
    password: string;
    created_at: string;
  }[];
}) => {
  const { comments: newComments } = useNewCommentStore();

  const sortedComments = useMemo(() => {
    const optimisticComments = newComments.map((comment) => ({
      ...comment,
      id: 9999999 + Math.floor(Math.random() * 1000),
      password: "****"
    }));

    const combined = [...optimisticComments, ...comments];

    return combined.sort((a, b) => {
      if (a.created_at > b.created_at) return -1;
      if (a.created_at < b.created_at) return 1;

      return 0;
    });

    // eslint-disable-next-line
  }, [newComments]);

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
