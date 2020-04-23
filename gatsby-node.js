const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

// create new field for the slug
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({
      node,
      getNode,
      basePath: `content`
    })

    createNodeField({
      node,
      name: `slug`,
      value: slug
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const content = await graphql(`
    {
      posts: allMarkdownRemark( 
        filter: {frontmatter: {type: {eq: "post"}, published: {eq: true}}}
        sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            frontmatter {
              published
            }
            fields {
              slug
            }
          }
        }
      }

      pages: allMarkdownRemark( filter: { frontmatter: { type: { eq: "page" }}} ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  if (content.error) return;

  const allPosts = content.data.posts.edges;
  const allPages = content.data.pages.edges;

  // create post pages
  allPosts.forEach(({ node }, index) => {

    const next = index === allPosts.length - 1 ? null : allPosts[index + 1].node
    const previous = index === 0 ? null : allPosts[index - 1].node

    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/Post.js`),
      context: {
        slug: node.fields.slug,
        previous,
        next,
      }
    })
  })

  // create pages (about, contact)
  allPages.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/Page.js`),
      context: {
        slug: node.fields.slug
      }
    })
  })

  // create home pages with pagination
  const postsPerPage = 5;
  const numPages = Math.ceil(allPosts.length / postsPerPage);

  Array.from({ length: numPages }).forEach((_, pageIndex) => {
    createPage({
      path: pageIndex === 0 ? `/` : `/${pageIndex + 1}`,
      component: path.resolve(`./src/templates/Home.js`),
      context: {
        limit: postsPerPage,
        skip: pageIndex * postsPerPage,
        numPages,
        currentPage: pageIndex + 1
      }
    })
  })
}

// absolute imports
exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"]
    }
  })
}
