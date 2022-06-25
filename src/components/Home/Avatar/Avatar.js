import React, { Component } from 'react';
import '../App.css';
import {
  Heading,
  Text,
  Card,
  Image
} from "theme-ui";
import logo from '../../../images/avatar.svg'

class Gallery extends Component {
  render() {
    return (
    <div style={{paddingLeft: 'calc(50% - 75vh)'}}>
      <Card sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        alignSelf: "center",
        textAlign: "center",
        padding: "28px 24px",
        borderRadius: "20px",
        backgroundColor: "var(--special-w)",
        width: "150vh",
      }} mt="42px">
        <Heading as="h2" style={{
          fontFamily: 'Nunito Sans'
        }}>
          Upgrade your <Text className={'hi-gradient'}>on-chain identity</Text>
        </Heading>
        <Text style={{
          fontFamily: 'Nunito Sans'
        }}>
          <strong>Set a <Text className={'hi-gradient reverse'}>custom avatar</Text> , to use anywhere</strong>
          <br />
          Store image metadata in the Rave system!
        </Text>
        <Image style={{
          width: '40vh',
          padding: '20px'
        }} src={logo} />
      </Card>
    </div>
    );
  }
}

export default Gallery;
