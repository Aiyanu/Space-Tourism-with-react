import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import dskBg from '../assets/home/background-home-desktop.jpg'
import tabBg from '../assets/home/background-home-tablet.jpg'
import mobBg from '../assets/home/background-home-mobile.jpg'
const Home = () => {
  return (
    <Container>
      <Wrap>
        <h5>SO, YOU WANT TO TRAVEL TO</h5>
        <h1>Space</h1>
        <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
      </Wrap>
      <Lgbutton to="/destination">
        <p>Explore</p>
      </Lgbutton>
    </Container>
  )
}

export default Home

const Container = styled.div`
  background-image:url(${dskBg});
  background-repeat:no-repeat;
  background-size:100vw 100vh;
  height:100vh;
  padding-top:5rem;
  color:white;
  overflow:hidden;
  display:flex;
  justify-content:space-around;
  align-items:center;
  gap:10rem;
  width:100%;
  @media (max-width: 768px){
    background-image:url(${tabBg});
    flex-direction:column;
    padding-top:6rem;
    gap:2rem;
  }
  
  @media (max-width:375px){
    background-image:url(${mobBg});
  }
  
  `
  const Wrap = styled.div`
  overflow:hidden;
  text-align:center;
  width:450px;
  min-width: 450px;
  h1{
    text-transform:uppercase;
    font-family: 'Bellefair';
    font-style: normal;
    font-weight: 400;
    font-size: 150px;
    line-height: 172px;
    color: #FFFFFF;
    @media (max-width:768px){
      font-size:calc(150px*0.8);
      line-height:calc(172px*0.8)
    }
    @media (max-width:375px){
      font-size:calc(150px*0.6);
      line-height:calc(172px*0.6)
    }
  }
  h5{
    font-family: 'Barlow Condensed';
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 34px;
    letter-spacing: 4.725px;
    color: #D0D6F9;
    @media (max-width:768px){
      font-size:calc(28px*0.8);
      line-height:calc(34px*0.8)
    }
    @media (max-width:375px){
      font-size:calc(28px*0.6);
      line-height:calc(34px*0.6)
    }
  }
  p{
    font-family: 'Barlow';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 32px;
    color: #D0D6F9;
    @media (max-width:768px){
      font-size:calc(18px*0.8);
      line-height:calc(32px*0.8)
    }
  }
  @media (max-width:768px){
    max-width:calc(450px*0.8);
    height:calc(350px*0.8)
  }
  
`

const Lgbutton = styled(Link)`
  width:274px;
  height:274px;
  border-radius:50%;
  color:var(--clr1);
  background-color:var(--clr3);
  display:grid;
  place-items:center;
  position:relative;
  z-index:1;
  cursor:pointer;
  transform:scale(.6);
  text-decoration:none;
  @media (max-width:768px){
    width:calc(274px*0.8);
    height:calc(274px*0.8)
  }
  p{
    text-transform:uppercase;
    font-family: 'Bellefair';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 37px;
    letter-spacing: 2px;
    color: #0B0D17;
    @media (max-width:768px){
      font-size:calc(32px*0.8);
      line-height:calc(37px*0.8)
    }
  }
  &:hover{
    &:after{
      position:absolute;
      content:"";
      background-color:rgba(255,255,255,0.4);
      border-radius:50%;
      z-index:-1;
      width:450px;
      height:450px;
      opacity:1; 
      transition:opacity 3s ease;
      @media (max-width:768px){
        width:calc(450px*0.8);
        height:calc(450px*0.8)
      }
    }
  }
`