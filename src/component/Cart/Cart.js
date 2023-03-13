import React from 'react';
import './Cart.css';

const Cart = ({ cart, handleRemoveFromCart }) => {
    let command;
    if (cart.length === 0) {
        command = <p>Please add at least one product</p>;
    }
    else if (cart.length === 1) {
        command = <p>Please add more product</p>;
    }
    else {
        command = <p>Thanks for adding products</p>
    }
    return (
        <div>
            <h2>selected Item: {cart.length}</h2>
            {command}
            {
                cart.map(TShirt => <h3>
                    {TShirt.name}
                    <button onClick={() => handleRemoveFromCart(TShirt)} >X</button>
                </h3>)
            }
            {cart.length !== 4 ? 'keep adding' : <button>Remove all</button>}
        </div>
    );
};

export default Cart;