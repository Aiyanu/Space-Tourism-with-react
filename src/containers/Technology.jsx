import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import {dskBg,tabBg,mobBg,LaunchVehiclePort,LaunchVehicleLand,spaceCapsuleLand,spaceCapsulePort,spaceportPort,spaceportLand} from "../assets/technology/tech"
const tech = [
    {
      "name": "Launch vehicle",
      "images": {
        "portrait": LaunchVehiclePort,
        "landscape": LaunchVehicleLand
      },
      "description": "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
    },
    {
      "name": "Spaceport",
      "images": {
        "portrait": spaceportPort,
        "landscape": spaceportLand
      },
      "description": "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
    },
    {
      "name": "Space capsule",
      "images": {
        "portrait":spaceCapsulePort,
        "landscape": spaceCapsuleLand
      },
      "description": "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
    }
  ]
const Technology = () => {
  const tabs=["launchV","spaceP","spaceC"]
  const [activeT,setActiveT] = useState(tabs[0])
  const [tab,setTab]= useState(0);
  return (
    <Container>
      <h5><span>02</span>space launch 101</h5>
      <Wrap>
        <Tabs>
          {
            tabs.map(tab=>(
              <Tab key={tab} active={activeT===tab} onClick={()=>{setTab(tabs.indexOf(tab));setActiveT(tab)}}><p>{tabs.indexOf(tab)+1}</p></Tab>
            ))
          }
        </Tabs>
        <Details>
          <h2>THE TERMINOLOGY…</h2>
          <h1>{tech[tab].name}</h1>
          <p>{tech[tab].description}</p>
        </Details>
        <Tech>
          <Portrait><img src={tech[tab].images.portrait} alt="" /></Portrait>
          <Landscape><img src={tech[tab].images.landscape} alt="" /></Landscape>
        </Tech>
      </Wrap>
    </Container>
  )
}

export default Technology

const Container = styled.div`
  background-image:url(${dskBg});
  background-repeat:no-repeat;
  background-size:100vw 100vh;
  height:100vh;
  padding-top:6.5rem;
  color:white;
  //overflow:hidden;
  display:flex;
  flex-direction:column;
  @media (max-width: 768px){
    background-image:url(${tabBg});
  }

  @media (max-width:375px){
    background-image:url(${mobBg});
  }
  h5{
    font-family: 'Barlow Condensed';
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 34px;
    letter-spacing: 4.725px;
    text-transform: uppercase;
    color: #FFFFFF;
    margin-left:4rem;
    span{
      margin-right:1rem;
      opacity:0.25;
    }
`

const Wrap = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;

`

const Tabs = styled.div`
    width:80px;
    height: 303px;
  }
  `
  const Tab = styled.div`
    margin:0 2rem .5rem ;
    width:80px;
    height:80px;
    padding:1rem;
    border-radius:50%;
    opacity:.2;
    cursor:pointer;
    mix-blend-mode: normal;
    opacity: 0.25;
    border: 1px solid #FFFFFF;
    p{
      font-family: 'Bellefair';
      font-style: normal;
      font-weight: 400;
      font-size: 32px;
      line-height: 37px;
      text-align: center;
      letter-spacing: 2px;
      color: #FFFFFF;
    }
      ${
        (props)=>props.active &&
        css`
        background:white;
        opacity:1;
        p{
          color: #0B0D17;
        }
        `
      }
      &:hover{
        opacity:.5;
        background:white;
        p{
          color: #0B0D17;
        }
      }

`

const Details= styled.div`
    width: 470px;
    height: 303px;
  h2{
    font-family: 'Barlow Condensed';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 2.7px;
    color: #D0D6F9;
  }
  h1{
    font-family: 'Bellefair';
    font-style: normal;
    font-weight: 400;
    font-size: 56px;
    line-height: 64px;
    color: #FFFFFF;
  }
  p{
    font-family: 'Barlow';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 32px;
    color: #D0D6F9;
  }

`

const Tech = styled.div`

`

const Portrait= styled.div`
  @media(max-width:768px){
    display:none;
  }
`

const Landscape = styled.div`
  @media(min-width:769px){
    display:none;
  }
`