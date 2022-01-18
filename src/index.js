import React from 'react';
import ReactDOM from 'react-dom';
import {global} from './global/global';

import {Quotes} from './components/Quotes/Quotes';
import {Nav} from './components/Nav/Nav';




ReactDOM.render(
  <>
    <Nav />
    <Quotes quotesDB={global.quotesDB} />
  </>,
  document.getElementById('root')
);

