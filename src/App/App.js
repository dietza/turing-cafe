import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: [],
      error: '',
    }


  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/reservations')
      .then(response => response.json())
      .then(data => this.setState({reservations: data}))
      .catch(error => this.setState({error: error}))
  }




  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <section className='resy-form'>
          {/* <Form /> */}
        </section>
        <section className='resy-container'>
          {/* <Reservations /> */}
        </section>
      </div>
    )
  }
}

export default App;
