import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

//JSX is javascript syntax extension writing js into html using curly brackets
let name = "Harry";
function App() {
  return (
    //can return only one tag
    <>
    <Navbar title= "REactlearn"/>
    <div className="container">
    <TextForm heading="Enter text to analyze"/>
    </div>
    <h1>Hello {name}</h1>
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
          Learn React with urself
        </a>
      </header>
    </div>
    </>
  );
}

export default App;
