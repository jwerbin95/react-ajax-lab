import React, { Component } from 'react'

export default class Login extends Component{
	state={
	   username: "",
	   password: ""
  	}
  	handleChange=(event)=>{
  		event.preventDefault()
  		this.setState({
  			[event.currentTarget.name]: event.currentTarget.value
  		})
  	}
  	handleSubmit=(event)=>{
  		event.preventDefault()
  		this.props.login(this.state.username)
  	}
	render(){
		return(
			<form onSubmit={this.handleSubmit}>
				<input type="text" name="username" placeholder="username" value={this.state.username} onChange={this.handleChange} />
				<input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.handleChange} />
				<input type="submit" value="Submit" />
			</form>
		)
	}
}