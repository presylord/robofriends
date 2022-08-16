import React, {Component} from "react";
import CardList from "./CardList";
// import { robots } from "./robots";
import Searchbox from "./SearchBox";
import './App.css'




class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({robots: users}))
  }

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value})


  }

  render() {
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name.toLowerCase().includes(this.state.searchfield)
    })
    return (
      <div className="tc">
        <h1 className="f1">Robofriends</h1>
        <Searchbox searchChange={this.onSearchChange} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
