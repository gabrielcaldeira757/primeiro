import React, { Component } from 'react';
import './App.css';
import FormGenero from './Components/formGenero'; 
import FormGame from './Components/formGame';
import FormLocacao from './Components/formLocacao';

class App extends Component {  
  render() {
    
    return (
      //  <div>
      //      <div className="container-fluid">
      //        <nav class="nav nav-tabs">
      //          <a class="nav-link active" href= "" >Locação</a>
      //          <a class="nav-link" href="./Components/formGame">Cadastro de Games</a>
      //          <a class="nav-link" href="./Components/formGenero">Cadastro de Genero</a>
      //        </nav>
      //      </div>
      //    <div>
          <FormLocacao />
         // <FormGenero />
        //<FormGame />
      //    </div>
      // </div> 
    );
  }
}

export default App;
