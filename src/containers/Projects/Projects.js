import React, { Component } from 'react'
import Zoomy from 'react-zoomy';
import {
  ImageButton,
  Index
 } from './Projects.style';
import {
  Container,
  Relative
 } from 'theme/grid';
import { A } from 'theme/types';


class Projects extends Component {
  render () {
    return (
      <Container>
        <Relative>
          <Index>
            <h1>01</h1>
          </Index>
          <h1>npm install --save <A href="">react zoomy</A></h1>
        </Relative>
        <Zoomy
          imageUrl={require('assets/DSC_0053.JPG')}
          renderThumbnail={({ showImage }) =>
            <ImageButton onClick={showImage}>
              <img
                src={require('assets/DSC_0053_thumbnail.jpg')}
                alt="friendship"/>
            </ImageButton>
    }/>
      </Container>
    )
  }
}

export default Projects;
