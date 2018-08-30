import React, { Component } from 'react';
import '../App.css';


class FormGame extends Component{
  constructor(props){
    super(props)
    this.state ={
      titulo: '',
      sinope: '',
      quantJoga:'',
      valor: 0,
      genero: ''
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
    const {titulo} = this.state
    const {sinope} = this.state
    const {quantJoga} = this.state
    const {valor} = this.state
    const {genero} = this.state
    
    return (
    <div className="container-fluid">
        <h1>Cadastro Game</h1>
          <div className="container-fluid">
              <nav class="nav nav-tabs">
                <a class="nav-link" href= "" >Locação</a>
                <a class="nav-link active" href="./Components/formGame">Cadastro de Games</a>
                <a class="nav-link" href="./Components/formGenero">Cadastro de Genero</a>
              </nav>    
          </div>
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <input className='form-control' type='text' placeholder='Titulo' name='titulo' />
            <br></br>
            <input className='form-control' type='text' placeholder='Sinopse' name='sinopse' />
            <br></br>
            <input className='form-control' type='text' placeholder='Quantidade de jogadores' name='quantJoga' />
            <br></br>
            <input className='form-control' type='text' placeholder='Valor diario' name='valor' />
            <br></br>
            <input className='form-control' type='text' placeholder='Genero' name='genero' />
          </form>
        
          <button className="btn btn-success" onClick={this.handleSubmit}> Enviar </button>
          <button className="btn btn-warning" onClick={this.handleSubmit}> Editar </button>
          <button className="btn btn-danger" onClick={this.handleSubmit}> Excluir </button>
        </div>
    </div>
    )
  }
}
export default FormGame;