import React from "react"
import { Link, graphql } from "gatsby"
import styled from 'styled-components'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Title>Gatsbyでblogを作るための一歩</Title>
      <ListTitle>work list</ListTitle>
      <ListItem>
        {data.allWorksYaml.edges.map(edge => {
          const work = edge.node
          return (
            <StyledLink to={`/works/${work.slug}`}>
              {work.title} - {work.category} - {work.year}
            </StyledLink>
          )
        })}
      </ListItem>
      <ImageFrame><Image /></ImageFrame>
      {/* <Link to="/page-2/">Go to page 2</Link> */}
      <Link to="/about/">Go to About</Link>
    </Layout>
  )
}

const Title = styled.h1`
  font-size: 1.8rem;
  color: gray;
`
const ListTitle = styled.div`
`
const ListItem = styled.div`
  margin-bottom: 10px;
`
const StyledLink = styled(Link)`
  display: block;
`
const ImageFrame = styled.div`
  max-width: 150px;
  margin-top: 1.45rem;
  margin-bottom: 1.45rem;
`

export const query = graphql`
  {
    allWorksYaml {
      edges {
        node {
          title
          category
          year
          slug
        }
      }
    }
  }
`

export default IndexPage
