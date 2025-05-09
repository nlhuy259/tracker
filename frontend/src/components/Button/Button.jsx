import React from 'react';
import './Button.css';

function Button({ name, icon, onClick, bg, bPad, color, bRad }) {
    const customStyles = {
        background: bg,
        padding: bPad,
        borderRadius: bRad,
        color: color,
    };

    return (
        <button
            className="custom-button"
            style={customStyles}
            onClick={onClick}
        >
            {icon}
            {name}
        </button>
    );
}

export default Button;
