import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import Section from '../components/Section'
import Player from '../components/Player'
import Slider from '../components/Slider'
import Cover from './cover.png'

const Div = styled.div`
  height: 100vh;
`

const H1 = styled.h1`
  margin: 0;
  font-weight: 900;
  color: #b6c135;
  text-transform: uppercase;
  font-size: 100px;
  text-shadow: 0em 0em 10px rgba(0,0,0,0.2)
`

const IndexPage = () => (
  <div>
    <Section image={Cover}>
      <H1>
          Interferences
      </H1>
      <p>Welcome to your new Gatsby site.</p>
    </Section>

    <Section>
      <Slider />
    </Section>

    <Section>
      <Player />
    </Section>

    <Section
      title="Laurent Galandon"
      color="#de721e"
    />

    <Section
      title="La radio"
    />

    <Section
      title="Les acteurs"
      color="#de721e"
    />

    <Section
      title="Les partenaires"
    />
  </div>
)

export default IndexPage
