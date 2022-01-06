import React from 'react';
import s from './button.module.css';
import PropTypes from 'prop-types';

export default function Button({value, className, onClick}) {
    return (
        <button className={s.button} onClick={onClick} about={className}>
            {value}
        </button>
    );
}

Button.propTypes = {
    value: PropTypes.string.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
    className: '',
};
