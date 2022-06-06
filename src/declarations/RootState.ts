import { State as BookmarkState } from "@/store/bookmark";
import { State as FilterState } from "@/store/filter";
import { State as TagState } from "@/store/tag";

export interface RootState {
  tag: TagState;
  filter: FilterState;
  bookmark: BookmarkState;
}
