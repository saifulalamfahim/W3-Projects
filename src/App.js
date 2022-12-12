import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Notice from './components/Notice/Notice';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
     <Notice></Notice>
     <Main></Main>
     <Footer></Footer>
    </div>
  );
}


export default App;
