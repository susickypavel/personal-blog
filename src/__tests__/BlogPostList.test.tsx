import React from "react"
import { render } from "@testing-library/react"
import BlogPostList from "../components/Index/BlogPostList"
import { useStaticQuery } from "gatsby"

jest.mock("gatsby")

const mockedUseStaticQuery = useStaticQuery as jest.Mock

const responseValues = {
  allMarkdownRemark: {
    edges: [
      {
        node: {
          frontmatter: {
            title: "Cool bro"
          }
        }
      }
    ]
  }
}

mockedUseStaticQuery.mockImplementationOnce(() => responseValues)

describe("BlogPostList", () => {
  test("should render a post preview, which contains header with returned title", () => {
    const { container } = render(<BlogPostList />)

    const postHeader = container.querySelector("h2")
    expect(postHeader.textContent).toBe("Cool bro")
  })
})
