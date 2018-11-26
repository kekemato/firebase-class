import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { database } from './firebase'

class App extends Component {

  componentDidMount() {
    database.ref('/kulturalne')
      .on('value', (snapshot) => {
        const firebaseData = Object.entries(
          snapshot.val() || {}
        )

        const data = firebaseData.map(([id, value]) => {
          // value.id = id;
          return value;
        })
        console.log(data)
      })
    const newEvent = {
      name: "Les Miserables",
      date: "05.12.2018",
      description: "american musical based on french story"
    }

    database.ref('/events').push(newEvent)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    )
  }
}

export default App
