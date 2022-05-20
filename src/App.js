import React, { Component } from 'react';

import WrappedHome from './components/Home/Home.js';
import WrappedSearch from './components/Search/Search.js';
import WrappedInfo from './components/Info/Info.js';
import Wrapped404 from './components/404/404.js';

import { Routes, Route } from "react-router-dom";
import { Scrollbar } from "react-scrollbars-custom";

class App extends Component {
  render() {
    return (
    <div className="App">
      <Scrollbar style={{
        width: '100%',
        height: '100%'
      }}>
        <Routes>
          <Route path="/" element={<WrappedHome />} />
          <Route path="/name" element={<WrappedHome />} />
          <Route path="/name/:name" element={<WrappedSearch />} />
          <Route path="/info" element={<WrappedInfo />} />
          <Route path="*" element={<Wrapped404 />} />
        </Routes>
      </Scrollbar>
    </div>
    );
  }
}

export default App;
