import React from 'react';
import PropTypes from 'prop-types';

function Statisctics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <>
      <h2>Statistics</h2>
      <ul style={{ listStyle: 'none' }}>
        <li>
          <p>Good: {good}</p>
        </li>
        <li>
          <p>Netral: {neutral}</p>
        </li>
        <li>
          <p>Bad: {bad}</p>
        </li>
        <li>
          <p>Total: {total}</p>
        </li>
        <li>
          <p>Positive feedback: {positivePercentage}%</p>
        </li>
      </ul>
    </>
  );
}

Statisctics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statisctics;
