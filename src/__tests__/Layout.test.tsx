import React from "react"
import { render } from "@testing-library/react"

import Layout from "@components/Layout"

describe("Layout", () => {
  test("Should render Layout's component children", () => {
    const { getByTestId } = render(
      <Layout>
        <h1 data-testid="children">Hello World</h1>
      </Layout>
    )
    expect(getByTestId("children")).toBeDefined()
  })
})
