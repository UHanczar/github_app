import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import querystring from 'query-string';

import api from './../utils/api';
import Player from './Player';
import Loading from './Loading';

class Results extends Component {
  constructor(props) {
    super(props);

    this.state = {
      winner: null,
      loser: null,
      error: null,
      loading: true
    };
  }

  componentDidMount() {
    const players = querystring.parse(this.props.location.search);
    // console.log('players: ', players);
    api.battle([
      players.playerOneName,
      players.playerTwoName
    ]).then((results) => {
      // console.log(res);
      if (results === null) {
        return this.setState(() => {
          return {
            error: 'Looks like there was an error. Check that both users exist on GitHub.',
            loading: false
          };
        });
      }

      this.setState(() => {
        // console.log('this: ', this);
        return {
          error: null,
          winner: results[0],
          loser: results[1],
          loading: false
        }
      })
    });
  }

  render() {
    const winner = this.state.winner;
    const loser = this.state.loser;
    const error = this.state.error;
    const loading = this.state.loading;

    if (loading === true) {
      return <p><Loading />...</p>
    }

    if (error) {
      return (
        <div>
          <p>{error}</p>
          <Link to='/battle'>Reset</Link>
        </div>
      );
    }

    return (
      <div className='row'>
        <Player
          label='Winner'
          score={winner.score}
          profile={winner.profile}
        />

        <Player
          label='Loser'
          score={loser.score}
          profile={loser.profile}
        />
      </div>
    );
  }
}

export default Results;
