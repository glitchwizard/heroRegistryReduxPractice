import React from 'react';
import styles from './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('submit', this.state);
  }

  render() {
    return (
      <div className={styles.app}>
        <h1>React Application</h1>
        <form onSubmit={this.handleSubmit}>
          <p>Your Name</p>
          <input id='heroName' name='name' type='text' onChange={this.handleChange} />
          <p>Your Powers</p>
          <textarea id='heroPowers' name='powers' type='text' onChange={this.handleChange} />
          <div>
            <button type='submit'>Submit</button>
          </div>
        </form>
      </div> 
    );
  }
}

export default App;
