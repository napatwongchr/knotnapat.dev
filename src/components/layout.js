import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(0.5),
          margin: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )
  }
  return (
    <div
      style={{
        padding: "20px",
        color: "white",
        backgroundColor: "#0f4c75",
      }}
    >
      <header>{header}</header>
    </div>
    // <div
    //   style={{
    //     marginLeft: `auto`,
    //     marginRight: `auto`,
    //     maxWidth: rhythm(24),
    //     padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
    //   }}
    // >
    //   <header>{header}</header>
    //   <main>{children}</main>
    //   <footer>
    //     <a href="https://github.com/napatwongchr">Github</a>{" "}
    //     <a href="https://twitter.com/knotnapat_">Twitter</a>
    //   </footer>
    // </div>
  )
}

export default Layout
