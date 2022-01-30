import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.onInputChange = this.onInputChange.bind(this);

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'Normal',
      cardTrunfo: '',
      hasTrunfo: false,
      isSaveButtonDisabled: true,
    };
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
    console.log(event);
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
    } = this.state;

    return (
      <div className="card-builder">
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />

        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
