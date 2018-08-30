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
        valorpag: 0,
        gamesect:''
    }
  }
  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({
      gamesect: event.value
     });
  }

  addGame() {
    this.setState({
        gamesList: [...this.state.gamesList, this.state.gamesect]
    });
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
    const {gamesect} = this.state
    const {valorpag} = this.state
    
    return (
    <div className="container-fluid">
      <h1>Cadastro Locaçao</h1>
          <div className="container-fluid">
            <nav class="nav nav-tabs">
              <a class="nav-link active" href= "" >Locação</a>
              <a class="nav-link" href="">Cadastro de Games</a>
              <a class="nav-link" href="">Cadastro de Genero</a>
            </nav>    
          </div>
      <div className='container'>
        <form onSubmit={this.handleSubmit}>
            <input className='form-control' type='text' placeholder='Nome Cliente' name='cliente' />
            <br></br>
            <input className='form-control' type='text' placeholder='Telefone' name='telefone' />
            <br></br>
            <input className='form-control' type='text' placeholder='data da locaçao' name='dataloc' />
            <br></br>
            <input className='form-control' type='text' placeholder='data da devoluçao' name='datadev' />
            <br></br>
            <input className='form-control' type='text' placeholder='Lista de jogos' name='listajogos' />
            <br></br>
            <input className='form-control' type='text' placeholder='Valor a ser pago' name='valorpag' />

            <button className="btn btn-success" onClick={this.handleSubmit}> Cadastrar </button>
            
            <button className="btn btn-warning" onClick={this.handleSubmit}> Editar </button>
            
            <button className="btn btn-danger" onClick={this.handleSubmit}> Excluir </button>

        </form>
      </div>
    </div>
    )
  }
}

export default FormLocacao;