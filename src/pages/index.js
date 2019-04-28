import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      {data.allWorksYaml.edges.map(edge => {
        const work = edge.node
        return (
          <div  key={work.title}> {work.title} - {work.category} - {work.year} </div>
        )
      })}
      {/* <Link to="/page-2/">Go to page 2</Link> */}
      <Link to="/about/">Go to About</Link>
    </Layout>
  )
}

export const query = graphql`
  {
    allWorksYaml {
      edges {
        node {
          title
          category
          year
        }
      }
    }
  }
`

export default IndexPage
