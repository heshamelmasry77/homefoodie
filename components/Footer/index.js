import React from 'react'
// import Link from 'next/link'
import styled from 'styled-components'

const Wrapper = styled.nav`
  padding: 15px;
  border-bottom: 1px solid #ddd;
  display: flex;
  background: #000000;

  a {
    padding: 0 15px;
    color: #FFF;
  }
  .footer {
  }
`

const Nav = () => (
  <Wrapper>
    <div className='footer' />
  </Wrapper>
)

export default Nav
