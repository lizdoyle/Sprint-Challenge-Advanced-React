import React from 'react';
import axios from "axios";
import PlayerCard from "./components/PlayerCard";
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: [],
      darkMode: false


    }

  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/players')
      .then((res) => {
        this.setState({ players: res.data });
        console.log("CDM in App.js:", this.state)
      })
      .catch(err => console.log(err))

  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.players !== this.state.players) {
  //     .then((res) => {
  //       this.setState({})
  //     })
  //    .catch(err => console.log(err))
  //   }

  // }


  render() {
    return (
      <div className="App">
        <h1>Top 100 Players</h1>
        <PlayerCard players={this.state.players} />
      </div>
    );
  }
}

export default App;