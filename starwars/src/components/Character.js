import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import R2D2 from '../static/images/R2D2.jpeg'
import C3PO from '../static/images/C3PO.jpeg'
import Axios from 'axios'

export function Character (props) {
  const [rides, setRides] = useState('')

  useEffect(() => {
    props.character.rides &&
Axios.get(props.character.rides)
  .then(res => setRides(res),
    console.log('rides:', rides))
  }, [])
  const picReference = `${Array.from(`${props.character.name}`.split(' '))[0]}`
  console.log(picReference, `{${picReference}}`)
  return (
    <CharacterCard>
      <Header>{props.character.name}</Header>
      <CharacterInfo>
        <CharacterImage
          src={
            (props.character.name) === ('C-3PO') ? (`${C3PO}`)
              : (props.character.name) === ('R2-D2') ? `${R2D2}`
                : props.images.filter((x) => { return (x.includes(picReference)) })
          }
          alt={picReference}
        />

        <P>
          <strong>Height:</strong>
          {props.character.height}
        </P>
        <P>
          <strong>mass:</strong>
          {props.character.mass}kg
        </P>

        <P>
          <strong>Hair:</strong>
          {props.character.hair_color}
        </P>
        <P>
          <strong>Skin:</strong>
          {props.character.skin_color}
        </P>
        <P>
          <strong>Eyes:</strong>
          {props.character.eye_color}
        </P>
        <P>
          <strong>DOB:</strong> {props.character.birth_year}
        </P>
        <P>
          <strong>Gender:</strong> {props.character.gender}
        </P>
        <P>
          <strong>HomeWorld:</strong> {props.character.homeworld}
        </P>
        <P>
          <strong>Species:</strong> {props.character.species}
        </P>
        <P>
          <strong>Rides:</strong>
          {!props.character.vehicles[-1]
            ? 'vehicles: 🛴 '
            : `vehicles ${props.character.vehicles[-1]}`}
          {!props.character.starships[0]
            ? 'starships:🛸'
            : `starships:🛸 ${props.character.starships[0]} `}
        </P>
        <P>
          <strong>img:</strong>

          {props.character.url}
        </P>
      </CharacterInfo>
    </CharacterCard>
  )
}
const P = styled.p`
	display: flex;
	flex-wrap: wrap;
	text-align: justify;
`
const CharacterInfo = styled.div`
	padding-left: 24px;
	padding-bottom:24px;
`
const CharacterImage = styled.img`
	position: relative;
	float: right;
	border: tan 5px solid;
	max-width: 350px;
	width: 42%;
	height: auto;
	box-shadow: 1px 3px 10px 1px #7f7f6b;
	right: 33px;
	border-radius: 50px;
`
const CharacterCard = styled.div`
	background: #fff;
	border-radius: 20px;
	display: flex;
	flex: 1;
	flex-direction: column;
	justify-content: space-between;
	height: auto;
	margin: 1rem;
	box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
	width: 300px;
	max-width: 500px;
	opacity: 0.85;
	text-shadow: 3px 2px 7px #702f1394;
	box-shadow: inset -11px -11px 20px 3px black;
`

const Header = styled.header`
	cursor: pointer;
	font-size: 2rem;
	border-radius: 10px;
	color: #443e3e;
	text-shadow: 1px 1px 5px #fff;
	max-width: 100%;
	z-index: 3;
	padding:1rem;
	text-shadow:
	0.1px 0.1px 3px  #AAE,
	0.2px 0.2px 3px  #AAD,
	0.3px 0.3px 3px  #AAC,
	0.4px 0.4px 3px  #AAB,
	0.5px 0.5px 3px  #AAA,
	0.6px 0.6px 3px  #AA9,
	0.7px 0.7px 3px  #AA8,
	0.8px 0.8px 3px  #AA7,
	0.9px 0.9px 3px  #AA6,
	0.0px 0.0px 3px  #AA5,
	1.1px 1.1px 3px  #AA4,
	1.2px 1.2px 3px  #AA3,
	1.3px 1.3px 3px  #AA2,
	1.4px 1.4px 3px  #AA1,
	1.5px 1.5px 3px  #AA0,
	1.6px 1.6px 3px  #ABF,
	1.7px 1.7px 3px  #ABE,
	1.8px 1.8px 3px  #ABD,
	1.9px 1.9px 3px  #ABC,
	2.5px 2.5px 3px  #ABB,
	2.6px 2.6px 3px  #ABA,
	2.7px 2.7px 3px  #AB9,
	2.8px 2.8px 3px  #AB8,
	2.9px 2.9px 3px  #AB6,
	3.0px 3.0px 3px  #AB5,
	3.1px 3.1px 3px  #AB4,
	3.2px 3.2px 3px  #AB3,
	3.3px 3.3px 3px  #AB2,
	3.4px 3.4px 3px  #AB1,
	3.5px 3.5px 3px  #AB0,
	3.6px 3.6px 3px  #ACF,
	3.7px 3.7px 3px  #ACE,
	3.9px 3.9px 3px  #ACD,
	4.0px 4.0px 3px  #ACC,
	4.1px 4.1px 3px  #ACB,
	4.2px 4.2px 3px  #ACA,
	4.3px 4.3px 3px  #AC9,
	4.4px 4.4px 3px  #AC8,
	4.5px 4.5px 3px  #AC7,
	4.6px 4.6px 3px  #AC6,
	4.7px 4.7px 3px  #AC5,
	4.8px 4.8px 3px  #AC4,
	4.9px 4.9px 3px  #AC3,
	8.0px 7.0px 3px black;
	transition: 0.5s all ease-out;
	&:hover {
		background-color: #8FF;
		color: white;
		opacity: 0.84;
		margin-bottom: 15%;
		border-radius: 20px;
		box-shadow: inset -13px -11px 17px 6px black;
	    padding: 1rem;
	};
`
