import React from 'react';
import './TShirt.css'

const TShirt = ({ TShirt, handleAddToCart }) => {
    // console.log(props)
    const { name, picture, price, gender } = TShirt;
    return (
        <div className='cart'>
            <img src={picture} alt="this is a product picture" />
            <h1>Name: {name}</h1>
            <h5>Gender: {gender}</h5>
            <p>Price: {price}</p>
            <button onClick={() => handleAddToCart(TShirt)}>Add to cart</button>
        </div>
    );
};

export default TShirt;