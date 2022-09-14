import React, { useEffect, useState } from 'react'
import styled, {css} from 'styled-components'
import logo from '../assets/shared/logo.svg'
import closeButton from '../assets/shared/icon-close.svg'
import menuButton from '../assets/shared/icon-hamburger.svg'
import { NavLink as Link } from 'react-router-dom'

const Navbar = () => {
  const [menu,setMenu] = useState(false)
  const openMenu = ()=>{
    if (menu === false){
      setMenu(true)
    } else{
      setMenu(false)
    }
  }
  const tabs = ['home','destination','crew','technology']

  return (
    <Container>
    <Nav>
      <Logo src={logo} alt="logo"/>
      <Hr/>
      <NavLinks>
      {tabs.map(tab => (
        <Link key={tab} to={`/${(tab!=='home')?tab:""}`}><span>{`0${tabs.indexOf(tab)}`}</span>{tab}</Link>
      ))}
      </NavLinks>
      {!menu && <Button src={menuButton} onClick={openMenu}/>}

    </Nav>
      {menu && 
      <Menu>
        <div><Button close src={closeButton} onClick={openMenu}/></div>
        <MenuLinks>
        {tabs.map(tab=>(
            <Link to={`/${(tab!=='home')?tab:""}`}><span>{`0${tabs.indexOf(tab)}`}</span>{tab}</Link>
        ))}
        </MenuLinks>
      </Menu>}
    </Container>
  )
}

export default Navbar

const Container = styled.div`
`

const Nav = styled.nav`
  position:absolute;
  top:1rem;
  left:2rem;
  right:2rem;
  color:white;
  display:flex;
  justify-content:space-between;
  align-items:center;
  @media(max-width:768px){
    top:0;
    right:0;
    left:0;
  }
  @media(max-width:375px){
    top:1rem;
    right:1.5rem;
  }
`

const Logo = styled.img`
  height:40px;
  width:40px;

`

const Hr = styled.hr`
  width: 473px;
  height: 1px;
  background: #FFFFFF;
  mix-blend-mode: normal;
  opacity: 0.25;
  @media(max-width:900px){
    display:none;
  }
`

const NavLinks = styled.div`
  display:flex;
  padding:1.8rem 4rem;
  background-color:rgba(255,255,255,0.4);
  backdrop-filter:blur(8.15485px);
  a{
    margin-right:1rem;
    text-transform:uppercase;
    text-decoration:none;
    font-family:"Barlow Condensed";
    letter-spacing:2.7;
    color:white;
    position:relative;
    &:before{
      content:"";
      height:2px;
      background-color:var(--clr3);
      position:absolute;
      opacity:0;
      left:0;
      right:0;
      bottom:-28px;
      transition:opacity 250ms ease-out;
    }
    &:hover{
      &:before{
        opacity:0.5;
      }
    }
  }
  span{
    margin-right:.5rem;
  }
  @media (max-width:500px){
    display:none;
  }
  .active::before{
    opacity:1;
  }
`

const Button = styled.img`
  cursor:pointer;
  width:24px;
  height:21px;
  ${props=>
    props.close && 
    css`
    position:absolute;
    width:24px;
    height:21px;
    top:2rem;
    right:1.5rem;
    `};
  @media (min-width:501px){
    display:none;
  }
`
const Menu = styled.div`
  position:absolute;
  top:0;
  bottom:-20rem;
  right:0;
  z-index:2000;
  background:rgba(255,255,255,0.4);
  backdrop-filter:blur(81.5px);
  width:70%;
  transition:transform 250ms ease-out;
@media(min-width:501px){
  display:none;
  
}

`

const MenuLinks = styled.div`
  padding:2rem;
  padding-top:7rem;
  display:flex;
  flex-direction:column;
  gap:2rem;

  a{
    margin-right:1rem;
    text-transform:uppercase;
    text-decoration:none;
    font-family:"Barlow Condensed";
    letter-spacing:2.7;
    line-height:19.2px;
    color:white;
    margin-bottom:2rem;
    font-size:16px;
    span{
      margin-right:1rem;
      font-family: Barlow Condensed;
      font-size: 16px;
      font-weight: 700;
      line-height: 19px;
      letter-spacing: 2.700000047683716px;
      text-align: left;

    }
  }
`