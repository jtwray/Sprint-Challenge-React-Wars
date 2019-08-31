import React from "react";
import styled from "styled-components";
export function Character(props) {
	return (
		<CharacterCard>
			<Header>Name:{props.character.name}</Header>
			<CharacterInfo>
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
					{!props.character.vehicles[-1]?"🛴":`vehicles${props.character.vehicles[-1]}`}
					{!props.character.starships[0]?"🛸":`starships:${props.character.starships[0]}`}
					
				</P>
				<P>
					<strong>img:</strong>{props.character.url} 
					<img src={props.character.url} alt=""></img>
				</P>
			</CharacterInfo>
		</CharacterCard>
	);
}
const P=styled.p`
display:flex;
`
const CharacterInfo=styled.div`
padding-left: 24px;
`
const CharacterCard=styled.div`
background: #fff;
border-radius: 2px;
display: flex;
flex-direction: column;
justify-content: space-evenly;
height: auto;
margin: 1rem auto;
box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
width: auto;
max-width: 500px;
opacity: 0.85;
text-shadow: 3px 2px 7px #702f1394;
`

const Header = styled.header`
	cursor: pointer;
	font-size: 3rem;
	border-radius: 10px;
	color: #443e3e;
	text-shadow: 1px 1px 5px #fff;
	max-width: 100%;
	z-index: 3;
	text-shadow: 5px 5px 3px #fff, 4.9px 4.9px 3px #c78352,
		4.8px 4.8px 3px #c78352, 4.7px 4.7px 3px #c78352,
		4.6px 4.6px 3px #c78352, 4.5px 4.5px 3px #c78352,
		4.4px 4.4px 3px #c78352, 4.3px 4.3px 3px #c78352,
		4.2px 4.2px 3px #c78352, 4.1px 4.1px 3px #c78352, 4px 4px 3px #c78352,
		3.9px 3.9px 3px #c78352, 3.5px 3.5px 3px #c78352,
		3.3px 3.3px 3px #c78352, 3.2px 3.2px 3px #c78352,
		3.7px 3.7px 3px #c78352, 3.6px 3.6px 3px #c78352,
		3.5px 3.5px 3px #c78352, 3.4px 3.4px 3px #c78352,
		3.3px 3.3px 3px #c78352, 3.2px 3.2px 3px #c78352,
		3.1px 3.1px 3px #c78352, 3px 3px 3px #c78352, 2.9px 2.9px 3px #c78352;
	transition: 0.5s all ease-out;
	&:hover {
		background-color: palevioletred;
		color: white;
		opacity: 0.84;
		margin-right: 15%;
	}
`;
