import React, { Component } from 'react';
import '../App.css';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

class NFTCarousel extends Component {
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
