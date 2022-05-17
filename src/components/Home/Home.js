import React, { Component } from 'react';
import logo from '../../RaveBase.png';
import './App.css';
import { useNavigate } from 'react-router-dom';

import Desc from './Desc/Desc.js';
import Gallery from './Gallery/Gallery.js';
import Avatar from './Avatar/Avatar.js';
import Integrations from './Integrations/Integrations.js';

import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css";

import twitter from '../../images/Twitter-Logo.png';
import github from '../../images/gh.png';

import constants from '../../constants.js';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      owner: '',
      oxswitch: false,
    };
    this.history = props.history;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSwitch = this.handleSwitch.bind(this);
    let toastToShow = Math.floor(Math.random() * 3);
    if (toastToShow === 0) {
      Toastify({
        text: `Buy our governance token, $OPR on SpiritSwap!`,
        duration: `3000`,
        destination: `https://swap.spiritswap.finance/#/swap/0x16dbD24713C1E6209142BCFEED8C170D83f84924`
      }).showToast();
    } else if (toastToShow === 1) {
      Toastify({
        text: `Try searching for an 0x-prefixed name!`,
        duration: `3000`,
      }).showToast();
    } else if (toastToShow === 2) {
      Toastify({
        text: `Check out the treasury stats!`,
        duration: `3000`,
        destination: `https://rave.domains/treasury/info`
      }).showToast();
    }
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  handleSwitch(event) {
    this.setState({ oxswitch: event.target.value });
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
                width: '4vh'
              }} alt="twiiter" />
            </a>
            <a href="https://github.com/FantomsOpera/rave" target="_blank" rel="noreferrer">
              <img src={github} style={{
                width: '4vh',
                paddingLeft: '14px'
              }} alt="gihub" />
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
