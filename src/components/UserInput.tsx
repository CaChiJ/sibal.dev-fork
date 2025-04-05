"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { addComment } from "@/libs/supabase/fetchComment";
import { useNewCommentStore } from "@/libs/zustand/store";

import { type FormEvent, useState } from "react";

export const UserInput = () => {
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");
  const [nickname, setNickname] = useState("익명");
  const [password, setPassword] = useState("");

  const { addComment: addNewComment } = useNewCommentStore();

  const handleFormOnSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (title.length < 2) {
      alert("제목 두글자 이상 입력 ㄱㄱㄱㄱ");

      return;
    }

    if (comment.length < 2) {
      alert("내용 두글자 이상 입력 ㄱ");

      return;
    }

    if (password.length < 4) {
      alert("비번 네자리 이상 입력하삼~");

      return;
    }

    await addComment(title, comment, nickname, password);
    addNewComment(title, comment, nickname, new Date().toLocaleString());

    setTitle("");
    setComment("");
    setNickname("");
    setPassword("");
  };

  return (
    <form
      onSubmit={handleFormOnSubmit}
      className="w-1/2 space-y-4"
    >
      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="재목~~~~~~"
        className="!h-10 !text-xl font-bold placeholder:text-xl"
        maxLength={100}
      />
      <Textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="내용~~~"
        maxLength={5000}
      />
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Input
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            placeholder="닉내임"
            maxLength={12}
          />
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비번"
            maxLength={16}
          />
        </div>
        <Button>입력</Button>
      </div>
    </form>
  );
};
