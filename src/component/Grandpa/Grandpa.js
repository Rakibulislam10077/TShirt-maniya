import React, { createContext, useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css';

export const RingContext = createContext('Diamond')

const Grandpa = () => {
    const [house, setHouse] = useState(1);
    const ornament = 'Diamond ring';
    const handleBuyAHouse = () => {
        setHouse(house + 1)
    }
    return (
        <RingContext.Provider value={[house, setHouse]}>
            <div style={{ border: '1px solid goldenrod' }}>
                <h2>Grandpa</h2>
                <p>House: {house}</p>
                <button style={{ marginBottom: '20px' }} onClick={handleBuyAHouse}>Buy A House</button>
                <div className='grandpa'>
                    <Father house={house} ornament={ornament}></Father>
                    <Uncle house={house}></Uncle>
                    <Aunty house={house}></Aunty>
                </div>
            </div>
        </RingContext.Provider>
    );
};

export default Grandpa;