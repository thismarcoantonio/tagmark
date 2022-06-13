import { Tag } from "@/declarations/Tag";

export interface Bookmark {
  id: string;
  name: string;
  description: string;
  link: string;
  tags: Tag["id"][];
  favorite?: boolean;
}
