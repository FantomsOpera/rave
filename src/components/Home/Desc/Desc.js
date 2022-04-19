import React, { Component } from 'react';
import '../App.css';
import {
  Heading,
  Text,
  Card,
  Image
} from "theme-ui";
import logo from '../../../images/comparison.svg'

class Desc extends Component {
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
          By the community, for the community
        </Heading>
        <Text style={{
          fontFamily: 'Nunito Sans'
        }}>
          <strong>The cheapest reservation fees in all of crypto</strong>
          <br />
          Why pay $50, when you can pay just 5 FTM?
        </Text>
        <Image style={{
          width: '125vh',
          padding: '20px'
        }} src={logo} />
      </Card>
    </div>
    );
  }
}

export default Desc;
