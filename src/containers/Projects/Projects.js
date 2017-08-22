import React, { Component } from 'react'
import Zoomy from 'react-zoomy';
import {
  ImageButton
} from './Projects.style';
import {
  Container
} from 'theme/grid';


class Projects extends Component {
  render () {
    return (
      <Container>
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
