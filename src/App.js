import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  componentDidMount() {
    document.title = 'Tryunfo';
  }

  render() {
    return (
      <div>
        <Form />
        <Card />
      </div>
    );
  }
}

export default App;
