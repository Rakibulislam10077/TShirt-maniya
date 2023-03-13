import React from 'react';
import Brother from '../Brother/Brother';
import Myself from '../Myself/Myself';
import Sister from '../Sister/Sister';

const Father = ({ house, ornament }) => {
    return (
        <div>
            <h3>father</h3>
            <p>house: {house}</p>
            <Myself house={house} ornament={ornament}></Myself>
            <Brother house={house}></Brother>
            <Sister house={house}></Sister>
        </div>
    );
};

export default Father;