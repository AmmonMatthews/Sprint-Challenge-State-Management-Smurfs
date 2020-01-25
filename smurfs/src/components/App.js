import React, { Component } from "react";
import "./App.css";
import SmurfsList from "./SmurfsList";
import AddSmurfs from "./AddSmurfs"

class App extends Component {
  render() {
    return (
      <div className="App">
        <SmurfsList/>
        <AddSmurfs />
      </div>
    );
  }
}

export default App;
