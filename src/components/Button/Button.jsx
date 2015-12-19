import React from 'react';

const Button = (props) => {
  return (
    <div>
      <button className="Button Button--primary">{ props.name }</button>
    </div>
  );
};

Button.propTypes = {
  name: React.PropTypes.string,
};

Button.defaultProps = {
  name: 'button',
};

export default Button;
