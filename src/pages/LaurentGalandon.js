import React from 'react'
import styled from 'styled-components'
import Section from '../components/Section'

import Portrait from './laurent-galandon.jpg'

const Img = styled.img`
  display: block;
  border-radius: 2px;
  width: 50vw;
  height: auto;
  max-width: 260px;
  box-shadow: 0 0 30px rgba(0,0,0,.2);
`

const Div = styled.div`
  display: flex;
`

const P = styled.p`
  padding-left: 1em;
`

const LaurentGalandon = () => (
  <Section
    title="Laurent Galandon"
    background="rebeccaPurple"
    id="laurent-galandon"
    color="#fafafa"
    align="left"
  >
    <Div>
      <Img src={Portrait} alt="Laurent Galandon" />
      <P>
        Ut dapibus ligula eget facilisis efficitur. Morbi dolor est, suscipit at neque quis, cursus fermentum urna. In bibendum eu tellus quis bibendum. Sed accumsan massa vel lectus consectetur, vel blandit massa convallis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam sodales est lectus. Pellentesque scelerisque sodales eros, vel porttitor ex. Vivamus eu lectus sem. In suscipit nibh non metus lacinia, nec gravida nibh placerat. Nam nec venenatis lorem. Morbi arcu orci, scelerisque sed bibendum quis, dictum vitae massa. Morbi pulvinar laoreet nulla.
      </P>
    </Div>
	</Section>
)

export default LaurentGalandon
