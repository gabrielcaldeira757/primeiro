import React, { Component } from 'react';
import '../App.css';


class FormGenero extends Component{
  constructor(props){
    super(props)

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    this.state ={
      descricao: '',
      nGenero: ''
    }
  }
  handleSubmit = (event) => {
    event.preventDefault()
  }


  handleInputChange = (event) =>{
    event.preventDefault()
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  
  render(){
    const {descricao} = this.state
    const {nGenero} = this.state

    return (
      <div className="container-fluid">
        <h1>Cadastro Genero</h1>
            <div className="container-fluid">
              <nav class="nav nav-tabs">
                <a class="nav-link" href= "" >Locação</a>
                <a class="nav-link" href="">Cadastro de Games</a>
                <a class="nav-link active" href="">Cadastro de Genero</a>
              </nav>    
            </div>
        <div className="containe">
            <form onSubmit={this.handleSubmit}>
              <input className='form-control' type='text' placeholder='Nome Do Genero' name='nGenero' />
              <br></br>
              <input className='form-control' type='text' placeholder='Descrição' name='descricao' />
            
          
            <button className="btn btn-success" onClick={this.handleSubmit}> Cadastrar </button>
              
            <button className="btn btn-warning" onClick={this.handleSubmit}> Editar </button>
              
            <button className="btn btn-danger" onClick={this.handleSubmit}> Excluir </button>
            </form>
        </div>
          
        
      </div>
    )
  }
}

export default FormGenero;