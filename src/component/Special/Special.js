import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa'

const Special = () => {
    const [house, setHouse] = useContext(RingContext);
    return (
        <div>
            <h1>special</h1>
            <h4>House: {house}</h4>
            <button onClick={() => setHouse(house + 1)}>magic</button>
        </div>
    );
};

export default Special;