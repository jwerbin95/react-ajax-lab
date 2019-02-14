import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
export default class StatList extends Component{
	state={
		showStats: false,
		stats: [],
		active: false
	}
	handleMount=async(key)=>{
		await this.getStats(key)
		this.setState({
			showStats: !this.state.showStats,
			active: !this.state.active
		})
	}
	getStats = async(key) =>{
		try{
			const stats = await fetch(this.props.pokemon.url)
			const statsJSON = await stats.json()
			this.setState({
				stats: statsJSON
			})
		}
		catch(error){
			console.log(error.stack)
			return error
		}
	}
	componentDidMount(){
		this.handleMount(this.props.index)
	}
	render(){
		return(
			<li key={this.props.index}>
				<p>Name: {this.props.pokemon.name}</p>
				{this.state.showStats ? <div>
					<p>Ability: {this.state.stats.abilities[0].ability.name}</p>
					<p>Type: {this.state.stats.types[0].type.name}</p>
					<img src={this.state.stats.sprites.front_default} alt={this.props.pokemon.name}></img>
				</div> : null}
				<p>-----------------------------------</p>
			</li>
		)
	}
}