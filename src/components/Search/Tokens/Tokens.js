import React, { Component } from 'react';
import '../App.css';
import {
  Image
} from "theme-ui";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const tokens = {
  0 => {
    name: 'FTM',
    contract: '0x'
  },
  1 => {
    name: 'wFTM',
    contract: '0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83'
  },
  2 => {
    name: 'USDC',
    contract: '0x04068DA6C83AFCFA0e13ba15A6696662335D5B75'
  },
  3 => {
    name: 'BOO',
    contract: '0x841FAD6EAe12c286d1Fd18d1d525DFfA75C7EFFE'
  },
  4 => {
    name: 'SPIRIT',
    contract: '0x5Cc61A78F164885776AA610fb0FE1257df78E59B'
  },
  5 => {
    name: 'DAI',
    contract: '0x8D11eC38a3EB5E956B052f67Da8Bdc9bef8Abf3E'
  },
  6 => {
    name: 'TOMB',
    contract: '0x6c021Ae822BEa943b2E66552bDe1D2696a53fbB7'
  },
  7 => {
    name: 'TSHARE',
    contract: '0x4cdF39285D7Ca8eB3f090fDA0C069ba5F4145B37'
  },
  8 => {
    name: 'LQDR',
    contract: '0x10b620b2dbAC4Faa7D7FFD71Da486f5D44cd86f9'
  }
}

class TokenDisplay extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div style={{paddingLeft: 'calc(50% - (22.5vh + 11px))'}}>
      <Carousel width="50%" showThumbs={this.props.showThumbs}>
        {this.props.nfts.nekos.map((obj, i) => {
          let logo = `https://storage.googleapis.com/cyber-neko/genesis-collection/full/${obj}`

          return (
          <div>
            <img
              className="d-block w-100"
              src={logo}
              alt='Cyber Neko'
            />

            <p>{`Cyber Neko #${obj}`}</p>
          </div>)
        })}
        {this.props.nfts.umans.map((obj, i) => {
          let logo = `https://ancestral-assets.s3.amazonaws.com/Ancestral+Uman+${obj}.png`

          return (
          <div>
            <img
              className="d-block w-100"
              src={logo}
              alt='Ancestral Uman'
            />

            <p>{`Ancestral Uman #${obj}`}</p>
          </div>)
        })}
        {this.props.nfts.cyber.map((obj, i) => {
          let logo = `https://raw.githubusercontent.com/Pokesi/blksite/main/images/${obj}.png`

          return (
          <div>
            <img
              className="d-block w-100"
              src={logo}
              alt='Cyber Fantom'
            />

            <p>{`Cyber Fantom #${obj}`}</p>
          </div>)
        })}
        {this.props.nfts.og.map((obj, i) => {
          let logo = `https://mint.fantoms.art/imagesa/${obj}.png`

          return (
          <div>
            <img
              className="d-block w-100"
              src={logo}
              alt='OG Fantom'
            />

            <p>{`OG Fantom #${obj}`}</p>
          </div>)
        })}
        {this.props.nfts.shiba.map((obj, i) => {
          let logo = `https://o7glhmote9.execute-api.us-east-1.amazonaws.com/shibaURL?index=${obj}`

          return (
          <div>
            <img
              className="d-block w-100"
              src={logo}
              alt='ShibaFantom'
            />

            <p>{`ShibaFantom #${obj}`}</p>
          </div>)
        })}
        {this.props.nfts.rabbits.map((obj, i) => {
          let logo = `https://ipfs.io/ipfs/QmfNMUDEUuCkJdbejeHfS52zowT6TG2v1bXGeZhNohDMFh/${obj}.png`

          return (
          <div>
            <img
              className="d-block w-100"
              src={logo}
              alt='DegeneRabbits'
            />

            <p>{`DegeneRabbit #${obj}`}</p>
          </div>)
        })}
        {this.props.nfts.chunk.map((obj, i) => {
          let logo = `https://mint.chunk-nft.com/assets/web3/images/Chunk%200${obj}.png`

          return (
          <div>
            <img
              className="d-block w-100"
              src={logo}
              alt='ChunkNFT'
            />

            <p>{`Chunk #${obj}`}</p>
          </div>)
        })}
        {this.props.nfts.ppunks.map((obj, i) => {
          let logo = `https://clouflare-ipfs.com/ipfs/QmQmoSqi4GYzMjy9aAPzouUiZgT3LkJT5zf4iweieEPQYx/${obj}.png`

          return (
          <div>
            <img
              className="d-block w-100"
              src={logo}
              alt='Pixel Doodled Punk'
            />

            <p>{`PDP #${obj}`}</p>
          </div>)
        })}
      </Carousel>
    </div>
    );
  }
}

export default NFTCarousel;
