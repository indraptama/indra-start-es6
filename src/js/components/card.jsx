import React from "react";

const Card = () => (
  <div className={style.Card}>
    <h1>this card created with react</h1>
  </div>
);

var style = cssInJS({
  Card: {
    "backgroundColor": "#fff",
    "border": "1px solid #eee",
    "borderRadius": 4,
    "boxShadow": "0px 1px 10px 0px rgba(0,0,0,0.5)",
    "display": "flex",
    "height": 400,
    "padding": "1.5rem",
    "width": 300
  }
});

export default Card;
