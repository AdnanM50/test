import React from 'react';

const PrimaryButton = ({ children, text, icon, size, className}) => {

    return (
        <button className={ `btn ${size} ${className}`}>
            {icon && <span className="mr-2">{icon}</span>}
            {text}
            {children}
        </button>
    );
};

export default PrimaryButton;