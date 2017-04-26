import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PlayerInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
  }

  onHandleSubmit(event) {
    event.preventDefault();

    this.props.onSubmit(
      this.props.id,
      this.state.userName
    );
  }

  handleChange(event) {
    const value = event.target.value;
    this.setState(() => {
      return {
        userName: value
      };
    });
  }

  render() {
    return (
      <form className='column' onSubmit={this.onHandleSubmit}>
        <label className='header' htmlFor='userName'>
          {this.props.label}
        </label>
        <input
          id='userName'
          placeholder='ginhub username'
          type='text' autoComplete='off'
          value={this.state.userName}
          onChange={this.handleChange}
        />
        <button className='button' type='submit' disabled={!this.state.userName}>Submit</button>
      </form>
    );
  }
}

PlayerInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default PlayerInput;
