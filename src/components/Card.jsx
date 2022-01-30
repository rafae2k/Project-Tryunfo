import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
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
    } = this.props;

    return (
      <div className="card-visualization">
        <h2>Pré Visualização</h2>
        <div className="card">
          <h3 data-testid="name-card">{ cardName }</h3>
          <img src={ cardImage } alt={ cardName } data-testid="image-card" />
          <div className="atributes">
            <p data-testid="description-card">
              Descrição:
              { cardDescription }
            </p>
            <p data-testid="attr1-card">{ cardAttr1 }</p>
            <p data-testid="attr2-card">{ cardAttr2 }</p>
            <p data-testid="attr3-card">{ cardAttr3 }</p>
            <p data-testid="rare-card">{ cardRare }</p>
            {cardTrunfo && <p data-testid="trunfo-card">Super Trunfo</p>}
          </div>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.number,
  cardAttr2: PropTypes.number,
  cardAttr3: PropTypes.number,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
}.isRequired;

export default Card;
