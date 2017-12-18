import React from 'react'
import styled from 'styled-components'

import Section from '../components/Section'

const data = [
  {
    name: 'name',
    role: 'role',
  },
  {
    name: 'name',
    role: 'role',
  },
  {
    name: 'name',
    role: 'role',
  },
  {
    name: 'name',
    role: 'role',
  }
]

const Acteur = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: .5em;
  align-items: center;
  width: 100%/${props => props.width};
`

const Name = styled.h3`
  text-transform: uppercase;
  margin-bottom: 0.5rem;
  text-align: center;
`

const P = styled.p`
`

const Acteurs = styled.div`
  display: flex;
`

const LesActeurs = () => (
  <Section
    title="Les acteurs"
    background="white"
    id="les-acteurs"
  >
    <Acteurs>
      {data.map(({ name, role }) =>
        <Acteur width={data.length}>
          <Name>{name}</Name>
          <P>{role}</P>
        </Acteur>
      )}
    </Acteurs>
  </Section>
)

export default LesActeurs
