import React from 'react';
import MainDetails from '../MainDetails/MainDetails';
import './Main.css';

const Main = () => {
    return (
        <div className='main-container'>
            <div className='reqLink'>
                <h1>Request testnet LINK</h1>
                <p>Get testnet LINK for an account on one of the supported blockchain testnets so you can <br /> create and test your own oracle and Chainlinked smart contract</p>
            </div>
            <div>
                <MainDetails></MainDetails>
            </div>
        </div>
    );
};

export default Main;