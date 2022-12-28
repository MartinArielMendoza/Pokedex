import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import CartWidget from './components/CartWidget/CartWidget';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <CartWidget/>
        <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
