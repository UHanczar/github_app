import React from 'react';
import PropTypes from 'prop-types';

const SelectedLanguage = (props) => {
  const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

  return (
    <ul className='languages'>
      {/* <p>Selected Language: {this.state.selectedLanguage}</p> */}
      {languages.map((lang) => {
        // console.log('down here: ', this);
        return (
          <li
            key={lang}
            style={lang === props.selectedLanguage ? { color: '#d0021b' } : null}
            onClick={props.onSelect.bind(null, lang)}>{lang}</li>
        );
      })}
    </ul>
  );
};

SelectedLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
};

export default SelectedLanguage;
