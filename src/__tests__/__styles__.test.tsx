import React from "react"
import { render } from "@testing-library/react"
import { matchers } from "jest-emotion"

import { BlogPostPreviewBody } from "@components/Index/__styles__"

beforeAll(() => {
  expect.extend(matchers)
})

describe("Blog Post Preview Body", () => {
  test("should render Blog Post Preview body with default background color", () => {
    const { getByText } = render(<BlogPostPreviewBody selected={false}>Test</BlogPostPreviewBody>)
    expect(getByText("Test")).toHaveStyleRule("background", "#f222ff")
  })

  test("should render Blog Post Preview body with different background when hovered", () => {
    const { getByText } = render(<BlogPostPreviewBody selected={true}>Test</BlogPostPreviewBody>)
    expect(getByText("Test")).toHaveStyleRule(
      "background",
      "linear-gradient(219deg,#8c1eff,#f222ff,#ff2975,#f222ff,#8c1eff)"
    )
  })
})
