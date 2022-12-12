import React from 'react';
import './Coins.css';

const Coins = (props) => {
    const {name} = props.coin;
   
    return (
        <div className='coins-container'>
           <button onClick={() => props.handleAddToConnectedWallet(props.coin)}>{name}</button>
        </div>
    );
};

export default Coins;