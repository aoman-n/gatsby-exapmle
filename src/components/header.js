import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'

const Header = ({ siteTitle }) => (
  <Container>
    <Title>
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        {siteTitle}
      </Link>
    </Title>
  </Container>
)

const Container = styled.header`
  /* background-image: linear-gradient(-90deg, #52EBFF, #1873BF); */
  height: 30vh;
  background: #2980B9;
  background: -webkit-linear-gradient(to right, #FFFFFF, #6DD5FA, #2980B9);
  background: linear-gradient(to left, #FFFFFF, #6DD5FA, #2980B9);
  margin-bottom: 1.45rem;
`
const Title = styled.h1`
  height: 100%;
  line-height: 30vh;
  margin: 0 auto;
  max-width: 960px;
  padding: 0 1.0875rem;
`

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
