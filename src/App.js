import React, { Component } from 'react';
import Login from './Login/Login'
import PokemonApiContainer from './PokemonApiContainer/PokemonApiContainer'

class App extends Component {
  state={
    logged: false,
    username: ""
  }
  login=(username)=>{
    this.setState({
      logged: true,
      username: username
    })
  }
  render() {
    return (
      <div className="App">
        {this.state.logged ? <PokemonApiContainer username={this.state.username}/> : <Login login={this.login}/>}
      </div>
    );
  }
}

export default App;
