import React, { Component } from 'react'
import styled from 'styled-components'
import Scrollchor from 'react-scrollchor'

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
  @media (max-width:800px) {
    display: none;
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
  padding: 20px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0px;
  right: 0px;
  background: rgb(179, 75, 36);
  @media (max-width: 1075px) {
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
`

const Li = styled.li`
  text-transform: lowercase;
  margin-bottom: 0;

  a {
    color: #fafafa;
    text-decoration: none;
    border-bottom: 2px solid transparent;
    padding-bottom: 5px;
    transition: all ease .3s;
    &:hover {
      border-color: #fafafa;
      padding-bottom: 2px;
    }
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
            <Scrollchor to="#le-projet" title="Le projet">
              Le projet
            </Scrollchor>
          </Li>
          <Li>
            <Scrollchor to="#laurent-galandon" title="Laurent Galandon">
              Laurent Galandon
            </Scrollchor>
          </Li>
          <Li>
            <Scrollchor to="#la-radio" title="La radio">
              La radio
            </Scrollchor>
          </Li>
          <Li>
            <Scrollchor to="#photos" title="Photos">
              Photos
            </Scrollchor>
          </Li>
          <Li>
            <Scrollchor to="#les-acteurs" title="Les acteurs">
              Les acteurs
            </Scrollchor>
          </Li>
          <Li>
            <Scrollchor to="#les-partenaires" title="Les partenaires">
              les Partenaires
            </Scrollchor>
          </Li>
          <Li>
            <Scrollchor to="#a-propos" title="A propos">
              à propos
            </Scrollchor>
          </Li>
          <Li><FontAwesomeIcon icon={faFacebook} /></Li>
        </Right>
      </Nav>
    )
  }
}

export default Header
