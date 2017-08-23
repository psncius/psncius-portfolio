import React, { Component } from 'react'
import Zoomy from 'react-zoomy';
import {
  ImageButton,
  Index,
  ImageContainer
 } from './Projects.style';
import {
  Container,
  Relative,
  Flex
 } from 'theme/grid';
import { A } from 'theme/types';
import ParallaxImage from 'react-image-parallax2';


class Projects extends Component {
  render () {
    return (
      <Container>
        <Relative marginBottom="100px">
          <Index>
            <h1>01</h1>
          </Index>
          <h1>npm install --save <A href="">react zoomy</A></h1>
        </Relative>
        <Flex justify={'center'}>
          <Zoomy
            imageUrl={require('assets/DSC_0053.JPG')}
            renderThumbnail={({ showImage }) =>
            <ImageButton onClick={showImage}>
              <img
                src={require('assets/DSC_0053_thumbnail.jpg')}
                alt="friendship"/>
            </ImageButton>
          }
          scale={[1.1,1.1]}
          imageProps={{
            style: {
              width: '100vw',
              height: 'auto'
            }
          }}
          />
        </Flex>
        <Relative marginBottom="100px">
          <Index>
            <h1>02</h1>
          </Index>
          <h1>npm install --save <A href="">react-image-parallax2</A></h1>
        </Relative>
        <ImageContainer>
          <ParallaxImage
            reduceHeight={1/3}
            src={require('assets/up.JPG')}/>
        </ImageContainer>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </Container>
    )
  }
}

export default Projects;
