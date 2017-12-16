import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
// import { Wave } from 'balekomponents'

import Section from '../components/Section'
import Slider from '../components/Slider'
import Cover from './cover.png'
import Titre from './titre.png'

import LaurentGalandon from './LaurentGalandon'
import LaRadio from './LaRadio'
import LeProjet from './LeProjet'
import LesActeurs from './LesActeurs'
import LesPartenaires from './LesPartenaires'
import LaFiction from './LaFiction'

const Div = styled.div`
`

const Img = styled.img`
  background: rgb(179, 75, 36);
  padding: 20px;
  width: 650px;
`

const H1 = styled.h1`
  margin: 0;
  font-weight: 900;
  color: #b6c135;
  font-size: 150px;
  text-shadow: 0em 0em 10px rgba(0,0,0,0.2);
  font-family: Cyclone;
  text-indent: -9999px;
`

const IndexPage = () => (
  <Div>
    <Section image={Cover}>
      <H1>
        Interferences
      </H1>
      <Img src={Titre} alt="Titre bd" />
    </Section>
    <LeProjet />
    <LaurentGalandon />
    <LaRadio />
    <LesActeurs />
    <LesPartenaires />
  </Div>
)

export default IndexPage
