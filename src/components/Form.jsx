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
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form action="" className="form">
        <h2>Adicionar nova carta</h2>
        <Input
          type="text"
          name="cardName"
          label="Nome da Carta:"
          test="name-input"
          value={ cardName }
          onInputChange={ onInputChange }
        />

        <label htmlFor="card-description">
          Descrição:
          <textarea
            name="cardDescription"
            cols="30"
            rows="5"
            data-testid="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>

        <Input
          type="number"
          name="cardAttr1"
          label="Atributo 1:"
          test="attr1-input"
          value={ cardAttr1 }
          onInputChange={ onInputChange }
          id="attr1"
        />

        <Input
          type="number"
          name="cardAttr2"
          label="Atributo 2:"
          test="attr2-input"
          value={ cardAttr2 }
          onInputChange={ onInputChange }
        />

        <Input
          type="number"
          name="cardAttr3"
          label="Atributo 3:"
          test="attr3-input"
          value={ cardAttr3 }
          onInputChange={ onInputChange }
        />

        <Input
          type="text"
          name="cardImage"
          label="Link para imagem:"
          test="image-input"
          value={ cardImage }
          onInputChange={ onInputChange }
        />

        <label htmlFor="rarity">
          Raridade:
          <select
            name="cardRare"
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
          >

            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>

          </select>
        </label>

        <label htmlFor="cardTrunfo">
          Super Trunfo:
          <input
            type="checkbox"
            name="cardTrunfo"
            data-testid="trunfo-input"
            value={ cardTrunfo }
            onChange={ onInputChange }
            checked={ cardTrunfo }
          />
        </label>

        <button
          type="submit"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.number,
  cardAttr2: PropTypes.number,
  cardAttr3: PropTypes.number,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
}.isRequired;

export default Form;
