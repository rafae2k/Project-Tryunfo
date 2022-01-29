import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import './Form.css';

class Form extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <div className="form">
        <Input
          type="text"
          name="card-name"
          label="Nome da Carta:"
          test="name-input"
        />

        <label htmlFor="card-description">
          Descrição:
          <textarea
            name="card-description"
            id=""
            cols="30"
            rows="5"
            data-testid="description-input"
          />
        </label>

        <Input
          type="number"
          name="attr1"
          label="Atributo 1:"
          test="attr1-input"
        />

        <Input
          type="number"
          name="attr2"
          label="Atributo 2:"
          test="attr2-input"
        />

        <Input
          type="number"
          name="attr3"
          label="Atributo 3:"
          test="attr3-input"
        />

        <Input
          type="text"
          name="card-image"
          label="Link para imagem:"
          test="image-input"
        />

        <label htmlFor="rarity">
          Raridade:
          <select name="rarity" id="" data-testid="rare-input">
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>

        <Input
          type="checkbox"
          name="super-triumph"
          label="Super Triunfo:"
          test="trunfo-input"
        />

        <button type="submit" data-testid="save-button">
          Salvar
        </button>
      </div>
    );
  }
}

export default Form;
