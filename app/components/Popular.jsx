import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SelectedLanguage from './SelectedLanguage';
import RepoGrid from './RepoGrid';
import Loading from './Loading';
import api from './../utils/api';


class Popular extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: 'All'
    };

    this.updateLanguage = this.updateLanguage.bind(this);
  }

  componentDidMount() {
    this.updateLanguage(this.state.selectedLanguage);
  }

  updateLanguage(lang) {
    this.setState(() => {
      return {
        selectedLanguage: lang,
        repos: null
      };
    });

    api.fetchPopularRepos(lang)
      .then((repos) => {
        this.setState(() => {
          return {
            repos: repos
          };
        });
      });
  }

  render() {
    // console.log('Up here: ', this);
    return (
      <div>
        <SelectedLanguage selectedLanguage={this.state.selectedLanguage} onSelect={this.updateLanguage} />
        {/* {JSON.stringify(this.state.repos, null, 2)} */}
        {!this.state.repos ? <li><Loading /></li> : <RepoGrid repos={this.state.repos} />}
      </div>
    );
  }
}

export default Popular;
