import React, { Component } from 'react';
import PokemonList from './PokemonList'

export default class PokemonApiContainer extends Component{
	state={
		pokemon: []
	}
	getPokemon = async () =>{
	    try{
		      const pokemon = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=40&offset=40')
		      const pokemonJSON = await pokemon.json()
		      this.setState({
		      	pokemon: pokemonJSON
		      })
	    }
	    catch(error){
	      console.log(error.stack)
	      return error
	  	}
	}
	componentDidMount(){
	    this.getPokemon().then((data)=>console.log("Component mounted successfully!"))
	}
	render(){
		if(this.state.pokemon.results===undefined){
			return <h1>Loading...</h1>
		}else{
			return <PokemonList 
						username={this.props.username}
						pokemon={this.state.pokemon} 
					/>
		}
	}
}