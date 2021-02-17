import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      date: '',
      time: '',
      numberOfGuests: '',
    }


  }



  render() {
    return (
      <form className="reservation-form">
        <input 
        type='text'
        name='guestName'
        placeholder='Name'
        value={ this.state.name }
        onChange={ (event) => this.handleChange(event) }
        />
        <input 
        type='text'
        name='date'
        placeholder='Date (mm/dd)'
        value={ this.state.date }
        onChange={ (event) => this.handleChange(event) }
        />
        <input 
        type='text'
        name='time'
        placeholder='Time'
        value={ this.state.time }
        onChange={ (event) => this.handleChange(event) }
        />
        <input 
        type='text'
        name='numberOfGuests'
        placeholder='Number of Guests'
        value={ this.state.numberOfGuests }
        onChange={ (event) => this.handleChange(event) }
        />
        <button 
        onClick={ (event) => this.handleSubmit(event) }>Make Reservation
        </button>
      </form>
    )
  }

}

export default Form;