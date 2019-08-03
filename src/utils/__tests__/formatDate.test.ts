import { formatDate } from "@utils/index"

describe("Date formatter", () => {
  test("should return formatted date", () => {
    const id = "2019-01-01"
    expect(formatDate(id)).toBe("1/1/2019")
  })
})
