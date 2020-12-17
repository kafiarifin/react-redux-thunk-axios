import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import SearchBox from './components/layout/SearchBox';
import SearchResults from './components/pages/SearchResults';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <SearchBox />
        <SearchResults />
      </div>
    );
  }
}

export default App;
