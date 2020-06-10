import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  getEvent = () => {
    fetch('/events')
      .then(response => response.json())
      .then(json => this.setState({events: json}))
      .catch(error => console.error(error))
  }
}

export default App;
