import { Comments } from "@/components/Comments";
import { UserInput } from "@/components/UserInput";

export default function page() {
  return (
    <div
      className="flex h-screen w-screen flex-col items-center gap-16 py-8"
    >
      <UserInput />
      <Comments />
    </div>
  );
}
