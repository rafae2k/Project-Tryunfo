import React from 'react';
import { v4 as uuid } from 'uuid';
import initialState from './initialState';
import Card from './components/Card';
import Form from './components/Form';
import Deck from './components/Deck';

import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.removeCard = this.removeCard.bind(this);
    this.handleFilter = this.handleFilter.bind(this);

    this.state = { ...initialState,
      cards: [],
      hasTrunfo: false,
      filter: [],
      found: false };
  }

  componentDidMount() {
    document.title = 'Tryunfo';
  }

  handleFilter({ target: { value } }) {
    const { cards } = this.state;

    const filterByName = cards.filter(({ cardName }) => (
      cardName.toLowerCase().includes(value.toLowerCase())));

    if (filterByName.length > 0) {
      this.setState({ filter: filterByName,
        found: true,
      });
    }
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, this.formValidation);
  }

  onSaveButtonClick(event) {
    event.preventDefault();
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;

    const createCard = { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      id: uuid(),
    };

    this.setState(({ cards: prevCardList }) => ({
      cards: [...prevCardList, createCard],
    }));

    if (cardTrunfo) this.setState({ hasTrunfo: true });

    this.setInitialState();
  }

  setInitialState() {
    this.setState({ ...initialState });
  }

  formValidation() {
    const inputIsValid = this.inputValidation();
    const attrIsValid = this.atributesValidation();
    if (inputIsValid && attrIsValid) this.setState({ isSaveButtonDisabled: false });
    else this.setState({ isSaveButtonDisabled: true });
  }

  inputValidation() {
    const { cardName, cardDescription, cardImage, cardRare } = this.state;
    const arr = [cardName, cardDescription, cardImage, cardRare];
    return arr.map((value) => value.trim()).every((value) => value.length);
  }

  atributesValidation() {
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;

    const maxSumAttr = 210;
    const maxInput = 90;

    const attrInput = [+cardAttr1, +cardAttr2, +cardAttr3];
    const sumAttr = attrInput.reduce((a, b) => a + b) <= maxSumAttr;
    const attrRange = attrInput.every((value) => value >= 0 && value <= maxInput);

    const isValid = sumAttr && attrRange;

    return isValid;
  }

  removeCard(cardId) {
    const { cards } = this.state;
    const { cardTrunfo } = cards.find(({ id }) => id === cardId);

    this.setState(({ hasTrunfo: prevHasTrunfo }) => ({
      cards: cards.filter(({ id }) => id !== cardId),
      hasTrunfo: cardTrunfo ? !prevHasTrunfo : prevHasTrunfo,
    }));
  }

  render() {
    return (
      <>
        <div className="card-builder">
          <Form
            { ...this.state }
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
          />

          <Card { ...this.state } />

        </div>

        <div
          style={ {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'self-start',
            margin: '20px 80px',
            gap: '20px',
          } }
        >
          <label htmlFor="filter">
            Filtro:
            <input
              type="text"
              name="filter"
              value={ this.cardFilter }
              data-testid="name-filter"
              onChange={ this.handleFilter }
            />
          </label>
          <Deck
            { ...this.state }
            onRemoveCardClick={ this.removeCard }
          />
        </div>

      </>
    );
  }
}

export default App;
