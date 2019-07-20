import React from "react"
import { render } from "@testing-library/react"
import Index from "../pages"

describe("Index", () => {
  test("should render Index componentx", () => {
    const { container } = render(<Index />)
    expect(container.textContent).toContain("Hello World")
  })
})
