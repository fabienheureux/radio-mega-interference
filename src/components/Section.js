import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  p {
    font-size: 14px;
    line-height: 1.5em;
    ${props => props.align ? `
      text-align: ${props.align};
    `: null}
  }

  ${props => props.image ? `
    background: url(${props.image}) no-repeat;
    background-size: cover;
  ` : null}

  ${props => props.background ? `
    background-color: ${props.background};
  ` : null
  }

  ${props => props.color ? `
    color: ${props.color};
  ` : null
  }

  h2 {
    ${props => props.color ? `
      color: ${props.color};
    ` : null }
    position: relative;
    margin-bottom: 1.25em;
    &:after {
      height: 4px;
      width: 50px;
      content: '';
      display: block;
      bottom: -15px;
      background: ${props => props.color ? `
        ${props.color}
      ` : `black`};
      position: absolute;
      margin: auto;
      ${props => props.align ?
          `
          ${props.align}: 0;
        ` : `
          left: 0;
          right: 0;
        `
      }
    }
  }
`

const Inner = styled.div`
  max-width: 960px;
  height: 100vh;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1em 2em;
  align-items: ${props => props.align ? props.align : 'center'};
  justify-content: center;
`

const Section = ({
  align,
  background,
  children,
  color,
  image,
  title,
}) => (
  <Wrapper
    align={align}
    background={background}
    color={color}
    image={image}
    title={title}
  >
    <Inner
      align={align}
    >
      {title && <h2>{title}</h2>}
      {children}
    </Inner>
  </Wrapper>
)

export default Section
