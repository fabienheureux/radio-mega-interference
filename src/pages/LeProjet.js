import React from 'react'
import styled from 'styled-components'

import Section from '../components/Section'

const P = styled.p`
  column-count: 2;
`

const LeProjet = () => (
    <Section
      title="Le projet"
      background="white"
      color="#e5763d"
      id="le-projet"
    >
      <P>
        Aenean lobortis velit eros, sit amet consectetur lectus bibendum sit amet. Curabitur ut vulputate est. Nam vel luctus leo. Nam sollicitudin volutpat mi, id tempor turpis bibendum vitae. Aliquam imperdiet quam sed justo interdum cursus. Sed eu nulla ipsum. Cras fermentum scelerisque eleifend. Ut feugiat ipsum ut eros lobortis, volutpat elementum nulla tempus. <br />
        Integer vel augue sed magna pulvinar maximus. Donec non laoreet massa, vel facilisis urna. Ut gravida risus sapien, sit amet euismod velit pulvinar at. Praesent varius lorem gravida maximus hendrerit. Etiam lacinia ligula ut est consequat auctor. Cras in vestibulum sapien, quis pretium arcu. In dignissim vestibulum nulla eu faucibus.
      </P>
    </Section>
)

export default LeProjet
