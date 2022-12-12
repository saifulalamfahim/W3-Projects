import React from 'react';
import './MainDetails.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import ReCAPTCHA from "react-google-recaptcha";
import { BiError } from 'react-icons/bi';
import RequestHistory from '../RequestHistory/RequestHistory';

const MainDetails = () => {
    function onChange(value) {
        console.log("Captcha value:", value);
      }
    return (
        <div className='mainDetails-container'>
           <div className='connected-Wallet'>
            <p> <BiError className='icon'></BiError> Your wallet is connected to <span>Avalanche Fuji</span>, so you are requesting <span>Avalanche Fuji</span> Link/ETH.</p>
           </div>
           <div className='wallet-Details'>

           <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Wallet address</Form.Label>
                    <Form.Control type="text" placeholder="Wallet Address..." />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label id='disable-label'>Request Type</Form.Label>
                    <div id='disable-label'>
                    <Form.Control className='from-control' placeholder="20 Test Link" disabled />
                    <Form.Control className='from-control' placeholder="0.5ETH" disabled />
                    </div>
                </Form.Group>
                <ReCAPTCHA
                    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                    onChange={onChange}
                         />
                <button className='submit-button' >
                Send Request
                </button>
            </Form>
           
           </div>
           <RequestHistory></RequestHistory>
        </div>
       
    );
};

export default MainDetails;



// <div className='wallet-address'>
// <p>Wallet Address</p>
// <input type="text" />
// </div>
// <div className='request-Type'>
// <p>Request type</p>
// <div className='amount'>
//     <p>20 Test Link</p>
//     <p>0.5 ETH</p>
// </div>
// <div>
// <div class="g-recaptcha" data-sitekey="6LcYS3MjAAAAAECXysdUDvFomJMDz3HyHjcOImvu">fgfdh</div>
// </div>
// </div>