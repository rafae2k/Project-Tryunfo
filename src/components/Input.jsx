import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Input extends Component {
  render() {
    const { inputType, name, value, test, label, onInputChange } = this.props;
    return (
      <label htmlFor={ name }>
        {label}
        <input
          type={ inputType }
          name={ name }
          value={ value }
          data-testid={ test }
          onChange={ onInputChange }
        />
      </label>
    );
  }
}

export default Input;
