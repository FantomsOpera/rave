import React, { Component } from 'react';
import '../App.css';

import { Grid, Box } from 'theme-ui';
import Tooltip from '@mui/material/Tooltip';

// images
import wftm from './Images/wftm.png';
import usdc from './Images/usdc.png';
import boo from './Images/boo.png';
import spirit from './Images/spirit.png';
import dai from './Images/dai.png';
import tomb from './Images/tomb.png';
import tshare from './Images/tshare.png';
import lqdr from './Images/lqdr.png';
import ust from './Images/ust.png';


const tokens = [
  {
    name: 'wFTM',
    contract: '0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83'
  },
  {
    name: 'USDC',
    contract: '0x04068DA6C83AFCFA0e13ba15A6696662335D5B75'
  },
  {
    name: 'BOO',
    contract: '0x841FAD6EAe12c286d1Fd18d1d525DFfA75C7EFFE'
  },
  {
    name: 'SPIRIT',
    contract: '0x5Cc61A78F164885776AA610fb0FE1257df78E59B'
  },
  {
    name: 'DAI',
    contract: '0x8D11eC38a3EB5E956B052f67Da8Bdc9bef8Abf3E'
  },
  {
    name: 'TOMB',
    contract: '0x6c021Ae822BEa943b2E66552bDe1D2696a53fbB7'
  },
  {
    name: 'TSHARE',
    contract: '0x4cdF39285D7Ca8eB3f090fDA0C069ba5F4145B37'
  },
  {
    name: 'LQDR',
    contract: '0x10b620b2dbAC4Faa7D7FFD71Da486f5D44cd86f9'
  },
  {
    name: 'UST',
    contract: '0x846e4D51d7E2043C1a87E0Ab7490B93FB940357b'
  }
]

class TokenDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      init: false,
      hasUpdated: false,
    }
    this.getTokens = this.getTokens.bind(this);
  }

  async getTokens() {
    var balances = {
      wftm: 0,
      usdc: 0,
      boo: 0,
      spirit: 0,
      dai: 0,
      tomb: 0,
      tshare: 0,
      lqdr: 0,
      ust: 0
    }
    var amt = 0
    await fetch(`https://openapi.debank.com/v1/user/token?id=${this.props.address}&chain_id=ftm&token_id=${tokens[0].contract}`).then(async res => {
      let json = await res.json();
      balances.wftm = json["amount"];
      if (json["amount"] > 0) {
        amt += 1
      }
    });
    await fetch(`https://openapi.debank.com/v1/user/token?id=${this.props.address}&chain_id=ftm&token_id=${tokens[1].contract}`).then(async res => {
      let json = await res.json();
      balances.usdc = json["amount"];
      if (json["amount"] > 0) {
        amt += 1
      }
    });
    await fetch(`https://openapi.debank.com/v1/user/token?id=${this.props.address}&chain_id=ftm&token_id=${tokens[2].contract}`).then(async res => {
      let json = await res.json();
      balances.boo = json["amount"];
      if (json["amount"] > 0) {
        amt += 1
      }
    });
    await fetch(`https://openapi.debank.com/v1/user/token?id=${this.props.address}&chain_id=ftm&token_id=${tokens[3].contract}`).then(async res => {
      let json = await res.json();
      balances.spirit = json["amount"];
      if (json["amount"] > 0) {
        amt += 1
      }
    });
    await fetch(`https://openapi.debank.com/v1/user/token?id=${this.props.address}&chain_id=ftm&token_id=${tokens[4].contract}`).then(async res => {
      let json = await res.json();
      balances.dai = json["amount"];
      if (json["amount"] > 0) {
        amt += 1
      }
    });
    await fetch(`https://openapi.debank.com/v1/user/token?id=${this.props.address}&chain_id=ftm&token_id=${tokens[5].contract}`).then(async res => {
      let json = await res.json();
      balances.tomb = json["amount"];
      if (json["amount"] > 0) {
        amt += 1
      }
    });
    await fetch(`https://openapi.debank.com/v1/user/token?id=${this.props.address}&chain_id=ftm&token_id=${tokens[6].contract}`).then(async res => {
      let json = await res.json();
      balances.tshare = json["amount"];
      if (json["amount"] > 0) {
        amt += 1
      }
    });
    await fetch(`https://openapi.debank.com/v1/user/token?id=${this.props.address}&chain_id=ftm&token_id=${tokens[7].contract}`).then(async res => {
      let json = await res.json();
      balances.lqdr = json["amount"];
      if (json["amount"] > 0) {
        amt += 1
      }
    });
    await fetch(`https://openapi.debank.com/v1/user/token?id=${this.props.address}&chain_id=ftm&token_id=${tokens[8].contract}`).then(async res => {
      let json = await res.json();
      balances.ust = json["amount"];
      if (json["amount"] > 0) {
        amt += 1
      }
    });
    this.setState({
      balances: balances,
      init: true,
      amt: amt
    })
  }

  render() {
    if (!this.state.init) {
      this.getTokens();
    }
    if (this.state.init) {
      if (this.state.amt > 0) {
        return (
        <Grid gap={2} columns={[1, null, this.state.amt]} style={{
          alignItems: "center",
          alignSelf: "center",
          textAlign: "center" }}>
          {this.state.balances.wftm > 0 && <Box bg="primary">
            <Tooltip title={`User holds ${this.state.balances.wftm} wFTM`}>
              <img alt="Token Balance" src={wftm} style={{
                width: '7.5vh'
              }}/>
            </Tooltip>
          </Box>}
          {this.state.balances.usdc > 0 && <Box bg="primary">
            <Tooltip title={`User holds ${this.state.balances.usdc} USDC`}>
              <img alt="Token Balance" src={usdc} style={{
                width: '7.5vh'
              }}/>
            </Tooltip>
          </Box>}
          {this.state.balances.boo > 0 && <Box bg="primary">
            <Tooltip title={`User holds ${this.state.balances.boo} BOO`}>
              <img alt="Token Balance" src={boo} style={{
                width: '7.5vh'
              }}/>
            </Tooltip>
          </Box>}
          {this.state.balances.spirit > 0 && <Box bg="primary">
            <Tooltip title={`User holds ${this.state.balances.spirit} SPIRIT`}>
              <img alt="Token Balance" src={spirit} style={{
                width: '7.5vh'
              }}/>
            </Tooltip>
          </Box>}
          {this.state.balances.dai > 0 && <Box bg="primary">
            <Tooltip title={`User holds ${this.state.balances.dai} DAI`}>
              <img alt="Token Balance" src={dai} style={{
                width: '7.5vh'
              }}/>
            </Tooltip>
          </Box>}
          {this.state.balances.tomb > 0 && <Box bg="primary">
            <Tooltip title={`User holds ${this.state.balances.tomb} TOMB`}>
              <img alt="Token Balance" src={tomb} style={{
                width: '7.5vh'
              }}/>
            </Tooltip>
          </Box>}
          {this.state.balances.tshare > 0 && <Box bg="primary">
            <Tooltip title={`User holds ${this.state.balances.tshare} TSHARE`}>
              <img alt="Token Balance" src={tshare} style={{
                width: '7.5vh'
              }}/>
            </Tooltip>
          </Box>}
          {this.state.balances.lqdr > 0 && <Box bg="primary">
            <Tooltip title={`User holds ${this.state.balances.lqdr} LQDR`}>
              <img alt="Token Balance" src={lqdr} style={{
                width: '7.5vh'
              }}/>
            </Tooltip>
          </Box>}
          {this.state.balances.ust > 0 && <Box bg="primary">
            <Tooltip title={`User holds ${this.state.balances.ust} UST`}>
              <img alt="Token Balance" src={ust} style={{
                width: '7.5vh'
              }}/>
            </Tooltip>
          </Box>}
        </Grid>
      );
    } else {
      return (<p>No tokens.</p>);
    }
    }
    return (<p>Loading Tokens...</p>);
  }
}

export default TokenDisplay;
