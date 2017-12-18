import React from 'react'
import styled from 'styled-components'
import Section from '../components/Section'

import Portrait from './laurent-galandon.jpg'

const Img = styled.img`
  display: block;
  border-radius: 2px;
  width: 50vw;
  height: auto;
  max-width: 260px;
  box-shadow: 0 0 30px rgba(0,0,0,.2);
  float: left;
  margin-right: 10px;
`

const Div = styled.div`
  display: block;
`

const P = styled.p`
  padding-left: 1em;
`

const LaurentGalandon = () => (
  <Section
    title="Laurent Galandon"
    background="rgb(179, 75, 36)"
    id="laurent-galandon"
    color="#fafafa"
    align="left"
  >
    <Div>
      <Img src={Portrait} alt="Laurent Galandon" />
      <P>
        Né le 16 mars 1970 à Issy-les-Moulineaux, Laurent Galandon a grandi dans la banlieue parisienne et vit maintenant en Ardèche. Adolescent, il se passionne pour les combats contre les trolls et autres créatures cthulhiennes, et il invente des histoires pour ses partenaires de jeux de rôle. Adulte, il s'installe à Paris et se consacre à la photographie. En 1996, il prend la direction d'un cinéma d'art et d'essai à Trappes, la ville de Jamel Debouzze, et y rencontre des comédiens, des scénaristes et des cinéastes qui attisent son goût pour l'écriture. En 2006, associé au dessinateur Arno Monin, il publie chez Bamboo Édition (collection Angle de Vue) le tome 1 de sa série « L'Envolée sauvage ». Ce premier album se verra décerner le Prix du public à Roans et le Prix Conseil Général BD Boum à Blois en 2007, puis le Prix des collégiens à Angoulême en 2008. Le tome 2 est « nominé » parmi les «Essentiels Jeunesse» d'Angoulême 2009. Chez Bamboo encore, il a cosigné le diptyque « Gemelos » avec Michele Benevento au dessin. En 2009, il sort chez Dargaud (collection Long Courrier) l'album « Quand souffle le vent » mis en images par Cyril Bonin. En 2014, il signe un bd/reportage avec Damien Vidal "Lip". Le duo revient en 2016 avec l'album "Le Contrepied de Foé" .
        <br />
        <a href="HTTP://WORKINPROGRESSLG.BLOGSPOT.FR" title="le blog de Laurent">LE BLOG DE LAURENT</a>
      </P>
    </Div>
	</Section>
)

export default LaurentGalandon
