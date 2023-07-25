export type NewsData = Array<{
  title: string;
  comments_count: number;
  time_ago: string;
  content: string;
  user: string;
  id: number;
}>;

export interface INewsData
  extends Array<{
    title: string;
    comments_count: number;
    time_ago: string;
    content: string;
    user: string;
    id: number;
  }> {}
