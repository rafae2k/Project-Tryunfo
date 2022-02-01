import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class Deck extends React.Component {
  render() {
    const { cards, onRemoveCardClick, found, filter } = this.props;

    if (found) {
      return (
        <div style={ { display: 'flex', direction: 'column' } }>
          <h2>Todas as Cartas</h2>
          <section className="card-deck">
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
        </div>
      );
    }

    return (
      <div style={ { display: 'flex', direction: 'column' } }>
        <h2>Todas as Cartas</h2>
        <section className="card-deck">
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
      </div>
    );
  }
}

Deck.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default Deck;
