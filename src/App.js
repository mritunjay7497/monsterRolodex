import React, { Component } from 'react';

import {CardList} from './components/card-list/card-list.component.jsx';

import { SearchBox } from './components/search-box/search-box.component.jsx';

import logo from './logo.svg';
import './App.css';




class App extends Component {
      constructor() {
        super();

        this.state = {
          monsters: [],
          searchField: ''
        };
      }

      componentDidMount(){
        fetch('https://cors-anywhere.herokuapp.com/https://jsonplaceholder.typicode.com/users')
          .then(response => response.json())
          .then(users => this.setState(({monsters: users})))
      }

      render() {
        const monsters = this.state.monsters;
        const searchField = this.state.searchField;
        const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()),
        );
      console.log(monsters,searchField)

      return(
          <div className="App">
          <h1> Monster Rolodex </h1>

          <SearchBox
            placeholder = 'search monsters'
            handleChange = {e => this.setState({ searchField: e.target.value })}
          />

          <CardList monsters = {filteredMonsters}></CardList>
          
          </div>
      );
      };
    }

export default App;
