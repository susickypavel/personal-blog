import React from "react"
import { render } from "@testing-library/react"
import BlogPostPreview from "../components/Index/BlogPostPreview"

describe("BlogPostPreview", () => {
  test("should render a post preview, which contains header with returned title", () => {
    const { container } = render(
      <BlogPostPreview
        post={{ frontmatter: { title: "Cool bro" }, internal: null, excerpt: null, children: null, id: null }}
      />
    )

    const postHeader = container.querySelector("h2")
    expect(postHeader.textContent).toBe("Cool bro")
  })
})
