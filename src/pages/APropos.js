import React from 'react'
import styled from 'styled-components'

import Section from '../components/Section'

const P = styled.p`
  column-count: 2;
  @media (max-width: 800px) {
    column-count: 1;
  }
`

const APropos = () => (
  <Section
    title="A propos"
    background="white"
    id="a-propos"
  >
    <P>
			« Interférences » la pièce radiophonique est une adaptation radio de la bande déssinée. Piloté par le scénariste Laurent Galandon et confié au bon soin d’une radio associative, Radio Méga basée à Valence et qui émet depuis plus de 35 ans. L’enregistrement de cette pièce radiophonique a rassemblé plus d’une quinzaine d’acteurs et s’est enregistré dans de nombreux lieux à Valence.

			une fiction de Laurent Galandon,
			mise en scène Ingrid Lebrasseur,
			Mixage -Réalisation Raphaël Terribile,
			prise de sons, Nicolas Crouan Raphaël Terribile,
			Chargé de production, Julien Marty, Eric Baral
			Une production Dargaud - Radio Méga.

			pour toutes demandes de diffusions et d’interviews : raphael.terribile@radio-mega.com
    </P>
  </Section>
)

export default APropos
