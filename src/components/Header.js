import React, { Component } from 'react'
import styled from 'styled-components'

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/fontawesome-free-brands'

import Player from './Player'

import withScroll from '../utils/withScroll'

const List = styled.ul`
  display: flex;
  margin: 0;
`

const Right = styled(List)`
  List-style: none;
  text-align: right;
  li {
    margin-left: 30px;
  }
`

const Left = styled(List)`
  List-style: none;
  text-align: left;
  li {
    margin-right: 20px;
  }
`

const Nav = styled.nav`
  display: flex;
  color: white;
  justify-content: space-between;
  font-size: 15px;
  font-weight: 300;
  letter-spacing: 1px;
  padding: 2em;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0px;
  right: 0px;
  background: rgb(179, 75, 36);
`

const Li = styled.li`
  text-transform: lowercase;
  margin-bottom: 0;
`

const A = styled.a`
  color: #fafafa;
  text-decoration: none;
  border-bottom: 2px solid transparent;
  padding-bottom: 5px;
  transition: all ease .3s;
  &:hover {
    border-color: #fafafa;
    padding-bottom: 2px;
  }
`

@withScroll
class Header extends Component {
  render() {
    const { scrollPosition } = this.props
    return(
      <Nav>
        <Player />
        <Right>
          <Li>
            <A href="le-projet" title="Le projet">
              Le projet
            </A>
          </Li>
          <Li>
            <A href="laurent-galandon" title="Laurent Galandon">
              Laurent Galandon
            </A>
          </Li>
          <Li>
            <A href="la-radio" title="La radio">
              La radio
            </A>
          </Li>
          <Li>
            <A href="les-acteurs" title="Les acteurs">
              Les acteurs
            </A>
          </Li>
          <Li>
            <A href="les-partenaires" title="Les partenaires">
              les Partenaires
            </A>
          </Li>
          <Li><FontAwesomeIcon icon={faFacebook} /></Li>
        </Right>
      </Nav>
    )
  }
}

export default Header
