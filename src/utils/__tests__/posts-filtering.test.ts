import { postFilter } from "@utils/posts-filtering"

describe("posts filtering", () => {
  test("should return true when title contains a searched term", () => {
    expect(postFilter({ node: { frontmatter: { title: "test" } } } as any, "test")).toBe(true)
  })

  test("should return false when title does not contain a searched term", () => {
    expect(postFilter({ node: { frontmatter: { title: "test" } } } as any, "nothing")).toBe(false)
  })

  test("should return true when searched term is null (so we don't search anything at all)", () => {
    expect(postFilter({ node: { frontmatter: { title: "test" } } } as any, null)).toBe(true)
  })
})
