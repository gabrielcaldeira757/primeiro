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
    <div className="container">
      <div className="row">
        <div classname="col-sm-3">
          <h1>Cadastro Locaçao</h1>
        </div>
        
        <div className="col-sm-3">
        </div>

        <div classname="col-sm-9">
          <h2 className="text-right">Codigo: 000</h2>
        </div>
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
        </form>
        <br></br>
          <div className="row">
            <div className="col-sm">
              <button className="btn btn-success btn-lg" onClick={this.handleSubmit}>  Enviar  </button>
            </div>
            <div className="col-sm">
              <button className="btn btn-danger btn-lg" onClick={this.handleSubmit}>  Excluir  </button>
            </div>
            <div className="col-sm-4">
              <button className="btn btn-warning btn-lg" onClick={this.handleSubmit}>  Procurar  </button>
            </div>
            <div className="col-sm-4">
              <input className='form-control' type='text' placeholder=' Pesquisa por Nome ou codigo' name='pesquisa' />
            </div>
          </div>       

      </div>
    </div>
    )
  }
}

export default FormLocacao;