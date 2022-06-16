import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Routes,
//   Link
// } from "react-router-dom";
import React, { useState } from 'react'
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }
  const removeBodyClasses = () => {
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')

  }
  const toggle = (cls) => {
    removeBodyClasses()
    console.log(cls)
    document.body.classList.add('bg-' + cls)
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled", "Success");
      document.title = 'TextUtils-Dark Mode';
    }
    else {
      document.title = 'TextUtils-light Mode';
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "Success");

    }
  }

  return (<>

   {/* <Router> */}
     <Navbar title="Textutils" mode={mode} toggle={toggle}></Navbar>
      <Alert alert={alert}></Alert>
      
      {/* <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}></TextForm> */}
{/* <About></About> */}
{/* <div className='conatiner my-3'> */}
{/* <Switch>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact   path="/"> */}
            <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}></TextForm>
        {/* </Route>
      </Switch>
</div>
</Router> */}
  </>
  );
}

export default App;
