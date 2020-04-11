import React from "react"
import { Link, graphql } from "gatsby"

import { Global, css } from "@emotion/core"
import { ThemeProvider, Flex, CSSReset } from "@chakra-ui/core"

import HeaderSection from "../components/header-section"
import BlogSection from "../components/blog-section"

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
        h="100%"
      >
        <HeaderSection />
        <BlogSection />
      </Flex>
    </ThemeProvider>
  )
  // return (
  //   <Layout location={location} title={siteTitle}>
  //     <SEO title="All posts" />
  //     {/* <Bio />
  //     {posts.map(({ node }) => {
  //       const title = node.frontmatter.title || node.fields.slug
  //       return (
  //         <article key={node.fields.slug}>
  //           <header>
  //             <h3
  //               style={{
  //                 marginBottom: rhythm(1 / 4),
  //               }}
  //             >
  //               <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
  //                 {title}
  //               </Link>
  //             </h3>
  //             <small>{node.frontmatter.date}</small>
  //           </header>
  //           <section>
  //             <p
  //               dangerouslySetInnerHTML={{
  //                 __html: node.frontmatter.description || node.excerpt,
  //               }}
  //             />
  //           </section>
  //         </article>
  //       )
  //     })} */}
  //   </Layout>
  // )
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
