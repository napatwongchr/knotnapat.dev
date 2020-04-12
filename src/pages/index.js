import React from "react"
import { graphql } from "gatsby"

import { Global, css } from "@emotion/core"
import { ThemeProvider, Flex, CSSReset } from "@chakra-ui/core"

import HeaderSection from "../components/header-section"

import customTheme from "../utils/theme"

const BlogIndex = ({ data, location }) => {
  return (
    <ThemeProvider theme={customTheme}>
      <Global
        styles={css`
          html {
            background-color: #fafafa;
          }
        `}
      />
      <CSSReset />
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100vh"
      >
        <HeaderSection />
      </Flex>
    </ThemeProvider>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
