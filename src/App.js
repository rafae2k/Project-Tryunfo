import React from 'react';
import Form from './components/Form/Form';

class App extends React.Component {
  componentDidMount() {
    document.title = 'Tryunfo';
  }

  render() {
    return (
      <div>
        <Form />
      </div>
    );
  }
}

export default App;
