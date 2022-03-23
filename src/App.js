import logo from './logo.svg';
import './App.css';
import Routing from './Routing';
import Nav from './components/Nav';
import Apartment from './components/Apartment';
import Footer from './components/Footer';
import Main from './components/Main';
import Slider from './components/Slider';
import Subscribe from './components/Subscribe';
import Villa from './components/Villa';

function App() {
  return (
    <div className="main-container">
      <header className="App-header"> 
        <Nav />
        <Main />
      </header>
      <div>
        <Slider />
        <Subscribe/>

      </div>
    
      <Footer />

    </div>


  );
}

export default App;
