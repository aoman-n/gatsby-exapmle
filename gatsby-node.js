const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allWorksYaml {
        edges {
          node {
            slug
          }
        }
      }
    }
  `).then(result => {
    // stringifyの引数はインデントを設定するもの
    console.log(JSON.stringify(result, null, 4))
    result.data.allWorksYaml.edges.map(edge => {
      const work = edge.node
      // ここで動的にページを生成
      createPage({
        // ページのパスを指定
        path: `/works/${work.slug}`,
        // ベースとなるコンポネントを指定
        component: path.resolve("./src/templates/work.js"),
        // このcontextの引数に与えた値が、コンポネントでのgraphQLの変数としてセットされる
        context: {
          slug: work.slug
        }
      })
    })
  })
}