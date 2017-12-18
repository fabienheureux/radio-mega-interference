import React from 'react'
import styled from 'styled-components'

import Section from '../components/Section'

import RadioMegaLogo from './radio-mega.png'

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
        Les radios libres ont plus de trente ans. Depuis 1981, l’accès aux médias radiophoniques s’est démocratisé. Média de communication sociale de proximité de l’agglomération Valentinoise, Radio Méga promeut l’information locale, l’expression et la pratique de la radiodiffusion par tous et pour tous.
      </P>
    </Div>
  </Section>
)

export default LaRadio
