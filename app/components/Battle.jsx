import React, { Component } from 'react';

import PlayerInput from './PlayerInput';

class Battle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerOneName: '',
      playerTwoName: '',
      playerOneImage: null,
      playerTwoImage: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(id, userName) {
    this.setState(() => {
      const newState = {};
      newState[`${id}Name`] = userName;
      newState[`${id}Image`] = `http://github.com/${userName}.png?size=200`;

      return newState;
    });
  }

  render() {
    const playerOneName = this.state.playerOneName;
    const playerTwoName = this.state.playerTwoName;

    return (
      <div>
        <div className='row'>
          {!playerOneName && <PlayerInput id='playerOne' label='Player One' onSubmit={this.handleSubmit} />}
          {!playerTwoName && <PlayerInput id='playerTwo' label='Player Two' onSubmit={this.handleSubmit} />}
        </div>
      </div>
    );
  }
}

export default Battle;
