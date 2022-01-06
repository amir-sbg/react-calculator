import React from 'react';
import s from './keypad.module.css';

export default function Keypad({children}) {
    const handleButtonClick = (button) => {
        // TODO: handle clicking here.
        //  handled in Calculator.js
        console.log(button);
    };

    const buttons = [
        {text: 'C', isDark: true},
        {text: '+/-', isDark: true},
        {text: '%', isDark: true},
        {text: '÷', isDark: true},
        {text: '7'},
        {text: '8'},
        {text: '9'},
        {text: 'x', isDark: true},
        {text: '4'},
        {text: '5'},
        {text: '6'},
        {text: '-', isDark: true},
        {text: '1'},
        {text: '2'},
        {text: '3'},
        {text: '+', isDark: true},
        {text: '0', isLarge: true},
        {text: '.'},
        {text: '=', isDark: true},
    ];

    return (
        <div className={s.keypad} about={buttons}>{children}</div>
    );
}

