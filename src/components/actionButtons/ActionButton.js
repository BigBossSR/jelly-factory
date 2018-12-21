import React from 'react';

const ActionButton = (props) => {
    return (
        <div className="actionButton" style={props.style}>
            <img src={props.image} onClick={props.onClick}/>
        </div>
    );
};

export default ActionButton;