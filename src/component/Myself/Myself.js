import React from 'react';
import Special from '../Special/Special';

const Myself = ({ house, ornament }) => {
    return (
        <div>
            <h1>ami rakib bolchi..</h1>
            <p>house: {house}</p>
            <Special ornament={ornament}></Special>
        </div>
    );
};

export default Myself;