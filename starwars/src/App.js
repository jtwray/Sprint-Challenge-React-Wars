import React, { Component } from "react";
import "./App.css";
import Character from "./components/Character";
import Button from "./components/Button";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			starwarsChars: [],
			
		};
  }
  previousPage=(URL)=>{
    fetch(URL)
    .then(res => {
      return res.json();
    })
    .then(data => {
      console.log(data)
      this.setState({ starwarsChars: data.previous});
  
    })
    .catch(err => {
      throw new Error(err);
    });
  } 
nextPage=(URL)=>{
  fetch(URL)
  .then(res => {
    return res.json();
  })
  .then(data => {
    console.log(data)
    this.setState({ starwarsChars: data.next});

  })
  .catch(err => {
    throw new Error(err);
  });
} 
	componentDidMount() {
		this.getCharacters("https://swapi.co/api/people/");
	}

	getCharacters = URL => {
		// feel free to research what this code is doing.
		// At a high level we are calling an API to fetch some starwars data from the open web.
		// We then take that data and resolve it our state.
		fetch(URL)
			.then(res => {
				return res.json();
			})
			.then(data => {
        console.log(data)
				this.setState({ starwarsChars: data.results });
			})
			.catch(err => {
				throw new Error(err);
			});
	};

	render() {
		return (
			<div className='App'>
				<h1 className='Header'>React Wars</h1>

				<div>
        <button onClick={this.previousPage}>P</button>;
        <button onClick={this.nextPage}>N</button>;
					{this.state.starwarsChars.map((swcharacter,index) => {
            console.log(swcharacter)
            return (
              <Character character={swcharacter} key={index} />
              )
          }
          )}
				</div>
			</div>
		);
	}
}

export default App;
