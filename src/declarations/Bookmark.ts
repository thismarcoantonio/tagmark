import { Tag } from "@/declarations/Tag";

export type Bookmark = {
  id: string;
  name: string;
  description: string;
  link: string;
  tags: Tag["id"][];
  favorite?: boolean;
};
