import { FC } from "react";

export interface PostMeta {
  title: string;
  date: string;
}

export type Post = PostMeta & {
  component: FC;
};
