import React from 'react';
import Home from './paginas/home/Home';
import NavBar from './components/estaticos/NavBar/NavBar';
import Footer from './components/estaticos/Footer/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
/*import logo from './logo.svg';*/
import './App.css';
import Login from './paginas/login/Login';
import Sobre from './paginas/sobre/Sobre';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import ListaTema from './components/temas/listaTemas/ListaTema';
import ListaPostagem from './components/postagens/listaPostagens/ListaPostagem';
import CadastrarPostagem from './components/postagens/cadastroPost/CadastrarPostagem';
import CadastroTema from './components/temas/cadastroTema/CadastroTema';
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';
import DeletarTema from './components/temas/deletarTema/DeletarTema';
import store from './store/Store';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';


function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
      <Router>
        <NavBar />
        <Switch>
          <div style={{ minHeight: '100vh' }}>
            <Route exact path='/'>
              <Login />
            </Route>

            <Route path='/Login'>
              <Login />
            </Route>

            <Route path='/Home'>
              <Home />
            </Route>

            <Route path='/Sobre'>
              <Sobre />
            </Route>

            <Route path='/Cadastro'>
              <CadastroUsuario />
            </Route>

            <Route path='/tema'>
              <ListaTema />
            </Route>

            <Route path='/postagens'>
              <ListaPostagem />
            </Route>

            <Route exact path='/formularioPostagem'>
              <CadastrarPostagem />
            </Route>

            <Route exact path='/formularioPostagem/:id'>
              <CadastrarPostagem />
            </Route>

            <Route exact path='/formularioTema'>
              <CadastroTema />
            </Route>

            <Route exact path='/formularioTema/:id'>
              <CadastroTema />
            </Route>

            <Route path='/deletarPostagem/:id'>
              <DeletarPostagem />
            </Route>

            <Route path='/deletarTema/:id'>
              <DeletarTema />
            </Route>

          </div>
        </Switch>

        <Footer />
      </Router>
    </Provider>
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
