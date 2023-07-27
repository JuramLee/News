// export type NewsData = Array<{
//   title: string;
//   comments_count: number;
//   time_ago: string;
//   content: string;
//   user: string;
//   id: number;
// }>;

export interface INewsData
  extends Array<{
    title: string;
    comments_count: number;
    time_ago: string;
    content: string;
    user: string;
    id: number;
  }> {}

export interface IDewsDetailData {
  id: number;
  title: string;
  points: number | null;
  user: string | null;
  time: number;
  time_ago: string;
  content: string;
  deleted?: boolean;
  dead?: boolean;
  type: string;
  url?: string;
  domain?: string;
  comments: IDewsDetailData[];
  level: number;
  comments_count: number;
}
