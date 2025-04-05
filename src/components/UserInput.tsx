"use client";

import { type FormEvent } from "react";

export const UserInput = () => {
  const handleFormOnSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return <form onSubmit={handleFormOnSubmit}></form>;
};
