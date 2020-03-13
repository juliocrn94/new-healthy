import React from 'react';

const Button = props => {
    return (
        <div className={props.posicion}>
            <button className="button button1" value={props.value} onClick= {props.onClick}>{props.text}</button>
        </div>
    );
};

export default Button;