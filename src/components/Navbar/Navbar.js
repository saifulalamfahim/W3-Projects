import React, { useEffect, useState } from 'react';
import './Navbar.css';
import Container from 'react-bootstrap/Container';
import NavbarBo from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Coins from '../Coins/Coins';


const Navbar = () => {
    const [modalShow, setModalShow] = React.useState(false);
    const [coinName, setCoinName] = useState([]);
  
    const [coinDetail, setCoinDetail] = useState([]);

    useEffect( () => {
        fetch('FakeData.json')
        .then(res=> res.json())
        .then(data => setCoinName(data))
    }, []);
    const handleAddToConnectedWallet = (coin) => {
      console.log(coin);
      const newCart = [...coinDetail, coin];
      setCoinDetail(newCart);
  };
    return (
        <NavbarBo>
            <Container>
                <NavbarBo.Brand href="#home" id='logo'>Faucets</NavbarBo.Brand>
                <NavbarBo.Toggle />
                <NavbarBo.Collapse className="justify-content-end">
                <NavDropdown className='coinNAme' title="Ethereum Rinkeby"  id="nav-dropdown">

                  {
                    coinName.map(coin=> <Coins 
                      key={coin.id}
                      coin={coin}
                      handleAddToConnectedWallet={handleAddToConnectedWallet}
                      ></Coins>)
                  }
                </NavDropdown>
                <button className='coinNAme1' onClick={() => setModalShow(true)}>
                    Connect Wallet
                </button>
                <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
                 <NavDropdown title="Login" id="nav-dropdown">
                    <NavDropdown.Item eventKey="4.1">Log In</NavDropdown.Item>
                    <NavDropdown.Item eventKey="4.2">Sign In</NavDropdown.Item>
                    <NavDropdown.Item eventKey="4.3">FAQ</NavDropdown.Item>
                </NavDropdown>
                </NavbarBo.Collapse>
            </Container>
        </NavbarBo>
    );
    
};

function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  



export default Navbar;