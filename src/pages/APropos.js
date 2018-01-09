import React from 'react'
import styled from 'styled-components'

import Section from '../components/Section'

const P = styled.p`
  column-count: 2;
  @media (max-width: 800px) {
    column-count: 1;
  }
`
const Pp = styled.p`
  text-align: center;
  font-size: .9em;
  a {
    color: rgb(179, 75, 36);
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
		</P>
		<Pp>
      <br /><br />
			une fiction de Laurent Galandon,<br />
			mise en scène Ingrid Lebrasseur,<br />
			Mixage -Réalisation Raphaël Terribile,<br />
			prise de sons, Nicolas Crouan Raphaël Terribile,<br />
			Chargé de production, Julien Marty, Eric Baral<br />
			Une production Dargaud - Radio Méga.<br />

			pour toutes demandes de diffusions et d’interviews : <a href="mailto:raphael.terribile@radio-mega.com" title="Raphael Terribile email">raphael.terribile@radio-mega.com</a><br />
    </Pp>
  </Section>
)

export default APropos
