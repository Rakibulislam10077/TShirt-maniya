import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Aunty = () => {
    const [house, setHouse] = useContext(RingContext);
    const handleAuntyMagic = () => {
        const newCount = house + 1;
        setHouse(newCount);
    }
    return (
        <div>
            <h2>Aunty</h2>
            <p>house: {house}</p>
            <button onClick={handleAuntyMagic}>Aunty magic</button>
        </div>
    );
};

export default Aunty;