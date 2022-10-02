import React, { Component } from 'react';
import Container from './components/containers/Container';
import Container2 from './components/containers/Container2';


class App extends Component {
  constructor() {
    super();

    // this.state = {
    //   number: 0}
  }

  render() {
    return (
      <div>
        <div>
          <Container2 /> 
        </div>
        
        <div>
          <Container /> 
        </div>
      </div>
    )
  }
}

export default App;