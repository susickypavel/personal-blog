import React from "react"
import { render, cleanup } from "@testing-library/react"
import BlogPostTemplate from "../BlogPost"
import { useStaticQuery } from "gatsby"

afterEach(cleanup)
jest.mock("gatsby")

const mockedUseStaticQuery = useStaticQuery as jest.Mock

const responseValues = {
  site: {
    siteMetadata: {
      description: "TEST",
      twitter: "TEST"
    }
  }
}

mockedUseStaticQuery.mockImplementation(() => responseValues)

describe("Blog Post Template component", () => {
  test("should render blog post template with h1 headline correctly", () => {
    const { getByText } = render(
      <BlogPostTemplate
        pageContext={{
          node: {
            frontmatter: { title: "TEST", uploadDate: "2019-1-1" },
            html: "<h1>Hello World</h1>",
            id: null,
            excerpt: null,
            children: null,
            internal: null
          }
        }}
      />
    )

    expect(getByText("TEST")).toBeDefined()
  })

  test("should render blog post template with upload date correctly", () => {
    const { getByText } = render(
      <BlogPostTemplate
        pageContext={{
          node: {
            frontmatter: { title: "TEST", uploadDate: "2019-1-1" },
            html: "<h1>Hello World</h1>",
            id: null,
            excerpt: null,
            children: null,
            internal: null
          }
        }}
      />
    )

    expect(getByText("1/1/2019")).toBeDefined()
  })

  test("should render blog post template with post's body correctly", () => {
    const { getByText } = render(
      <BlogPostTemplate
        pageContext={{
          node: {
            frontmatter: { title: "TEST", uploadDate: "2019-1-1" },
            html: "<h1>Hello World</h1>",
            id: null,
            excerpt: null,
            children: null,
            internal: null
          }
        }}
      />
    )

    expect(getByText("Hello World")).toBeDefined()
  })
})
