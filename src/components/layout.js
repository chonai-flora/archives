import { Link } from "gatsby"
import * as React from "react"
import Helmet from "react-helmet"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  const header = isRootPath
    ? <>
      <h2 className="main-heading">
        <Link to="/">
          {title}
          <span style={{
            fontSize: "smaller",
            fontWeight: "lighter"
          }}> - chonai-flora</span>
        </Link>
      </h2>
      <br />
      <p>
        メモ以上ブログ以下の雑記です。
      </p>
    </>
    :
    <Link to="/" className="header-link-home" >
      {title}
    </Link>;
  
  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <Helmet>
          <script type="text/javascript" src="https://cdn.iframe.ly/embed.js" charset="utf-8"/>
      </Helmet>
      
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <hr />
      <footer style={{ textAlign: "center" }}>&copy; {new Date().getFullYear()}, Build with Gatsby </footer>
    </div>
  )
}

export default Layout
