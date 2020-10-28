import React, { Component } from 'react';
import './App.css';
import UserOutput from './User/UserOutput/UserOutput'

class App extends Component {
  state = {persons:
    [{username: 'Jake'},
    {username: 'John'},
    {username: 'Jodie'}]
  };

  
render(){
  return (
    <div className="App">
      <UserOutput name={this.state.persons[0].username}></UserOutput>
      <UserOutput name={this.state.persons[1].username}></UserOutput>
      <UserOutput name={this.state.persons[2].username}>Hello</UserOutput>
    </div>
  );
}
}

export default App;
