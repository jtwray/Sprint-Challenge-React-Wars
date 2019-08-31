import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";
import {Character} from "./components/Character";

import "./App.css";

export const App = () => {
	let [characters, setCharacters] = useState();

	useEffect(() => {
		axios
			.get(`https://swapi.co/api/people/`)
			// Which we then set to state
			.then((res) => {
				setCharacters(res.data.results);
				console.log(`characters ${characters}`);
			})
			// Always include error handling
			.catch((error) => {
				console.error();
			});
	}, []);

	// Try to think through what state you'll need for this app before starting. Then build out
	// the state properties here.

	// Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
	// side effect in a component, you want to think about which state and/or props it should
	// sync up with, if any.

	return (
		<div className="App">
      <Header>
      React Wars
      </Header>
			{characters ? (
				characters.map((character,i) => {
          return <Character character={character} key={`${character.toString()}${i}`}/>;
				})
			) : (
				<div>Loading...</div>
			)}
		</div>
	);
};
const Header = styled.header`
  cursor: pointer;
  font-size:3rem;
  border-radius:10px;
  color: #443e3e;
	text-shadow: 1px 1px 5px #fff;
	position: fixed;
	right: 35%;
	top: 1%;
	z-index: 3;
	text-shadow: 5px 5px 3px #fff, 4.9px 4.9px 3px #c78352,
		4.8px 4.8px 3px #c78352, 4.7px 4.7px 3px #c78352, 4.6px 4.6px 3px #c78352,
		4.5px 4.5px 3px #c78352, 4.4px 4.4px 3px #c78352, 4.3px 4.3px 3px #c78352,
		4.2px 4.2px 3px #c78352, 4.1px 4.1px 3px #c78352, 4px 4px 3px #c78352,
		3.9px 3.9px 3px #c78352, 3.5px 3.5px 3px #c78352, 3.3px 3.3px 3px #c78352,
		3.2px 3.2px 3px #c78352, 3.7px 3.7px 3px #c78352, 3.6px 3.6px 3px #c78352,
		3.5px 3.5px 3px #c78352, 3.4px 3.4px 3px #c78352, 3.3px 3.3px 3px #c78352,
		3.2px 3.2px 3px #c78352, 3.1px 3.1px 3px #c78352, 3px 3px 3px #c78352,
		2.9px 2.9px 3px #c78352;
  transition: 0.5s all ease-out;
  &:hover {
    background-color: palevioletred;
    color: white;
  }
`;