import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class Deck extends React.Component {
  render() {
    const { cards, onRemoveCardClick } = this.props;
    return (
      <section className="card-deck">
        Todas as Cartas
        {cards.map((card) => (
          <div className="card" key={ card.id }>
            <Card { ...card } />
            <button
              type="button"
              onClick={ () => onRemoveCardClick(card.id) }
            >
              Excluir
            </button>
          </div>
        ))}
      </section>
    );
  }
}

Deck.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default Deck;
