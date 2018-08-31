import React, { Component } from 'react';
import './App.css';
import FormGenero from './Components/formGenero'; 
import FormGame from './Components/formGame';
import FormLocacao from './Components/formLocacao';
import {Switch, Route, Link} from 'react-router-dom';

class App extends Component {  
  render() {
    
    return (
        <div>
          
            <div className="container-fluid">
              <nav className="nav nav-tabs">
                
                <Link to="/locacao">
                  <a class="nav-link " href="./Components/formGames">Locação</a>
                </Link>
                <Link to="/games">
                  <a class="nav-link " href="./Components/formGames">Cadastro de Games</a>
                </Link>

                <Link to="/formgenero">
                  <a class="nav-link " href="./Components/formGenero">Cadastro de Genero</a>
                </Link>
                
              </nav>
            </div>
            <Switch>
              <Route path="/locacao" component={FormLocacao} />
              <Route path="/games" component={FormGame} />
              <Route path="/formgenero" component={FormGenero} />
            </Switch>
          <div>
          {/* 
          <FormGenero />
        <FormGame /> */}
          </div>
       </div> 
    );
  }
}

export default App;
