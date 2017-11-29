import React from 'react'
import styled from 'styled-components'

const List = styled.ul`
  display: flex;
  margin: 0;
`

const Right = styled(List)`
  List-style: none;
  text-align: right;
  li {
    margin-left: 2em;
  }
`

const Left = styled(List)`
  List-style: none;
  text-align: left;
  li {
    margin-right: 2em;
  }
`

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 1px;
  padding: 2em;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100vw;
`

const Li = styled.li`
  text-transform: uppercase;
`

const Header = () => (
  <Nav>
    <Left>
      <Li>Nous suivre</Li>
      <Li>Nous contacter</Li>
    </Left>

    <Right>
      <Li>Ecoutez la fiction</Li>
      <Li>Le projet</Li>
      <Li>Laurent Galandon</Li>
      <Li>La radio</Li>
      <Li>Les acteurs</Li>
      <Li>les Partenaires</Li>
    </Right>
  </Nav>
)

export default Header
