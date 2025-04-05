import { create } from "zustand";

interface NewCommentStore {
  comments: {
    title: string;
    comment: string;
    nickname: string;
    created_at: string;
  }[];
  addComment: (
    title: string,
    comment: string,
    nickname: string,
    created_at: string
  ) => void;
}

export const useNewCommentStore = create<NewCommentStore>((set) => ({
  comments: [],
  addComment: (
    title: string,
    comment: string,
    nickname: string,
    created_at: string
  ) =>
    set((state) => ({
      comments: [
        ...state.comments,
        {
          title,
          comment,
          nickname,
          created_at
        }
      ]
    }))
}));
