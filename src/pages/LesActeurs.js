import React from 'react'
import styled from 'styled-components'

import Section from '../components/Section'

const data = [
	{
		role: 'PABLO',
		name: 'David CHION'
	},
	{
		role: 'ALBAN',
		name: 'Pascal GUERIN'
	},
	{
		role: "L'ANGLAISE",
		name: 'Alison CARTER',
	},
	{
		role: 'LE PERE',
		name: 'Eric BARAL',
	},
	{
		role: 'LA MERE',
		name: 'Helene CRUZ',
	},
	{
		role: 'DOUGLAS',
		name: 'Jim PAYNE',
	},
	{
		role: 'UNE ETUDIANTE',
		name: 'Julie CHOQUET',
	},
	{
		role: 'CHLOE',
		name: 'Ingrid Lebrasseur',
	},
	{
		role: 'ANNA',
		name: 'Muriel LAVAL',
	},
	{
		role: 'ROBERT',
		name: 'Philippe NADAL',
	},
	{
		role: 'BRIGITTE',
		name: 'Sylvie MABILON',
	},
	{
		role: 'ALAIN',
		name: 'Raphael TERRIBILE',
	},
	{
		role: 'MOHAMED',
		name: 'Rabah Nouara',
	},
	{
		role: 'UN POLICIER',
		name: 'Laurent GALANDON',
	},
	{
		role: 'DUBREUIL',
		name: 'Nicolas CROUAN',
	},
	{
		role: 'LE DETENU',
		name: 'Serge BAYO',
	},
	{
		role: 'PATRICK',
		name:'Bastien ENARD'
	}
]

const Acteur = styled.div`
  display: flex;
  flex-direction: row;
	p {
		margin-bottom: 0;
	}
`

const Name = styled.p`
	margin-left: 5px;
`

const P = styled.p`
`

const Acteurs = styled.div`
	column-count: 2;
  @media (max-width: 800px) {
    column-count: 1;
  }
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
          <P>{role}</P>: <Name>{name}</Name>
        </Acteur>
      )}
    </Acteurs>
  </Section>
)

export default LesActeurs
