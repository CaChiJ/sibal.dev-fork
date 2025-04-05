"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
} from "@/components/ui/alert-dialog";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { deleteComment } from "@/libs/supabase/fetchComment";

import { X } from "lucide-react";
import { useState } from "react";

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
  const [openModal, setOpenModal] = useState(false);
  const [password, setPassword] = useState("");
  const [commentId, setCommentId] = useState(0);

  const sortedComments = comments.sort((a, b) => {
    if (a.created_at > b.created_at) return -1;
    if (a.created_at < b.created_at) return 1;

    return 0;
  });

  const handleDeleteComment = async () => {
    const result = await deleteComment(commentId, password);

    if (result.length === 0) {
      alert("비번 틀린듯? ㅋㅋ");

      return;
    }

    alert("삭제되었다");

    location.reload();
  };

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
                <div className="flex items-center gap-4">
                  <p>{new Date(created_at).toLocaleString()}</p>
                  <button
                    onClick={() => {
                      setOpenModal(true);
                      setCommentId(id);
                    }}
                  >
                    <X className="h-4 w-4 text-red-500" />
                  </button>
                </div>
              </CardFooter>
            </Card>
          );
        }
      )}
      <AlertDialog
        open={openModal}
        onOpenChange={setOpenModal}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>댓삭?</AlertDialogTitle>
            <AlertDialogDescription>
              <label htmlFor="password">비번 입력하삼</label>
            </AlertDialogDescription>
            <Input
              id="password"
              name="password"
              type="password"
              maxLength={16}
              onChange={(e) => setPassword(e.target.value)}
            />
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>닫기</AlertDialogCancel>
            <AlertDialogAction onClick={handleDeleteComment}>
              삭제하기
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </main>
  );
};
