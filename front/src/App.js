/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/

// src/App.js
import Header from './components/header';
import Hero from './components/hero';
import Features from './components/features';
import Footer from './components/footer';
import './App.css'; // Import your styles
function App() {
return (
<div className="App">
<Header />
<Hero />
<Features />
<Footer />


</div>
);
}
export default App;