import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import PlayerInput from './PlayerInput';
import PlayerPreview from './PlayerPreview';

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
    this.handleReset = this.handleReset.bind(this);
  }

  handleSubmit(id, userName) {
    this.setState(() => {
      const newState = {};
      newState[`${id}Name`] = userName;
      newState[`${id}Image`] = `http://github.com/${userName}.png?size=200`;

      return newState;
    });
  }

  handleReset(id) {
    this.setState(() => {
      const newState = {};
      newState[`${id}Name`] = '';
      newState[`${id}Image`] = null;

      return newState;
    });
  }

  render() {
    const match = this.props.match;
    const playerOneName = this.state.playerOneName;
    const playerTwoName = this.state.playerTwoName;
    const playerOneImage = this.state.playerOneImage;
    const playerTwoImage = this.state.playerTwoImage;

    return (
      <div>
        <div className='row'>
          {!playerOneName && <PlayerInput id='playerOne' label='Player One' onSubmit={this.handleSubmit} />}

          {playerOneName && <PlayerPreview avatar={playerOneImage} userName={playerOneName} id='playerOne' onReset={this.handleReset} />}

          {!playerTwoName && <PlayerInput id='playerTwo' label='Player Two' onSubmit={this.handleSubmit} />}

          {playerTwoName && <PlayerPreview avatar={playerTwoImage} userName={playerTwoName} id='playerTwo' onReset={this.handleReset} />}
        </div>

        {playerOneImage && playerTwoImage &&
          <Link className='button'
            to={{
              pathname: `${match.url}/results`,
              search: `?playerOneName=${playerOneName}&playerTwoName=${playerTwoName}`
            }}
          >
              Battle
          </Link>}
      </div>
    );
  }
}

export default Battle;
