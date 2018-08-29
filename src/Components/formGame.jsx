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
      <div>
        <h1>Cadastro Game</h1>
        <form onSubmit={this.handleSubmit}>
        <input type='text' placeholder='Titulo' name='titulo' />
        <input type='text' placeholder='Sinopse' name='sinopse' />
        <input type='text' placeholder='Quantidade de jogadores' name='quantJoga' />
        <input type='text' placeholder='Valor diario' name='valor' />
        <input type='text' placeholder='Genero' name='genero' />
        
        <button> Enviar </button>

        </form>
      </div>
    )
  }
}
export default FormGame;