import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Input extends Component {
  render() {
    const { inputType, name, value, test, label } = this.props;
    return (
      <label htmlFor={name}>
        {label}
        <input type={inputType} name={name} value="" data-testid={test} />
      </label>
    );
  }
}

export default Input;
