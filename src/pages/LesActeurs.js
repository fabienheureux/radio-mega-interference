import React from 'react'
import styled from 'styled-components'

import Section from '../components/Section'

import ActeurPic from './acteur.jpg'

const data = [
  {
    name: 'name',
    description: 'n semper turpis vel cursus luctus. Suspendisse tincidunt egestas quam, eget sodales felis faucibus scelerisque. Suspendisse pulvinar accumsan ',
    image: ActeurPic,
  },
  {
    name: 'name',
    description: 'n semper turpis vel cursus luctus. Suspendisse tincidunt egestas quam, eget sodales felis faucibus scelerisque. Suspendisse pulvinar accumsan ',
    image: ActeurPic,
  },
  {
    name: 'name',
    description: 'n semper turpis vel cursus luctus. Suspendisse tincidunt egestas quam, eget sodales felis faucibus scelerisque. Suspendisse pulvinar accumsan ',
    image: ActeurPic,
  },
  {
    name: 'name',
    description: 'n semper turpis vel cursus luctus. Suspendisse tincidunt egestas quam, eget sodales felis faucibus scelerisque. Suspendisse pulvinar accumsan ',
    image: ActeurPic,
  }
]

const Img = styled.img`
  border-radius: 50%;
`

const Acteur = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: .5em;
  width: 100%/${props => props.width};
`

const Name = styled.h3`
  text-transform: uppercase;
  margin-bottom: 0.5rem;
`

const Acteurs = styled.div`
  display: flex;
`

const LesActeurs = () => (
  <Section
    title="Les acteurs"
    background="white"
    id="les-acteurs"
    align="left"
  >
    <Acteurs>
      {data.map(({ name, description, image }) =>
        <Acteur width={data.length}>
          <Name>{name}</Name>
          <img src={image} alt={name} />
          <p>{description}</p>
        </Acteur>
      )}
    </Acteurs>
  </Section>
)

export default LesActeurs
