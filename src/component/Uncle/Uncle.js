import React from 'react';

const Uncle = (props) => {
    const { house } = props
    return (
        <div>
            <h1>uncle</h1>
            <p>house: {house}</p>
        </div>
    );
};

export default Uncle;