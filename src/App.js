import React, { Component } from 'react';
import WrappedHome from './components/Home/Home.js';
import WrappedSearch from './components/Search/Search.js';
import WrappedInfo from './components/Info/Info.js';
import { Routes, Route } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<WrappedHome />} />
          <Route path="/:name" element={<WrappedSearch />} />
          <Route path="/treasury/info" element={<WrappedInfo />} />
        </Routes>
      </div>
    );
  }
}

export default App;
