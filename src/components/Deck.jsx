import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class Deck extends React.Component {
  render() {
    const { cards, onRemoveCardClick, filter } = this.props;
    console.log(filter.length > 0);

    if (filter.length > 0) {
      return (
        <section className="card-deck">
          Todas as Cartas
          {filter.map((card) => (
            <div className="card" key={ card.id }>
              <Card { ...card } />
              <button
                type="button"
                onClick={ () => onRemoveCardClick(card.id) }
                data-testid="delete-button"
              >
                Excluir
              </button>
            </div>
          ))}
        </section>
      );
    }

    return (
      <section className="card-deck">
        Todas as Cartas
        {cards.map((card) => (
          <div className="card" key={ card.id }>
            <Card { ...card } />
            <button
              type="button"
              onClick={ () => onRemoveCardClick(card.id) }
              data-testid="delete-button"
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
