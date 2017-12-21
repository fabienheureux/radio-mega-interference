import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Helmet from 'react-helmet'

import Header from '../components/Header'

import './index.css'

const Content = styled.div`
  margin: '0 auto';
  max-width: 960;
  padding: '0px 1.0875rem 1.45rem';
`

const Main = styled.main`
  padding: 30 0 200px 0;
  background: rgb(179, 75, 36);
`

const TemplateWrapper = ({ children }) => (
  <Main>
    <Helmet
      title="Interferences"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <Content>
      {children()}
    </Content>
  </Main>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
