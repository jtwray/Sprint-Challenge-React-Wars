import React, {useState, useEffect, useRef} from "react";
import axios from "axios";
import styled from "styled-components";
import {Character} from "./components/Character";
import {Carousel} from "./components/Carousel";
import c3p0 from "./static/images/c3p0.jpg";
import Luke from "./static/images/Luke_skywalker (1).jpg";
import R2D2 from "./static/images/R2D2.jpeg"

import "./App.css";

export const App = () => {
	const [characters, setCharacters] = useState([]);

	useEffect(() => {
		axios
			.get("https://swapi.co/api/people/")

			.then((res) => {
				setCharacters(res.data.results);
			})

			.catch((error) => {
				console.error();
			});
	}, []);
	const [character, setCharacter] = useState(characters[0] && characters[0]);

	const updateCharacter = (x) => {
		x && setCharacter(x);
	};

	const savedCharacters = useRef("");
	useEffect(() => {
		savedCharacters.current = characters;
	});

	const savedCharacter = useRef({});
	useEffect(() => {
		characters[0] && (savedCharacter.current = characters[0]);
	});

	console.log(savedCharacter.current);

	console.log(savedCharacters.current);
	useEffect(() => {
		characters[0] && setCharacter(characters[0]);
	}, [characters[0]]);

	console.log(
		"characters:",
		characters,
		"characters[0]:",
		characters[0],
		"character:",
		`'${character}'`,
		"character.name:",
		`'${character && character}'`,
		"Object.keys( characters ):",
		Object.keys(characters),
		"characters[0]&&characters[0].name:",
		characters[0] && characters[0].name
	);

	const charactersRef = useRef(null);
	charactersRef.current = characters;

	const InitialState = 0;
	let [charactersIndex, setCharactersIndex] = useState(InitialState);
	const prevCard = () => {
		setCharactersIndex((charactersIndex -= 1));
		console.log(charactersIndex);
	};
	const nextCard = () => {
		setCharactersIndex((charactersIndex += 1));
		console.log(charactersIndex);
	};

	// Try to think through what state you'll need for this app before starting. Then build out
	// the state properties here.

	// Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
	// side effect in a component, you want to think about which state and/or props it should
	// sync up with, if any.
	const [heroImages, setHeroImages] = useState([]);
	const assignImages = () => {
		// charactersIndex==1? characters[1].heroImage==heroImage[1]:"";

		const newHeroes = [...heroImages, Luke, c3p0, R2D2];

		return console.log(newHeroes);
	};
	assignImages();
	return (
		<div className="App">
			<HeaderContainer>
				<Left
					onClick={(e) => {
						prevCard();
					}}>
					👈
				</Left>
				<Header>React Wars</Header>
				<Right
					onClick={(e) => {
						nextCard();
					}}>
					{" "}
					👉
				</Right>
			</HeaderContainer>
			<CardsSlider>
				<CardsSliderWrapper
					style={{
						transform: `translateX(${charactersIndex *
							(100 / characters.length)}%)`,
					}}>
					{characters ? (
						characters.map((character, i) => {
							return (
								<Character
									character={character}
									key={`${character.toString()}${i}`}
								/>
							);
						})
					) : (
						<div>Loading...</div>
					)}
				</CardsSliderWrapper>
			</CardsSlider>
		</div>
	);
};

const HeaderContainer = styled.div`
	display: flex;
	padding: 1rem;
	align-content: center;
	display: flex;
	font-size: 4rem;
`;
const Right = styled.div`
	flex: auto;
	border-radius: 54px;
	background-color: white;
	box-shadow: inset -7px -9px 15px 0px #000002;
	text-shadow: 1px -1px 0px, 1px 2px 0 black;
	padding: inherit;
`;
const Left = styled.div`
	flex: auto;
	text-align: center;
	display: flex;
	border-radius: 54px;
	background-color: white;
	box-shadow: inset -7px -9px 15px 0px #000002;
	text-shadow: 1px -1px 0px, 1px 2px 0 black;
	padding: inherit;
`;
const CardsSlider = styled.div`
	display: flex;
	position: relative;
`;
const CardsSliderWrapper = styled.div`
	display: flex;
	position: absolute;
`;

const Header = styled.header`
	cursor: pointer;
	font-size: 2rem;
	border-radius: 10px;
	color: #443e3e;
	flex: auto;
    align-items: center;
    z-index: 3;
    display: flex;	
	text-shadow:	
	0.1px 0.1px 3px  #FFF,
	0.2px 0.2px 3px  #EFF,
	0.3px 0.3px 3px  #DFF,
	0.4px 0.4px 3px  #CFF,
	0.5px 0.5px 3px  #BFF,
	0.6px 0.6px 3px  #AFF,
	0.7px 0.7px 3px  #9FF,
	0.8px 0.8px 3px  #8FF,
	0.9px 0.9px 3px  #7FF,
	0.0px 0.0px 3px  #6FF,
	1.1px 1.1px 3px  #5FF,
	1.2px 1.2px 3px  #4FF,
	1.3px 1.3px 3px  #3FF,
	1.4px 1.4px 3px  #2FF,
	1.5px 1.5px 3px  #1FF,
	1.6px 1.6px 3px  #0FF,
	1.7px 1.7px 3px  #FEF,
	1.8px 1.8px 3px  #FDF,
	1.9px 1.9px 3px  #FCF,
	2.5px 2.5px 3px  #FBF,
	2.6px 2.6px 3px  #FAF,
	2.7px 2.7px 3px  #F9F,
	2.8px 2.8px 3px  #F8F,
	2.9px 2.9px 3px  #F7F,
	3.0px 3.0px 3px  #F6F,
	3px 3px 3px #c78352,
	3.1px 3.1px 3px #c78352,
	3.2px 3.2px 3px #c78352,
	3.2px 3.2px 3px #c78352,
	3.3px 3.3px 3px #c78352,
	3.3px 3.3px 3px #c78352,
	3.4px 3.4px 3px #c78352,
	3.5px 3.5px 3px #c78352,
	3.5px 3.5px 3px #c78352,
	3.6px 3.6px 3px #c78352,
	3.7px 3.7px 3px #c78352,
	3.9px 3.9px 3px #c78352,
	4px 4px 3px #c78352,
	4.1px 4.1px 3px #c78352,
	4.2px 4.2px 3px #c78352,
	4.3px 4.3px 3px #c78352,
	4.4px 4.4px 3px #c78352,
	4.5px 4.5px 3px #c78352,
	4.6px 4.6px 3px #c78352,
	4.7px 4.7px 3px #c78352,
	4.8px 4.8px 3px #c78352,
	4.9px 4.9px 3px #c78352,
	5px 5px 3px #fff
}
	transition: 0.5s all ease-out;
	&:hover {
		background-color: chartreuse;
		opacity:.5;
		color: white;
	};
	
	border-radius: 20px;
    box-shadow: inset -13px -11px 17px 6px black;
	padding: 1rem;
    min-width: 250px;
    width: 100%;
    max-width: 750px;
    margin: 2rem;

}
`;
