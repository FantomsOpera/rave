import React, { Component } from 'react';
import logo from '../../RaveBase.png';
import './App.css';
import { useNavigate } from 'react-router-dom';

import { Grid, Box } from 'theme-ui';

import { getInfo } from '../../helpers/getInfo.js';

import ftmlogo from './images/ftm.svg';
import screamlogo from './images/scream.png';


class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    getInfo().then(res => {
      this.setState(res);
    })
  }

  render() {
    return (
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p style={{
            fontFamily: 'Nunito Sans',
            fontSize: '24px'
          }}>
            Rave Names treasury overview
          </p>
          {this.state.totalSupply && <p style={{
            fontFamily: 'Nunito Sans',
            fontSize: '32px'
          }}>{parseInt(this.state.totalSupply._hex, 16) || "loading..."} Rave Names registered</p>}
          <p style={{
            fontFamily: 'Nunito Sans',
            fontSize: '32px'
          }}>Total treasury value (USD): ${this.state.totalHoldingsPrice || "loading..."}</p>
          <div style={{paddingLeft: 'calc(50% - 41vh)', paddingTop: "0vh",}}>
            <Grid gap={2} columns={[2, null, 2]} style={{
              alignItems: "center",
              alignSelf: "center",
              textAlign: "center" ,
              width: "75vh",}}>
                <Box bg="primary" style={{
                  alignItems: 'right',
                }}>
                  <img src={ftmlogo} alt="Fantom (FTM) logo" style={{
                    height: '17vh'
                  }} />
                </Box>
                <Box bg="primary" style={{
                  alignItems: 'left',
                }}>
                  <p style={{
                    fontSize: '24px',
                    paddingRight: '2.5vh'
                  }}>{this.state.ftmBalance || "loading..."} wFTM held by the treasury.</p> <div style={{fontSize: '18px'}}> Equal to {this.state.ftmHoldingsPrice || "loading..."} USD</div>
                </Box>
{/*========================================================================*/}
                <Box bg="primary" style={{
                  alignItems: 'right',
                }}>
                  <img src={screamlogo} alt="Scream Protocol logo" style={{
                    height: '17vh'
                  }} />
                </Box>
                <Box bg="primary" style={{
                  alignItems: 'left',
                }}>
                  <p style={{
                    fontSize: '24px',
                    paddingRight: '2.5vh'
                  }}>${this.state.debt} in treasury debt.</p>
                </Box>
            </Grid>
          </div>
          <br />
        </header>
    );
  }
}

const WrappedInfo = props => {
  const history = useNavigate()

  console.log(history)

  return <Info history={history} {...props} />
}

export default  WrappedInfo;
