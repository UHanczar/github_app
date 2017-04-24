import React, { Component } from 'react';

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
    const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
    // console.log('Up here: ', this);
    return (
      <ul className='languages'>
        {/* <p>Selected Language: {this.state.selectedLanguage}</p> */}
        {languages.map((lang) => {
          // console.log('down here: ', this);
          return (
            <li
              key={lang}
              style={lang === this.state.selectedLanguage ? { color: '#d0021b' } : null}
              onClick={this.updateLanguage.bind(null, lang)}>{lang}</li>
          );
        })}
      </ul>
    );
  }
}

export default Popular;
