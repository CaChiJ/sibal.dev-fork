"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { addComment } from "@/libs/supabase/fetchComment";

import { type FormEvent, useState } from "react";

export const UserInput = () => {
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");

  const handleFormOnSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const trimmedTitle = title.trim();
    const trimmedPassword = password.trim();

    if (title.length < 2 || trimmedTitle.length < 2) {
      alert("제목 두글자 이상 입력 ㄱㄱㄱㄱ (공백 제외)");

      return;
    }

    if (comment.length < 2) {
      alert("내용 두글자 이상 입력 ㄱ");

      return;
    }

    if (password.length < 4 || trimmedPassword.length < 4) {
      alert("비번 네자리 이상 입력하삼~ (공백 제외)");

      return;
    }

    const passwordRegex = /^[A-Za-z0-9]+$/;
    if (!passwordRegex.test(password)) {
      alert("비번은 영어랑 숫자만 입력 ㄱㄱ");

      return;
    }

    await addComment(title, comment, nickname, password);

    location.reload();
  };

  return (
    <form
      onSubmit={handleFormOnSubmit}
      className="w-1/2 space-y-4"
    >
      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="재목~~~"
        className="!h-10 !text-xl font-bold placeholder:text-xl"
        maxLength={100}
      />
      <Textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="내용~~~ 문의사항은 africakokiri@gmail.com"
        maxLength={5000}
        className="!min-h-36"
      />
      <div className="flex items-center justify-between gap-8">
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
            autoComplete="off"
          />
        </div>
        <Button>입력</Button>
      </div>
    </form>
  );
};
