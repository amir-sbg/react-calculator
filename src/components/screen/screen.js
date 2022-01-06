import React from 'react';
import s from './screen.module.css';
import PropTypes from 'prop-types';

export default function Screen({ value }) {
  // TODO: Show the clicked button or result here.
  //  handled in Calculator.js

  return <div className={s.screen}>{value}</div>;
}

Screen.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Screen.defaultProps = {
  text: 0,
};

