import React from 'react';
import Button from './Button/Button.jsx';

const style = cssInJS({
  Card: {
    'alignItems': 'center',
    'backgroundColor': '#fff',
    'border': '1px solid #eee',
    'borderRadius': 4,
    'boxShadow': '0px 1px 10px 0px rgba(0,0,0,0.25)',
    'display': 'flex',
    'flexDirection': 'column',
    'height': 400,
    'justifyContent': 'space-between',
    'padding': '0.8rem',
    'width': 300,
  },
});

const Card = (name) => (
  <div className={style.Card}>
    <h1>this card created with react</h1>
    <Button name="test"/>
  </div>
);

export default Card;
