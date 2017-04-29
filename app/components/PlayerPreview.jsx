import React from 'react';
import PropTypes from 'prop-types';

const PlayerPreview = (props) => {
  return (
    <div>
      <div className='column'>
        <img
          className='avatar'
          src={props.avatar}
          alt={`Avatar for ${props.userName}`}
        />
        <h2 className='username'>@{props.userName}</h2>
        {props.children}
      </div>
    </div>
  );
};

PlayerPreview.propTypes = {
  avatar: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired
};

export default PlayerPreview;
