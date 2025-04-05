import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { getComments } from "@/libs/supabase/fetchComment";

const comments = [
  {
    id: 7,
    comment: "야호야호 야호야호~~~~~~",
    password: "1234",
    created_at: "2025-04-05T03:04:35.700066+00:00",
    nickname: "김부각",
    title: "야호~~~~"
  },
  {
    id: 8,
    comment: "감자와 고구마의 난투",
    password: "0000",
    created_at: "2025-04-05T03:05:15.690511+00:00",
    nickname: "G435",
    title: "코로나 바이러스"
  },
  {
    id: 9,
    comment: "윤석열 vs 김정일 스파링",
    password: "1111",
    created_at: "2025-04-05T03:06:39.459829+00:00",
    nickname: "에너지 드링크",
    title: "김정일과 윤석열"
  },
  {
    id: 10,
    comment: "키드밀리 앨범내줘",
    password: "1231",
    created_at: "2025-04-05T03:08:04.379891+00:00",
    nickname: "키드밀리",
    title: "나의 젊음은 조용히 죽어가네"
  },
  {
    id: 11,
    comment: "Kyora",
    password: "1010",
    created_at: "2025-04-05T03:09:53.917508+00:00",
    nickname: "Engine",
    title: "Core Keeper"
  },
  {
    id: 12,
    comment: "팔로알토 저스디스",
    password: "123123123",
    created_at: "2025-04-05T03:11:30.064939+00:00",
    nickname: "가짜",
    title: "Brown eyes view"
  },
  {
    id: 13,
    comment: "최엘비 앨범내줘",
    password: "1234",
    created_at: "2025-04-05T03:20:40.321372+00:00",
    nickname: "최엘비",
    title: "구름구름"
  },
  {
    id: 14,
    comment: "스카이민혁",
    password: "1234",
    created_at: "2025-04-05T03:31:35.282211+00:00",
    nickname: "해방",
    title: "진실"
  },
  {
    id: 15,
    comment: "슬기",
    password: "1323",
    created_at: "2025-04-05T03:38:40.45354+00:00",
    nickname: "익명",
    title: "레드벨벳"
  }
];

export const Comments = async () => {
  // const comments = await getComments();

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
