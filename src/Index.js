import React from 'react';
import ReactDom from 'react-dom';
import Card from './components/card.jsx';

const test = {
  name: 'hallo World',
};

ReactDom.render(<Card name={test.name}/>, document.querySelector('#content'));

// const riot = require('riot');
// require('./components/Button/Button.tag');
// riot.mount('my-button');
