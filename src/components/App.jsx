import React from 'react';
import styles from './App.css';
import * as actions from './../actions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log('this.propsssss', this.props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLogCurrentReduxState = this.handleLogCurrentReduxState.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('handleSubmit\n', this.state.name, '\n', this.state.powers);
    this.props.dispatch(actions.addNewHero(this.state.name, this.state.powers));
    console.log('this.props: ', this.props);
    this.setState({name: null, powers: null});
  }

  handleLogCurrentReduxState(event){
    event.preventDefault();
    this.props.dispatch(actions.logCurrentReduxState());
    console.log('this.props.reduxState: ', this.props.reduxState);
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
        <div>this.props: {JSON.stringify(this.props)}</div>
        <p />
        <div>this.state:{JSON.stringify(this.state)}</div>
        <p />
        <div>this.props.reduxState:{JSON.stringify(this.props.reduxState)}</div>
        <button type='button' onClick={this.handleLogCurrentReduxState}>Print current redux state</button>
      </div>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func,
  heroes: PropTypes.object,
  reduxState: PropTypes.object
};

const mapStateToProps = (state) => {
  console.log('mapStateToProps', state);
  return {
    reduxState: state
  };
};

export default connect(mapStateToProps)(App);
