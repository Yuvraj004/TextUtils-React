import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}from "react-router-dom";

//JSX is javascript syntax extension writing js into html using curly brackets
let name = "Harry";
function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }
  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled","success");
      document.title='TextUtils-Dark Mode';
      // setInterval(()=>{
      //   document.title='TextUtils-is coming';
      // },2000)
      // setInterval(()=>{
      //   document.title='TextUtils-is op';
      // },1500) 
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
      document.title='TextUtils-Light Mode';
    }
  }
  return (
    //can return only one tag
    <>
    <Navbar title= "Reactlearn" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert} />
    {/* <div className="container">
    <TextForm showAlert={showAlert} heading="Enter text to analyze" mode={mode}/>
    </div> */}
    <About mode={mode}/>
    {/* <h1>Hello {name}</h1> */}
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
