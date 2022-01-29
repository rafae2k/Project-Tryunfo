import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <>
        <label htmlFor="card-name">
          Nome da Carta:
          <input type="text" name="card-name" id="" data-testid="name-input" />
        </label>

        <label htmlFor="card-name">
          Descrição:
          <textarea
            name="card-description"
            id=""
            cols="30"
            rows="10"
            data-testid="description-input"
          />
        </label>

        <label htmlFor="attr1">
          <input type="number" name="attr1" id="" data-testid="attr1-input" />
        </label>

        <label htmlFor="attr2">
          Atributo 2:
          <input type="number" name="attr2" id="" data-testid="attr2-input" />
        </label>

        <label htmlFor="attr3">
          Atributo 3:
          <input type="number" name="attr3" id="" data-testid="attr3-input" />
        </label>

        <label htmlFor="card-image">
          Link para Imagem:
          <input
            type="text"
            name="card-image"
            id=""
            data-testid="image-input"
          />
        </label>

        <label htmlFor="rarity">
          Raridade:
          <select name="rarity" id="" data-testid="rare-input">
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>

        <label htmlFor="super-triumph">
          Super trunfo:
          <input
            type="checkbox"
            name="super-triumph"
            id=""
            data-testid="trunfo-input"
          />
        </label>
        <button type="submit" data-testid="save-button">
          Salvar
        </button>
      </>
    );
  }
}

export default Form;
