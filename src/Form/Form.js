import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      date: '',
      time: '',
      numberOfGuests: '',
    }
  }

  handleInputs = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const newReservation = {
      id: Date.now(),
      name: this.state.name,
      date: this.state.date,
      time: this.state.time,
      numberOfGuests: this.state.numberOfGuests,
    }

    this.props.addReservation(newReservation);
    this.clearInputs();
  }

  clearInputs = () => {
    this.setState({
      name: '',
      date: '',
      time: '',
      numberOfGuests: '',
    })
  }

  render() {
    return (
      <form className="reservation-form">
        <input 
        type='text'
        name='name'
        placeholder='Name'
        value={ this.state.name }
        onChange={ (event) => this.handleInputs(event) }
        />
        <input 
        type='text'
        name='date'
        placeholder='Date (mm/dd)'
        value={ this.state.date }
        onChange={ (event) => this.handleInputs(event) }
        />
        <input 
        type='text'
        name='time'
        placeholder='Time'
        value={ this.state.time }
        onChange={ (event) => this.handleInputs(event) }
        />
        <input 
        type='text'
        name='numberOfGuests'
        placeholder='Number of Guests'
        value={ this.state.numberOfGuests }
        onChange={ (event) => this.handleInputs(event) }
        />
        <button 
        onClick={ (event) => this.handleSubmit(event) }>Make Reservation
        </button>
      </form>
    )
  }

}

export default Form;