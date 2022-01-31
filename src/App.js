import React from 'react';
import { v4 as uuid } from 'uuid';
import Card from './components/Card';
import Form from './components/Form';
import initialState from './initialState';

import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);

    this.state = { ...initialState, cards: [], hasTrunfo: false };
  }

  componentDidMount() {
    document.title = 'Tryunfo';
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

  render() {
    const { cards } = this.state;
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
        <div className="card-deck">
          Todas as Cartas
          {cards.length > 0 ? cards.map((card) => (<Card { ...card } key={ card.id } />))
            : <div />}
        </div>
      </>
    );
  }
}

export default App;
