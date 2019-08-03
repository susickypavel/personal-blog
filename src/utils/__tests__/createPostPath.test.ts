import { createPostPath } from ".."

describe("createPostPath", () => {
  test("should return post path using passed id", () => {
    expect(createPostPath("cool-id-bro")).toBe("/post/cool-id-bro")
  })
})
