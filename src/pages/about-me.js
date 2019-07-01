import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

const AboutMe = () => (
  <Layout>
    <SEO title="About" />
    <h1>Hi, I'm Lorrenz</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutMe
