"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { type FormEvent } from "react";

export const UserInput = () => {
  const handleFormOnSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleFormOnSubmit}
      className="absolute left-[25%] top-8 w-1/2 space-y-4"
    >
      <Textarea placeholder="내용 입력~~~" />
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Input placeholder="닉내임" />
          <Input placeholder="비번" />
        </div>
        <Button>입력</Button>
      </div>
    </form>
  );
};
