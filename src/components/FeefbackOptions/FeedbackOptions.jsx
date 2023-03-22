import React from 'react';
import PropTypes from 'prop-types';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <>
      {options.map(option => (
        <button key={option} onClick={() => onLeaveFeedback(option)}>
          {option}
        </button>
      ))}
    </>
  );
}

FeedbackOptions.propTypes = {
  good: PropTypes.func.isRequired,
  neutral: PropTypes.func.isRequired,
  bad: PropTypes.func.isRequired,
};

export default FeedbackOptions;

// <button onClick={good}>Good</button>
//       <button onClick={neutral}>Neutral</button>
//       <button onClick={bad}>Bad</button>
