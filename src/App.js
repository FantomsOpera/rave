import React, { Component } from 'react';

import WrappedHome from './components/Home/Home.js';
import WrappedSearch from './components/Search/Search.js';
import WrappedInfo from './components/Info/Info.js';
import Wrapped404 from './components/404/404.js';
import WrappedBridge from './components/Bridge/Bridge.js';

import { Routes, Route } from "react-router-dom";
import { Scrollbar } from "react-scrollbars-custom";

function Home() {
  <Scrollbar style={{
    width: '100%',
    height: '100%'
  }}><WrappedHome/></Scrollbar>
}

function Search() {
  <Scrollbar style={{
    width: '100%',
    height: '100%'
  }}><WrappedSearch/></Scrollbar>
}

function Info() {
  <Scrollbar style={{
    width: '100%',
    height: '100%'
  }}><WrappedInfo/></Scrollbar>
}

function E404() {
  <Scrollbar style={{
    width: '100%',
    height: '100%'
  }}><Wrapped404/></Scrollbar>
}

function Bridge() {
  <Scrollbar style={{
    width: '100%',
    height: '100%'
  }}><WrappedBridge/></Scrollbar>
}

/*
<Route path="/" element={<WrappedHome />} />
<Route path="/name" element={<WrappedHome />} />
<Route path="/name/:name" element={<WrappedSearch />} />
<Route path="/info" element={<WrappedInfo />} />
<Route path="/bridge" element={<WrappedBridge />} />
<Route path="/*" element={<Wrapped404 />} />
*/

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
          <Route path="/bridge" element={<WrappedBridge />} />
          <Route path="/*" element={<Wrapped404 />} />
        </Routes>
      </Scrollbar>
    </div>
    );
  }
}

export default App;
