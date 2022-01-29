import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import './Form.css';

class Form extends Component {
  constructor() {
    super();
    this.onInputChange = this.onInputChange.bind(this);

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: '',
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      rafinho: '',
    };
  }

  onInputChange(event) {
    console.log(event);
  }

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
        {/* <Input
          type="text"
          name="cardName"
          label="Nome da Carta:"
          test="name-input"
          value={ cardName }
          onChange={ this.onInputChange }
        /> */}

        <label htmlFor="">
          <input type="text" name="rafinho" id="" onChange={ onInputChange }/>
        </label>

        {/* <label htmlFor="card-description">
          Descrição:
          <textarea
            name="cardDescription"
            id=""
            cols="30"
            rows="5"
            data-testid="description-input"
            value={ cardDescription }
            onChange={ this.onInputChange }
          />
        </label>

        <Input
          type="number"
          name="cardAttr1"
          label="Atributo 1:"
          test="attr1-input"
          value={ cardAttr1 }
          onChange={ onInputChange }
        />

        <Input
          type="number"
          name="cardAttr2"
          label="Atributo 2:"
          test="attr2-input"
          value={ cardAttr2 }
          onChange={ onInputChange }
        />

        <Input
          type="number"
          name="cardAttr3"
          label="Atributo 3:"
          test="attr3-input"
          value={ cardAttr3 }
          onChange={ onInputChange }
        />

        <Input
          type="text"
          name="cardImage"
          label="Link para imagem:"
          test="image-input"
          value={ cardImage }
          onChange={ onInputChange }
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

        <Input
          type="checkbox"
          name="cardTrunfo"
          label="Super Trunfo:"
          test="trunfo-input"
          value={ cardTrunfo }
          onChange={ onInputChange }
          checked={ hasTrunfo }
        />

        <button
          type="submit"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button> */}
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
}.isRequired;

export default Form;
