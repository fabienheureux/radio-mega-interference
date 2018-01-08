import React from 'react'
import styled from 'styled-components'

import Section from '../components/Section'

const P = styled.p`
  column-count: 2;
  @media (max-width: 800px) {
    column-count: 1;
  }
`

const LeProjet = () => (
    <Section
      title="Le projet"
      background="white"
      color="#e5763d"
      id="le-projet"
    >
      <P>
        Lorsqu’Alban et Pablo découvrent la célèbre Radio Caroline au début des années 1970, ils décident de partir à leur tour à l’assaut des ondes : ils créent Radio Nomade, leur radio pirate !
        <br />
        <br />
        Quand ils émettent, Pablo est Rackham et Alban, Teach. Le premier propose une programmation musicale alternative ; le second offre la parole aux « marginaux » ou aux exclus de la société. Comme nombre de leurs homologues radiolibristes, nos deux héros sont dans l’illégalité totale. Du brouillage des ondes aux mises sur écoute ; de réquisitions en interrogatoires musclés, l’État giscardien n’entend pas voir son monopole remis en question.  C’est le début d’un combat pour la liberté d’expression… Et comme tout combat, il n’est pas sans d’intimes dommages collatéraux.
        <br />
        <br />
        Aux côtés de Jeanne Puchol, Laurent Galandon nous présente Interférences, son nouveau docu-fiction dans la lignée de Lip, des héros ordinaires. Retour à la fin des années 1970, lorsque les radios libres se développent pour obtenir la liberté d’expression. Véritable leçon pour tous ceux qui considèrent ce droit et tant d’autres comme aujourd’hui bel et bien acquis.
      </P>
    </Section>
)

export default LeProjet
