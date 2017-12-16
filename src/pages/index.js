import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
// import { Wave } from 'balekomponents'

import Section from '../components/Section'
import Slider from '../components/Slider'
import Cover from './cover.png'

import LaurentGalandon from './LaurentGalandon'
import LaRadio from './LaRadio'
import LeProjet from './LeProjet'
import LesActeurs from './LesActeurs'
import LesPartenaires from './LesPartenaires'
import LaFiction from './LaFiction'

const Div = styled.div`
  height: 100vh;
`

const H1 = styled.h1`
  margin: 0;
  font-weight: 900;
  color: #b6c135;
  font-size: 150px;
  text-shadow: 0em 0em 10px rgba(0,0,0,0.2);
  font-family: Cyclone;
`

const IndexPage = () => (
  <div>
    <Section>
      <H1>
        Interferences
      </H1>
    </Section>

    <LaFiction />
    <LeProjet />
    <LaurentGalandon />
    <LaRadio />
    <LesActeurs />
    <LesPartenaires />
  </div>
)

export default IndexPage
