import React from 'react';

const ButtonForm = props => {
    return (
        <div className="botton-wrap">
            <div className= {props.aligner}>
                <button className="button button1" onClick= {props.onClick}>{props.text}</button>
            </div>
        </div>
    );
};

export default ButtonForm;
