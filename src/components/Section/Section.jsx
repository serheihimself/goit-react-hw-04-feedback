import React from 'react';
import { BoxStats } from '../Statistics/Statistics.styles';
import PropTypes from 'prop-types';

function Section({ title, children }) {
  return (
    <BoxStats>
      <h2>{title}</h2>
      {children}
    </BoxStats>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
