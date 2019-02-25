import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <div>
    <Layout>
    <SEO title="Home" description="this is my first gatsby site" keywords={[`gatsby`, `application`, `react`, `gatsby keywords`, `portfolio`]} />
    <h1>Welcome to my porfolio</h1>
    <a href="https://github.com/hingham?tab=repositories"> <p>Github </p></a>
    <a href="https://www.linkedin.com/in/hannah-ingham/"> <p>LinkedIn</p></a>

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/counter/">Go to counter</Link>
    </Layout>
    </div>
)

export default IndexPage
