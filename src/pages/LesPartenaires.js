import React from 'react'
import styled from 'styled-components'

import Resonance from './resonance.png'
import RadioMega from './radio-mega.png'
import OuiDire from './ouidire.png'

const Div = styled.div`
  padding: 2em;
  display: flex;
  justify-content: center;
`

const Img = styled.img`
  height: 75px;
  margin: 0 50px;
  width: auto;
`

const LesPartenaires = () => (
  <Div>
    <Img src={Resonance} alt="Resonance media" />
    <Img src={RadioMega} alt="Radio mega" />
    <Img src={OuiDire} alt="Oui dire" />
  </Div>
)

export default LesPartenaires
