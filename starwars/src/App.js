import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Character } from './components/Character'
import './App.css'

function importAll (r) {
  return r.keys().map(r)
}
const images = importAll(
  require.context('./static/images/', false, /\.(jpe?g|jpg|jpeg)$/)
)
console.log({ images })

export const App = () => {
  const starwarsApi = 'https://swapi.co/api/people/'

  const InitialCard = 0

  const [characters, setCharacters] = useState([])
//   const [character, setCharacter] = useState(characters[0] && characters[0])
  const [charactersIndex, setCharactersIndex] = useState(InitialCard)

  const savedCharacter = useRef({})
  const savedCharacters = useRef([])


  const currentChar = savedCharacters.current[charactersIndex]
  const currentCharsRef = savedCharacters.current

  useEffect(() => {
    axios
      .get(`${starwarsApi}`)
      .then(res => setCharacters(res.data.results))
      .catch(_error => console.error(_error))
  }, [])

  useEffect(() => {
    savedCharacters.current = characters
	console.log('savedCharacters:', savedCharacters.current)
  }, [characters])

  const prevCard = () => {
    setCharactersIndex(charactersIndex => charactersIndex-1)
    console.log(charactersIndex)
  };

  const nextCard = () => {
    setCharactersIndex(charactersIndex => charactersIndex+1)
    console.log(charactersIndex)
  };

  console.log(
    'savedCharacter.current:',
    savedCharacter,
    { currentCharsRef },
    { currentChar }
  )

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className='App'>
      <HeaderContainer>
        <Left
          onClick={_e => {
            prevCard()
          }}
        >
          <span
            role='img'
            aria-label='hand pointing left.
						  Clicking this emoji will advance
						  the next carousel Image from the
						  left into the screen.'
          >👈
          </span>
        </Left>
        <Header>React Wars</Header>
        <Right
          onClick={_e => {
            nextCard()
          }}
        >
          <span
            role='img'
            aria-label='hand pointing right.
						  Clicking this emoji will advance
						  the next carousel Image from the
						  right into the screen.'
          >👉
          </span>
        </Right>
      </HeaderContainer>
      <CardsSlider>
        <CardsSliderWrapper
          style={{
            transform: `translateX(-${charactersIndex * (100 / characters.length)}%)`
          }}
        >
          {characters ? (
            characters.map((character, i) => {
              return (
                <Character
                  starwarsApi={starwarsApi}
                  charpic={
                    `${images}`.includes(`${character.name}`)
                      ? `${images[`${character.name}`.indexOf]}`
                      : null
                  }
                  images={images}
                  character={character}
                  key={`${character.toString()}${i}`}
                />
              )
            })
          ) : (
            <div>Loading...</div>
          )}
        </CardsSliderWrapper>
      </CardsSlider>
    </div>
  )
};

const HeaderContainer = styled.div`
  display: flex;
  padding: 1rem;
  align-content: center;
  display: flex;
  font-size: 4rem;
`
const Right = styled.div`
  flex: auto;
  border-radius: 54px;
  background-color: white;
  box-shadow: inset -7px -9px 15px 0px #000002;
  text-shadow: 1px -1px 0px, 1px 2px 0 black;
  padding: inherit;
`
const Left = styled.div`
  flex: auto;
  text-align: center;
  display: flex;
  border-radius: 54px;
  background-color: white;
  box-shadow: inset -7px -9px 15px 0px #000002;
  text-shadow: 1px -1px 0px, 1px 2px 0 black;
  padding: inherit;
`
const CardsSlider = styled.div`
  display: flex;
  position: relative;
`
const CardsSliderWrapper = styled.div`
  display: flex;
  position: absolute;
`

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
`
