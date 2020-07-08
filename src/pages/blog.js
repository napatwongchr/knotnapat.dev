import React from "react"
import { Global, css } from "@emotion/core"
import { ThemeProvider, Box } from "@chakra-ui/core"
import BlogSection from "../components/blog-section"
import customTheme from "../utils/theme"

const Blog = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <Box bg="">
        <Global
          styles={css`
            html {
              background-color: #fafafa;
            }
          `}
        />
        <BlogSection />
      </Box>
    </ThemeProvider>
  )
}

export default Blog
