import React, { Component } from 'react';
import './App.css';

import Reservations from '../Reservations/Reservations';
import Form from '../Form/Form';


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

  addReservation = (reservation) => {
    this.setState({
      reservations: [...this.state.reservations, reservation]
    })
  }


  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <section className='resy-form'>
          <Form addReservation={ this.addReservation }/>
        </section>
        <section className='resy-container'>
          <Reservations reservations={ this.state.reservations }/>
        </section>
      </div>
    )
  }
}

export default App;
