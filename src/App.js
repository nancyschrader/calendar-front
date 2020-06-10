import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {
    events: []
  }
  componentDidMount() {
    this.getEvents()
  }
  getEvent = () => {
    fetch('/events')
      .then(response => response.json())
      .then(json => this.setState({ events: json }))
      .catch(error => console.error(error))
  }
  render() {
    return (
      <div className="App">
        <div className='container'>
          <Header />
          <Aside />
          <Main events={this.state.events} />
          <Nav />
          <Footer />
        </div>
      </div>
    )
  }
}

export default App;
