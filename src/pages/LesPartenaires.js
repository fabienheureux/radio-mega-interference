import React from 'react'
import styled from 'styled-components'

import Resonance from './resonance.png'
import RadioMega from './radio-mega.png'
import OuiDire from './ouidire.png'
import Lezarts from './lezarts.png'
import Dargaud from './dargaud.png'

const Div = styled.div`
  padding: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
  &.primary img {
    height: 150px;
  }
  &.secondary img {
    height: 40px;
  }
`

const Img = styled.img`
  margin: 0 50px;
  width: auto;
  opacity: 0.8;
  transition: all ease .3s;
  &:hover {
    opacity: 1;
  }
`
const DargaudImg = styled.img`
  width: 200px !important;
  height: calc(200px / 6.8260869565) !important;
`

const LesPartenaires = () => (
  <div id="les-partenaires">
    <Div className="primary">
      <a href="https://www.radio-mega.com/" target="_blank" title="Radio mega">
        <Img src={RadioMega} alt="Radio mega" />
      </a>
      <a href="http://www.dargaud.com/" title="Dargaud" target="_blank">
        <DargaudImg src={Dargaud} alt="Dargaud" />
      </a>
    </Div>
    <Div className="secondary">
      <a href="http://resonancemedia.fr/" title="Resonance media" target="_blank">
        <Img src={Resonance} alt="Resonance media" />
      </a>
      <a href="https://www.lezarts-cafe.com/" title="Lezarts cafe" target="_blank">
        <Img src={Lezarts} alt="Lez'arts" />
      </a>
      <a href="http://www.oui-dire-editions.fr/" title="Oui dire editions" target="_blank">
        <Img src={OuiDire} alt="Oui dire" />
      </a>
    </Div>
  </div>
)

export default LesPartenaires
