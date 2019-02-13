import React from 'react';
import StatList from './StatList'

const PokemonList = (props) =>{
	const pokemonList = props.pokemon.results.map((pokemon, i)=>{
		return (
			<StatList pokemon={pokemon} getStats={props.getStats} stats={props.stats} index={i} key={i}/>
		)
	})
	return(
		<ul>
			<li>Welcome, {props.username}!</li>
			{pokemonList}
		</ul>
	)
}

export default PokemonList