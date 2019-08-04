import React from "react"
import { useStaticQuery } from "gatsby"
import { render } from "@testing-library/react"

import Layout from "@components/Layout"

jest.mock("gatsby")

const mockedUseStaticQuery = useStaticQuery as jest.Mock

const responseValues = {
  site: {
    siteMetadata: {
      description: "Testcription",
      title: "Titletion"
    }
  }
}

mockedUseStaticQuery.mockImplementationOnce(() => responseValues)

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
