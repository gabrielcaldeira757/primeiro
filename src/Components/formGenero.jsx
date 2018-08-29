import React, { Component } from 'react';
import '../App.css';


class FormGenero extends Component{
  constructor(props){
    super(props)

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    this.state ={
      descricao: ''
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
    
    return (
      <div>
      <h1>Cadastro Genero</h1>
      <form onSubmit={this.handleSubmit}>
        <input type='text' placeholder='Descrição' name='descricao' />
        <label>varivale: </label>
        <button onClick={this.handleSubmit}> Enviar </button>

      </form>
      </div>
    )
  }
}

export default FormGenero;