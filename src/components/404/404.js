import React, { Component } from 'react';
import logo from '../../RaveBase.png';
import './App.css';

class E404 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      owner: '',
      oxswitch: false,
    };
  }

  render() {
    return (
      <>
        <header className="App-header" style={{
          paddingTop: '30vh'
        }}>
          <img src={logo} className="App-logo" alt="logo" />
          <p style={{
            fontFamily: 'Nunito Sans',
            fontSize: '16px',
          }}>
            404 not found. <a href="https://rave.domains/">Back to rave.domains</a>
          </p>
        </header>
      </>
    );
  }
}

const Wrapped404 = props => {
  return <E404 {...props} />
}

export default  Wrapped404;
