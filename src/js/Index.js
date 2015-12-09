'use strict';
import React from 'react';
import ReactDom from 'react-dom';

class Homes extends React.Component {
  let style= cssInJs({
    test: {
      "display": "block"
    }
  )};
  render() {
    return (
      <div classNames={style.test} />
    );
  }

}

export default Homes;

ReactDom.render(<Homes />, document.querySelector('main'));
