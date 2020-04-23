import React from "react"
import { graphql } from "gatsby"

import Layout from "components/Layout"
import Image from "components/Image"
import SEO from "components/SEO"
import PostNavigation from "../components/PostNavigation"

const Post = (props) => {
  const post = props.data.markdownRemark
  const { previous, next } = props.pageContext;

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <Image fluid={post.frontmatter.image.childImageSharp.fluid} />
      <main>
        <h2>{post.frontmatter.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <PostNavigation previousPage={previous} nextPage={next} />
      </main>
    </Layout>
  )
}

export default Post

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } } ) {
      html
      frontmatter {
        title
        date
        image {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
