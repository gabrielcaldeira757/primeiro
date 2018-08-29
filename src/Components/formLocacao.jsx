import React, { Component } from 'react';
import '../App.css';


class FormLocacao extends Component{
  constructor(props){
    super(props)
    this.state ={
        cliente: '',
        telefone: '',
        dataloc:'',
        datadev: '',
        listajogos: '',
        valorpag: 0
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
    const {cliente} = this.state
    const {telefone} = this.state
    const {dataloc} = this.state
    const {datadev} = this.state
    const {listajogos} = this.state
    const {valorpag} = this.state
    return (
      <div>
      <h1>Cadastro Locaçao</h1>
    <form onSubmit={this.handleSubmit}>
        <input type='text' placeholder='Nome Cliente' name='cliente' />
        <input type='text' placeholder='Telefone' name='telefone' />
        <input type='text' placeholder='data da locaçao' name='dataloc' />
        <input type='text' placeholder='data da devoluçao' name='datadev' />
        <input type='text' placeholder='Lista de jogos' name='listajogos' />
        <input type='text' placeholder='Valor a ser pago' name='valorpag' />

        <button> Enviar </button>

    </form>
      </div>
    )
  }
}

export default FormLocacao;