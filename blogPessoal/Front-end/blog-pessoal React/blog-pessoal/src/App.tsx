import React from 'react';
import Home from './paginas/home/Home';
import NavBar from './components/estaticos/NavBar/NavBar';
import Footer from './components/estaticos/Footer/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
/*import logo from './logo.svg';*/
import './App.css';
import { Grid } from '@material-ui/core';
import { RoundedCorner } from '@material-ui/icons';
import Login from './paginas/login/Login'

/*let nome ='Jujuba'*/
function App() {
  return (
   <Router>
    <NavBar />
    <Switch>
      <div style={{ minHeight : '100vh'}}>
      <Route exact path='/'>
          <Login />
        </Route>
       
      <Route path='/login'>
          <Login />
        </Route>

        <Route path='/home'>
          <Home />
        </Route>
        
      </div>
    </Switch>

    <Footer />
   </Router>
  );
}

export default App;

/*
Aula 10

<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
    <h1>{nome}</h1>


    <Home />

    Aula 11
    <Grid container spacing={3}>
      <Grid item xs={12} sm={12}>
      <Home />
      </Grid>

      <Grid item xs={12} sm={6}>
      <Home />
      </Grid>

      <Grid item xs={12} sm={6}>
      <Home />
      </Grid>

      <Grid item xs={12} sm={3}>
      <Home />
      </Grid>

      <Grid item xs={12} sm={3}>
      <Home />
      </Grid>

      <Grid item xs={12} sm={3}>
      <Home />
      </Grid>

      <Grid item xs={12} sm={3}>
      <Home />
      </Grid>
      
    </Grid>
    */
