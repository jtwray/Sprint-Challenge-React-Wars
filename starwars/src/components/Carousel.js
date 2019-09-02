
import React, {useState} from "react";
import {CarouselImage} from "./CarouselImage";
import {Character} from "../components/Character";

const carouselIndex = [
	"C:/MAMP/htdocs/LambdaSchooL/Sprint-Challenge-Applied-Javascript/assets/carousel/computer.jpeg",
	"C:/MAMP/htdocs/LambdaSchooL/Sprint-Challenge-Applied-Javascript/assets/carousel/mountains.jpeg",
	"C:/MAMP/htdocs/LambdaSchooL/Sprint-Challenge-Applied-Javascript/assets/carousel/trees.jpeg",
	"C:/MAMP/htdocs/LambdaSchooL/Sprint-Challenge-Applied-Javascript/assets/carousel/turntable.jpeg",
	"C:/MAMP/htdocs/LambdaSchooL/Sprint-Challenge-Applied-Javascript/assets/carousel/searchBar.png",
];
export const Carousel = ({characters}) => {
	const [i, seti] = useState(0);

	const [carouselCard, setCarouselCard] = useState(characters[i]);

	const prevCard = () => {setCarouselCard(characters[i - 1]);	};
    const nextCard=() => {setCarouselCard( characters[i+1] );};
    console.log(carouselCard)
	return (
		<div>
			{characters.index== i ? (
				
						<Character
							character={characters[i]}
							key={`${characters[i].toString()}${i}`}
						/>
					
				
			) : (
				<div>Loading...</div>
			)}
		</div>
	);
};{/**return (
    <div>
        {characters ? (
            characters.map((character, i) => {characters.filter(character,i)=>{}
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
    </div>
); */}