import { injectGlobal } from 'styled-components';
import {
  black
} from 'theme/variables';

/* eslint-disable */
injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Roboto+Slab');

  body {
    margin 0;
    font-family: 'Roboto Slab', serif;
    font-size: 20px;
    color: ${black};
  }

  h1 , h2, h3 {
    font-weight: normal;
  }

`
