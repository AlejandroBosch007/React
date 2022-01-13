import React from 'react';
import ReactDOM from 'react-dom';

import {Counter} from './components/Counter/Counter';
import {Nav} from './components/Nav/Nav';

ReactDOM.render(
  <>
    <Nav />
    <Counter/>
  </>,
  document.getElementById('root')
);

