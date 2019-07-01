import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import BlogPost from '../components/blog/blog';

const BlogList = () => (
  <Layout>
    <SEO title="Blog" />
    <h1>Blog</h1>
    <BlogPost articleTitle="Test" articleBody="Testing 123" articleImage="https://cdn-images-1.medium.com/max/1600/1*-sFIhipYYliSoUsM7lmF9g.jpeg" datePosted="07/01/19" ></BlogPost>
  </Layout>
)

export default BlogList
