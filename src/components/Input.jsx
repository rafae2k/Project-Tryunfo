import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Input extends Component {
  render() {
    const { type, name, value, test, label, onInputChange, id } = this.props;
    return (
      <label htmlFor={ name }>
        {label}
        <input
          type={ type }
          name={ name }
          value={ value }
          data-testid={ test }
          onChange={ onInputChange }
          id={ id }
        />
      </label>
    );
  }
}

Input.propTypes = {
  inputType: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  test: PropTypes.string,
  label: PropTypes.string,
  onInputChange: PropTypes.func,
}.isRequired;

export default Input;
