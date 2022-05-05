import { createTag, getTags, updateTag } from "./tag";
import { Tag } from "@/declarations/Tag";

let mockTags: Tag[] = [];

jest.mock("@/utils/storage", () => {
  return {
    __esModule: true,
    getItem: () => mockTags,
    setItem: (key: string, value: Tag[]) => (mockTags = value),
  };
});

beforeEach(() => {
  mockTags = [];
});

describe("tag", () => {
  it("creates tag correctly", async () => {
    const tag = await createTag({ name: "My tag" });
    expect(tag).toEqual({ name: "My tag", id: expect.any(String) });
  });

  it("updates tag correctly", async () => {
    const tag = await createTag({ name: "Original tag" });
    expect(tag).toEqual({ name: "Original tag", id: expect.any(String) });
    const tags = await updateTag({ id: tag.id, name: "Updated tag" });
    expect(tags).toEqual([{ name: "Updated tag", id: tag.id }]);
  });

  it("returns all tags correctly", async () => {
    await Promise.all([
      createTag({ name: "Tag 01" }),
      createTag({ name: "Tag 02" }),
      createTag({ name: "Tag 03" }),
    ]);
    const tags = getTags();
    expect(tags).toEqual([
      { id: expect.any(String), name: "Tag 01" },
      { id: expect.any(String), name: "Tag 02" },
      { id: expect.any(String), name: "Tag 03" },
    ]);
  });
});
