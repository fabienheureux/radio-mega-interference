import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${props => props.image ? `
    background: url(${props.image}) no-repeat;
    background-size: cover;
  ` : null}
  ${props => props.color ? `
    background-color: ${props.color}
  ` : null}
`

const Section = ({
  children,
  color,
  image,
  title,
}) => (
  <Wrapper image={image} color={color}>
    <h2>{title}</h2>
    {children}
  </Wrapper>
)

export default Section
