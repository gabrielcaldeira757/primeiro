import React, { Component } from 'react';
import './App.css';
import FormGenero from './Components/formGenero'; 
import FormGame from './Components/formGame';
import FormLocacao from './Components/formLocacao';

class App extends Component {  
  render() {
    
    return (
      <div>
        <ul classNamer="nav nav-tabs">
          <li classNamer="nav-item">
            <a classNamer="nav-link active" href={<FormGenero />}>Active</a>
          </li>
          <li classNamer="nav-item">
            <a classNamer="nav-link" href={<FormGame />}>Link</a>
          </li>
          <li classNamer="nav-item">
            <a classNamer="nav-link" href={<FormLocacao/>}>Link</a>
          </li>
        </ul>
        
   
        <button>Completo</button>

      
      </div>
    );
  }
}

export default App;
