import React from 'react'
import styled from 'styled-components'

import Section from '../components/Section'

import RadioMegaLogo from './radio-mega-logo.png'

const Div = styled.div`
  display: flex;
`

const P = styled.p`
  padding-left: 1em;
`

const Img = styled.img`
  filter: invert(1);
`

const LaRadio = () => (
  <Section
    title="La radio"
    background="black"
    color="white"
    align="right"
    id="la-radio"
  >
    <Div>

      <Img src={RadioMegaLogo} alt="Radio Mega Logo" />
      <P>
        Ut dapibus ligula eget facilisis efficitur. Morbi dolor est, suscipit at neque quis, cursus fermentum urna. In bibendum eu tellus quis bibendum. Sed accumsan massa vel lectus consectetur, vel blandit massa convallis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam sodales est lectus. Pellentesque scelerisque sodales eros, vel porttitor ex. Vivamus eu lectus sem. In suscipit nibh non metus lacinia, nec gravida nibh placerat. Nam nec venenatis lorem. Morbi arcu orci, scelerisque sed bibendum quis, dictum vitae massa. Morbi pulvinar laoreet nulla.
      </P>
    </Div>
  </Section>
)

export default LaRadio
