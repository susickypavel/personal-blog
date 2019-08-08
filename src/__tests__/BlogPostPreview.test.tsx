import React from "react"
import { render } from "@testing-library/react"
import BlogPostPreview from "@components/Index/BlogPostPreview"

import "@testing-library/jest-dom/extend-expect"
import { createPostPath } from "@utils/index"

describe("BlogPostPreview", () => {
  test("should render a post preview, which contains header with returned title", () => {
    const { container } = render(
      <BlogPostPreview
        thumbnail={{}}
        post={{
          frontmatter: { title: "Cool bro" },
          internal: null,
          excerpt: null,
          children: null,
          id: null,
          fields: { slug: "/hello-world" }
        }}
      />
    )

    const postHeader = container.querySelector("h2")
    expect(postHeader.textContent).toBe("Cool bro")
  })

  test("should render a post preview, which contains anchor tag which points to full blogpost", () => {
    const { container } = render(
      <BlogPostPreview
        thumbnail={{}}
        post={{
          frontmatter: { title: "Cool bro" },
          internal: null,
          excerpt: null,
          children: null,
          id: null,
          fields: { slug: "/hello-world" }
        }}
      />
    )

    const ReadMoreButton = container.querySelector("a")
    expect(ReadMoreButton).toHaveAttribute("href", createPostPath("/hello-world"))
  })
})
