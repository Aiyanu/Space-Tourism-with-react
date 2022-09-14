import React, { useState } from 'react'
import styled from 'styled-components'
import {dskBg,mobBg,tabBg,commander,missionS,pilot,fEng} from "../assets/crew/crew"
const members = [
  {
    "name": "Douglas Hurley",
    "images": {
      "png": commander,
      "webp": "./assets/crew/image-douglas-hurley.webp"
    },
    "role": "Commander",
    "bio": "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
  },
  {
    "name": "Mark Shuttleworth",
    "images": {
      "png": missionS,
      "webp": "./assets/crew/image-mark-shuttleworth.webp"
    },
    "role": "Mission Specialist",
    "bio": "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
  },
  {
    "name": "Victor Glover",
    "images": {
      "png": pilot,
      "webp": "./assets/crew/image-victor-glover.webp"
    },
    "role": "Pilot",
    "bio": "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
  },
  {
    "name": "Anousheh Ansari",
    "images": {
      "png": fEng,
      "webp": "./assets/crew/image-anousheh-ansari.webp"
    },
    "role": "Flight Engineer",
    "bio": "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
  }
]
const Crew = () => {
  const tabs = [commander,missionS,pilot,fEng]
  const [tab,setTab]= useState(0)
  const [activeT,setActiveT]=useState(tabs[0])
  return (
    <Container>
      <h5><span>02</span>meet the crew</h5>
      <Wrap>
        <Details>
          <Desc>
            <section>
              <h1>{members[tab].role}</h1>
              <h2>{members[tab].name}</h2>
              <p>{members[tab].bio}</p>
            </section>
          <Tabs>
            {
              tabs.map(tab=>(
                <Tab key={tab} active={tab===activeT} onClick={()=>{setTab(tabs.indexOf(tab));setActiveT(tab)}}></Tab>
              ))
            }
          </Tabs>
          </Desc>
        </Details>
        <Member>
          <img src={members[tab].images.png} alt="" />
          <hr />
        </Member>
      </Wrap>
    </Container>
  )
}

export default Crew

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
    @media(max-width:375px){
      font-size: calc(28px*0.7);
      line-height: calc(34px*0.7);
      letter-spacing: calc(4.725px*0.7);
      margin:0 auto;
      }
    span{
      margin-right:1rem;
      opacity:0.25;
    }
`

const Wrap = styled.div`
  margin-top:5rem;
  display:flex;
  justify-content:space-around;
  align-items:center;
  @media(max-width:768px){
    flex-direction:column;
  }
  @media(max-width:375px){
    flex-direction:column-reverse;
  }
`

const Member = styled.div`
    display:flex;
    position:relative;
    bottom:1rem;
    width:100%
    img{
      width: calc(568.07px*0.7);
      height: calc(712px*0.7);
    }
    hr{
      @media(min-width:376px){
        display:none
      }
    }
    @media(max-width:768px){
      bottom:0;
    }
    @media(max-width:375px){
      position:static;
      flex-direction:column;
      justify-content:center;
      
      img{
        width: calc(568.07px*0.6);
        height: calc(712px*0.6);
      }
    }
`

const Details = styled.div`
    display:flex;
    flex-direction:column;
    width:500px;
    @media(max-width:768px){
      text-align:center;
    }
    @media(max-width:375px){
      text-align:center;
      width:calc(500px*0.7);
    }
`

const Tabs = styled.div`
    display:flex;
    justify-content:space-between;
    width: 132px;
    position:absolute;
    bottom:3rem;
    @media(max-width:768px){
      position:static;
      margin:2rem auto;
      align-items:center;
    }
    `
    
const Tab = styled.a`
      width: 15px;
      height: 15px;
      background:white;
      border-radius:50%;
      opacity:${(props)=>props.active?1:0.2};
      cursor:pointer;
      &:hover{
        opacity:0.5
      }
`

const Desc = styled.div`
    display:flex;
    flex-direction:column;
    gap:1rem;
    margin-bottom:5rem;
    h1{
      font-family: 'Bellefair';
      font-style: normal;
      font-weight: 400;
      font-size: 32px;
      line-height: 37px;
      text-transform: uppercase;
      color: #FFFFFF;
      mix-blend-mode: normal;
      opacity: 0.5;
      @media(max-width:768px){
        font-size: calc(32px*0.7);
        line-height: calc(37px*0.7);
      }
      @media(max-width:375px){
      font-size: calc(32px*0.7);
      line-height: calc(37px*0.7);
      }
    }
    h2{
      font-family: 'Bellefair';
      font-style: normal;
      font-weight: 400;
      font-size: 56px;
      line-height: 64px;
      text-transform: uppercase;
      color: #FFFFFF;
      @media(max-width:768px){
        font-size: calc(56px*0.7);
        line-height: calc(64px*0.7);
      }
      @media(max-width:375px){
      font-size: calc(56px*0.5);
      line-height: calc(64px*0.5);
      }
    }
    p{
      height:5rem;
      max-height:400px;
      font-family: 'Barlow';
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 32px;
      color: #D0D6F9;
      @media(max-width:768px){
        font-size: calc(18px*0.9);
        line-height: calc(32px*0.9);
      }
      @media(max-width:375px){
      font-size: calc(32px*0.6);
      line-height: calc(37px*0.6);
      }
    }
    
    @media(max-width:768px){
      position:relative;
    }
    @media(max-width:375px){
    flex-direction:column-reverse;
  }
`