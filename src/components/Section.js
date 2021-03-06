import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  a {
    color: white;
  }

  p {
    font-size: 18px;
    font-weight: lighter;
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
  max-width: 880px;
  height: 100vh;
  min-height: 660px;
  max-height: 880px;
  margin: 0 auto;
  width: 100%;
  flex-direction: column;
  padding: 1em 2em;
  align-items: ${props => props.align ? props.align : 'center'};
  display: ${props => props.display ? props.display : 'flex'};
  justify-content: center;
  @media (max-width: 800px) {
    height: auto;
    max-height: none;
  }
`

const Section = ({
  align,
  background,
  children,
  color,
  display,
  id,
  image,
  title,
}) => (
  <Wrapper
    align={align}
    background={background}
    color={color}
    id={id}
    image={image}
    title={title}
  >
    <Inner
      align={align}
      display={display}
    >
      {title && <h2>{title}</h2>}
      {children}
    </Inner>
  </Wrapper>
)

export default Section
