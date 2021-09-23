const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // query content for WordPress posts
  const {
    data: {
      allWpPage: { nodes: allPosts },
    },
  } = await graphql(`
  query MyQuery {
  allWpPage {
    nodes {
        id
        uri
        title
        content
        elementorCss
        sitestyles
    }
  }
}
  `)

  const postTemplate = path.resolve(`./src/templates/post.js`)

  allPosts.forEach(post => {
    createPage({
      // will be the url for the page
      path: post.uri,
      // specify the component template of your choice
      component: slash(postTemplate),
      // In the ^template's GraphQL query, 'id' will be available
      // as a GraphQL variable to query for this post's data.
      context: {
        id: post.id,
        title: post.title,
        content: post.content,
        elementorCss: post.elementorCss,
        sitestyles: post.sitestyles
      },
    })
  })
}