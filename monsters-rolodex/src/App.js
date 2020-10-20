import React, { Component } from 'react';
import './App.css';
import { cardList } from './components/card-list/card-list.component';

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
      <div className="App">
        <cardList name = 'Yihua'>
          <h1>Yihua</h1>
        </cardList>
         {this.state.monsters.map(monster => (
           <h1 key={monster.id}> {monster.name}</h1>
         ))}
 
      </div>
    );
  }
}

export default App;
