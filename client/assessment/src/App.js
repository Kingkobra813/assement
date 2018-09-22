import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Creatures from "./components/Creatures";
import NewCreatureFrom from "./components/NewCreatureForm";

const BASE_URL = "http://localhost:3005";

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      creatures: [],
      value: '',
      name: '',
      image_url: '',
      scary: {
        level: ''
      }
    }
  }

  componentDidMount() {
    axios.get(BASE_URL + "/creatures").then(response => {
      console.log(response.data)
      this.setState({
        creatures: response.data
      })
    })
  }

  handleAdd = () => {
    axios.post(BASE_URL + "/add-creature", {
      name: this.state.name,
      image_url: this.state.image_url,
      scary: this.state.scary.level,
    }).then(response => {
      console.log(this.state.level, "handleadd scarylevel")
      this.setState({
        creatures: response.data
      })
    })
  }

  handleChange = (event, key) => {
    this.setState({
      [key]: event.target.value
    });
  };

  render() {
    //console.log(this.state.creatures.level)
    const creaturesToRender = this.state.creatures.map((creature, index) => {
      return (
        <div key={index}>
          <Creatures creature={creature} />
        </div>
      )
    })
    return (
      <div>
        <NewCreatureFrom
          handleChange={this.handleChange}
          handleAdd={this.handleAdd}
        />

        <div>{creaturesToRender}</div>
      </div>
    );
  }
}

export default App;
