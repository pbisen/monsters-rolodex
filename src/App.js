import { Component } from 'react';

import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

class App extends Component {

  constructor() {
    super();

    console.log("Inside Constructor")

    this.state = {
      monsters: [],
      searchString: "",
    }

  }

  onSearchChange = (event) => {
    this.setState(() => {
      return { searchString: event.target.value.toLowerCase() }
    },
    () => {
        console.log("Inside Search: ", this.state)
    })
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then(
      response => response.json())
      .then(data => this.setState(() => {
        return { monsters: data, filteredMonsters: data }
      }, console.log("Inside Mount: ", this.state)))
  }

  render() {

    const {monsters, searchString} = this.state;
    const {onSearchChange} = this;

    let filteredMonsters = monsters.filter((monster) => {
      return  monster.name.toLowerCase().includes(searchString)
     })

     

     console.log("Inside Render: ", this.state)

    return (
      <div className="App">
          <h1>Monster's Rolodex</h1>
          <SearchBox onChangeHandler={onSearchChange} classname="search-box-monsters" placeholder="search monsters" />
          <CardList dataMonsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
