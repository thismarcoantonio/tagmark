import { Bookmark } from "@/declarations/Bookmark";
import { filterByName, filterByTags } from "./bookmarkFilter";

const bookmark: Bookmark = {
  id: "0",
  name: "Bookmark name 0",
  description: "Bookmark description 0",
  link: "",
  tags: ["match"],
};

describe("bookmarkFilter utils", () => {
  describe("filterByName", () => {
    it("returns true if search filter is empty", () => {
      const result = filterByName(bookmark, "");
      expect(result).toBe(true);
    });

    it("returns true if search filter matches name", () => {
      const result = filterByName(bookmark, "name 0");
      expect(result).toBe(true);
    });

    it("returns true if search filter matches name", () => {
      const result = filterByName(bookmark, "name 0");
      expect(result).toBe(true);
    });

    it("returns true if search filter matches description", () => {
      const result = filterByName(bookmark, "description 0");
      expect(result).toBe(true);
    });

    it("returns false if search filter doesn't match name and description", () => {
      const result = filterByName(bookmark, "doesn't match anything");
      expect(result).toBe(false);
    });
  });

  describe("filterByTags", () => {
    it("returns true if there's no active tags", () => {
      const result = filterByTags(bookmark, []);
      expect(result).toBe(true);
    });

    it("returns true if bookmark tags matches any active tags", () => {
      const result = filterByTags(bookmark, ["match"]);
      expect(result).toBe(true);
    });

    it("returns false if bookmark tags doesn't match some active tag", () => {
      const result = filterByTags(bookmark, ["match", "no-match"]);
      expect(result).toBe(false);
    });

    it("returns false if bookmark tags doesn't match any active tags", () => {
      const result = filterByTags(bookmark, ["no-match"]);
      expect(result).toBe(false);
    });
  });
});
