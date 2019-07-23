import React from "react";

function Character(props) {
	return (
		<div className='character-card'>
			<h4>Name:{props.character.name}</h4>
			<div className='character-info'>
				<p><strong>Height:</strong>{props.character.height}</p>
				<p><strong>mass:</strong>{props.character.mass}kg</p>

				<p><strong>Hair:</strong>{props.character.hair_color}</p>
				<p><strong>Skin:</strong>{props.character.skin_color}</p>
				<p><strong>Eyes:</strong>{props.character.eye_color}</p>
				<p>
					<strong>DOB:</strong> {props.character.birth_year}
				</p>
				<p>
					<strong>Gender:</strong> {props.character.gender}
                </p>
                <p>
					<strong>HomeWorld:</strong> {props.character.homeworld}
                </p>
                <p>
					<strong>Species:</strong> {props.character.species}
                </p>
                <p>
					<strong>Rides:</strong> <a href={props.character.starships[0]} alt={props.character.vehicles[-1]}></a>
                </p>
                <p>
					<strong>img:</strong> <a href={props.character.url} alt=""></a>
				</p>
			</div>
		</div>
	);
}

export default Character;
