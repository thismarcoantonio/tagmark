import { Tag } from "@/declarations/Tag";

export type Card = {
  id: string;
  name: string;
  description: string;
  link: string;
  tags: Tag["id"][];
};
