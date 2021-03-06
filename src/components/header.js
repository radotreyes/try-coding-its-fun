import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import Nav from './nav'
import logo from '../static/images/logo.svg'
import headerBg from '../static/images/header-bg.svg'

const animation = {
  transition: `.15s`,
  timing: `cubic-bezier(.15, .38, .91, .71)`,
}

const HeaderWrapper = styled.div`
  position: relative;
  background-image: url(${props => props.image});
  background-attachment: fixed;
  height: height: calc(175px + 10vh);
  margin-bottom: 3rem;
  transition: ${animation.transition};
  transition-timing-function: ${animation.timing};
  width: 100%;  
  @media (max-width: 960px) {
    background-attachment: scroll;
  }
`
const HeaderContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  max-width: 960px;
  padding: calc(2rem + 4vh) 1.0875rem;
  transition: ${animation.transition};
  transition-timing-function: ${animation.timing};
  z-index: 2;
  img {
    height: calc(75px + 2vh);
    margin-bottom: 0.5rem !important;
    transition: 0.5s;
    transition-timing-function: cubic-bezier(0.2, 0.4, 0.55, 0.1);
    &:hover {
      transform: translateY(-5px);
    }
  }
`
const Header = props => (
  <HeaderWrapper image={headerBg}>
    <HeaderContainer>
      <Link to="/">
        <img src={logo} alt="Try Coding, It's Fun" />
      </Link>
      {props.visible ? <Nav headerVisible /> : null}
    </HeaderContainer>
  </HeaderWrapper>
)
Header.propTypes = {
  visible: PropTypes.bool.isRequired,
}
export default Header
