import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: []
    };
    
  }

componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
     .then(users => this.setState({ monsters:users}));
}

  render() {
    return (
      <div className= 'App'>
        <CardList name='kyobe'>
          <h1>kyobe</h1>
          </CardList>

          {this.state.monsters.map(monsters => (
            <h1 key={monsters.id}> {monsters.name} </h1>
          ))}
      </div>
    );
  }
}

export default App;
