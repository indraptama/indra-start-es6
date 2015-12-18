// import React from 'react';
//
// const Button = (props) => {
//   return (
//     <div>
//       <button className="Button Button--primary">{ props.name }</button>
//     </div>
//   );
// };
//
// Button.propTypes = {
//   name: React.PropTypes.string,
// };
//
// Button.defaultProps = {
//   name: 'button',
// };
//
// export default Button;

import React from 'react';

const propTypes = {
  name: React.PropTypes.sting,
};

const defaultProps = {
  name: 'indra',
};

export default class Button extends React.Component {
  render() {
    return (
      <button className="Button Button--primary">{this.props.name}</button>
    );
  }
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
