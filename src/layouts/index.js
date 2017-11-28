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

const TemplateWrapper = ({ children }) => (
  <div>
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
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
