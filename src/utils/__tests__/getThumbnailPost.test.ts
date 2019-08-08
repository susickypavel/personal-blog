import { getThumbnailForPost } from "@utils/getThumbnailForPost"

describe("GetThumbnailForPost", () => {
  test("should return node object, which contains thumbnail's properties", () => {
    const images = [{ node: { fluid: { originalName: "test.png" } } }]

    expect(getThumbnailForPost(images as any, "test.png")).toBe(images[0])
  })

  test("should return undefined when images wasn't found", () => {
    const images = [{ node: { fluid: { originalName: "test.png" } } }]

    expect(getThumbnailForPost(images as any, "nic.png")).toBe(undefined)
  })
})
