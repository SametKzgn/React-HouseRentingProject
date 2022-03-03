import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/Main';
import Slider from './components/Slider';



function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Nav />
        <Main />
      </header>
      <Slider />

    </div>
  );
}

export default App;
