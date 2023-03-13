import React, { useState } from 'react';
import useTShirts from '../../hooks/useTShirts';
import Cart from '../Cart/Cart';
import TShirt from '../TShirt/TShirt';
import './Home.css'

const Home = () => {
    const [TShirts] = useTShirts();
    const [cart, setCart] = useState([])
    const handleAddToCart = (selectedItem) => {
        const exists = cart.find(TShirt => TShirt._id === selectedItem._id);
        if (!exists) {
            const newCart = [...cart, selectedItem];
            setCart(newCart);
        }
        else {
            alert('Sorry.! This Product already exists. Please.! try another product')
        }
    }
    const handleRemoveFromCart = (removeItem) => {
        const rest = cart.filter(TShirt => TShirt._id !== removeItem._id)
        setCart(rest);
    }
    return (
        <div className='home-container'>
            <div className='tshirt-container'>
                {
                    TShirts.map(TSrt => <TShirt key={TSrt._id} TShirt={TSrt} handleAddToCart={handleAddToCart}></TShirt>)
                }
            </div>
            <div className='cart-container'>
                <Cart
                    cart={cart}
                    handleRemoveFromCart={handleRemoveFromCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;