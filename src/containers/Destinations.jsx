import React, { useState } from 'react'
import styled from 'styled-components'
import {dskBg,tabBg,mobBg,moon,titan,mars,europa} from '../assets/destination/destination'

const planets =[
    {
      "name": "Moon",
      "images": {
        "png": moon,
        "webp": "./assets/destination/image-moon.webp"
      },
      "description": "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      "distance": "384,400 km",
      "travel": "3 days"
    },
    {
      "name": "Mars",
      "images": {
        "png": mars,
        "webp": "./assets/destination/image-mars.webp"
      },
      "description": "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      "distance": "225 mil. km",
      "travel": "9 months"
    },
    {
      "name": "Europa",
      "images": {
        "png": europa,
        "webp": "./assets/destination/image-europa.webp"
      },
      "description": "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      "distance": "628 mil. km",
      "travel": "3 years"
    },
    {
      "name": "Titan",
      "images": {
        "png":titan,
        "webp": "./assets/destination/image-titan.webp"
      },
      "description": "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      "distance": "1.6 bil. km",
      "travel": "7 years"
    }
]

const tabs = ['moon','mars','europa','titan']

const Destination = () => {
  const [isActive,setIsActive]=useState(tabs[0]);
  const [tab,setTab]=useState(0);
  const changePlanet = (e)=>{
    const key=e.target.id
    if (key==='moon'){
    setTab(0);
    setIsActive('moon')
    }
    if (key==='mars'){
    setTab(1);
    setIsActive('mars')
    }
    if (key==='europa'){
    setTab(2);
    setIsActive('europa')
    }
    if (key==='titan'){
    setTab(3);
    setIsActive('titan')
    }
  }
  return (
    <Container>
      <h5><span>01</span>Pick your destination</h5>
      <Wrap>
        <Planet>
          <img src={planets[tab].images.png} alt="" />
        </Planet>
        <Detail>
          <Tabs>
            {tabs.map(tab=>(
              <Tab id={tab} key={tab} active={tab===isActive} onClick={changePlanet}>{tab}</Tab>
            ))}
          </Tabs>
          <section>
            <h1>{planets[tab].name}</h1>
            <p>{planets[tab].description}</p> 
          </section>
          <hr />
          <aside>
              <div>
                <h6>AVG. DISTANCE</h6>
                <p>{planets[tab].distance}</p>
              </div>
              <div>
                <h6>Est. travel time</h6>
                <p>{planets[tab].travel}</p>
              </div>
          </aside>
        </Detail>
    </Wrap>
    </Container>
  )
}

export default Destination

const Container = styled.div`
  background-image:url(${dskBg});
  background-repeat:no-repeat;
  background-size:100vw 100vh;
  height:100vh;
  padding-top:5rem;
  color:white;
  //overflow:hidden;
  display:flex;
  flex-direction:column;
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
    @media(max-width:375px){
      font-size: calc(28px*0.6);
      line-height: calc(34px*0.6);
      span{
        margin-right:calc(1rem*0.6);
      }
    }
  }
  @media (max-width: 768px){
    background-image:url(${tabBg});
  }

  @media (max-width:375px){
    background-image:url(${mobBg});
  }
`
const Wrap = styled.div`
  padding-top:5rem;
  display:flex;
  justify-content:space-around;
  @media(max-width:768px){
    flex-direction:column;
    align-items:center;
    text-align:center;
    gap:1rem;
  }
  @media(max-width:375px){
    padding-top:calc(5rem*0.6);
    gap:2rem;
  }
`

const Planet = styled.div`
img{
  width: calc(678px*.6);
  height: calc(678px*.0.6);
  @media(max-width:768px){
    width: calc(678px*.5);
  }
  @media(max-width:375px){
    width: calc(678px*.4);
  }
}

`

const Detail = styled.div`
  display:flex;
  flex-direction:column;
  gap:2rem;
  width: 445px;
  position:relative;
  section{
  h1{
    text-transform:uppercase;
    font-family: 'Bellefair';
    font-style: normal;
    font-weight: 400;
    font-size: 100px;
    line-height: 115px;
    color: #FFFFFF;
    @media (max-width:375px){
      font-size: calc(100px*0.8);
      line-height: calc(115px*0.8);
    }
  }
  p{
    font-family: 'Barlow';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 32px;
    color: #D0D6F9;
    @media (max-width:375px){
      max-width:327px;
      margin:auto;
      font-size: calc(18px*0.9);
      line-height: calc(32px*0.9);
    }
  }
}
  aside{
    display:flex;
    justify-content:flex-start;
    gap:5rem;
    position:absolute;
    bottom:0;
    @media(max-width:768px){
      bottom:-4rem;
    }
    @media(max-width:375px){
      flex-direction:column;
      bottom:-12rem;
      right:30%;
      left:30%;
      gap:calc(5rem*0.8);
    }
    div{
      display:flex;
      flex-direction:column;
      h6{
        font-family: 'Barlow Condensed';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        letter-spacing: 2.3625px;
        text-transform: uppercase;
        color: #D0D6F9;
        @media(375px){
          font-size: 14px;
          line-height: 17px;
          letter-spacing: 2.3625px;
        }
      }
      p{
        font-family: 'Bellefair';
        font-style: normal;
        font-weight: 400;
        font-size: 28px;
        line-height: 32px;
        text-transform: uppercase;
        color: #FFFFFF;
      }
    }
  }
`

const Tabs = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  gap:2rem;
  @media(max-width:375px){
    gap:calc(2rem*0.8)
  }
`

const Tab = styled.p`
text-transform:uppercase;
cursor:pointer;
font-family: 'Barlow Condensed';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
letter-spacing: 2.7px;
color: #FFFFFF;
position:relative;
&:before{
  content:"";
  position:absolute;
  height:2px;
  right:0;
  left:0;
  bottom:-15px;
  background-color:#fff;
  opacity:${prop=>prop.active ? `1`:"0"};
  transition:opacity 250ms ease-out;
}
&:hover{
  &:before{
    opacity:0.6;
  }
}

`