import React from 'react';
import ReactDom from 'react-dom';
import Card from './components/card.jsx';

const test = {
  name: 'hallo',
};

ReactDom.render(<Card name={test.name}/>, document.querySelector('#content'));
