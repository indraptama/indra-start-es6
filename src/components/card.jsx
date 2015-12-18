import React from 'react';
import Button from './button/index.jsx';

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

const Card = () => (
  <div className={style.Card}>
    <h1>this card created with react</h1>
    <Button name={this.props.name}/>
  </div>
);

export default Card;
