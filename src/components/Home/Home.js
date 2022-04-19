import React, { Component } from 'react';
import logo from '../../RaveBase.png';
import './App.css';
import { useNavigate } from 'react-router-dom';

import Desc from './Desc/Desc.js';
import Gallery from './Gallery/Gallery.js';
import Avatar from './Avatar/Avatar.js';
import Integrations from './Integrations/Integrations.js';

import twitter from '../../images/Twitter-Logo.png';

import constants from '../../constants.js';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      owner: '',
    };
    this.history = props.history;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  handleSubmit(event) {
    this.history(`/${this.state.name}`);
  }

  render() {
    return (
      <>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p style={{
            fontFamily: 'Nunito Sans',
            fontSize: '16px'
          }}>
            {constants["Description"]}
          </p>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="name" style={{
              fontFamily: 'Nunito Sans'
            }}>Search for a Name: </label>
            <br></br>
              <input
                id="name"
                type="text"
                className="searchBar"
                value={this.state.name}
                onChange={this.handleChange}
                placeholder={constants["FindName"]}
              />
            <button type="submit" className="search" style={{
              fontFamily: 'Nunito Sans'
            }}>Submit</button>
          </form>
          <br />
          <div
            style={{
              textAlign: 'center',
              marginLeft: 'auto',
              marginRight: 'auto',
              display: 'inline'
            }}>
            <Desc />
            <Gallery />
            <Avatar />
            <Integrations />
          </div>
          <br /><br />
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="name" style={{
              fontFamily: 'Nunito Sans'
            }}>Ready to reinvent your address?</label>
            <br></br>
              <input
                id="name"
                type="text"
                className="searchBar"
                onChange={this.handleChange}
                placeholder={constants["FindName"]}
              />
            <button type="submit" className="search" style={{
              fontFamily: 'Nunito Sans'
            }}>Submit</button>
          </form>
          <br />
          <div
            style={{
              textAlign: 'center',
              marginLeft: 'auto',
              marginRight: 'auto',
              display: 'inline'
            }}>
            <a href="https://twitter.com/rave_names" target="_blank" rel="noreferrer">
              <img src={twitter} style={{
                width: '7vh'
              }} alt="twiiter" />
            </a>
          </div>
        </header>
      </>
    );
  }
}

const WrappedHome = props => {
  const history = useNavigate()

  console.log(history)

  return <Home history={history} {...props} />
}

export default  WrappedHome;
