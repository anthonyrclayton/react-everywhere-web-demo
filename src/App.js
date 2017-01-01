import React, { Component } from 'react';
import logo from './logo.svg';
import Session from './components/Session'
import './App.css';

const session = {
    "Id": 5445,
    "SessionTime": "0001-01-01T00:00:00",
    "SessionStartTime": "2017-01-10T08:00:00",
    "SessionEndTime": "2017-01-10T12:00:00",
    "Room": null,
    "Rooms": [
      "Indigo Bay"
    ],
    "Title": "7 Languages in 7 Hours",
    "Abstract": "Hands-on experience in seven different languages, ranging from object-oriented to functional, from the cozy and familiar to the eye-squintingly terse and foreign. You'll work through a familiar kata in each of them, showing you how to approach an entirely new language. You'll learn about the strengths and weaknesses of each language out in the real world. You'll also see how each language's quirks can teach us ways to improve the code we write every day.\r\n\r\nYou may not come out of this pre-compiler an expert in all of these languages, but you'll have learned a lot about how to get started with a new one. You may even discover a new passion! At the very least, the next time a new language comes along, you'll have the tools you need to tackle it, and enough knowledge to help you push past the \"what is this syntax even doing\" barrier.\r\n\r\nLanguages: Ruby, Clojure, Haskell, Rust, Scala, Elixir, Go",
    "SessionType": "Pre-Compiler",
    "Tags": [
      "Ruby/Rails",
      "Testing",
      "Functional Programming",
      "Other"
    ],
    "Category": "Programming Principles",
    "Speakers": [
      {
        "Id": "df1a9b69-1b7a-4224-bf28-2796a6cbed61",
        "FirstName": "Amber",
        "LastName": "Conville",
        "GravatarUrl": "//www.gravatar.com/avatar/7c2a83b93fe0e5f2ed4c95c59367259c"
      }
    ]
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>CodeMash Schedule</h2>
        </div>

        <Session {...session} />
      </div>
    );
  }
}

export default App;
