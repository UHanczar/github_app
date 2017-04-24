import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectedLanguage extends Component {
  render() {
    const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
    return (
      <ul className='languages'>
        {/* <p>Selected Language: {this.state.selectedLanguage}</p> */}
        {languages.map((lang) => {
          // console.log('down here: ', this);
          return (
            <li
              key={lang}
              style={lang === this.props.selectedLanguage ? { color: '#d0021b' } : null}
              onClick={this.props.onSelect.bind(null, lang)}>{lang}</li>
          );
        })}
      </ul>
    );
  }
}

SelectedLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
}

class Popular extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: 'All'
    };

    this.updateLanguage = this.updateLanguage.bind(this);
  }

  updateLanguage(lang) {
    this.setState(function () {
      return {
        selectedLanguage: lang
      };
    });
  }

  render() {
    // console.log('Up here: ', this);
    return (
      <div>
        <SelectedLanguage selectedLanguage={this.state.selectedLanguage} onSelect={this.updateLanguage} />
      </div>
    );
  }
}

export default Popular;
