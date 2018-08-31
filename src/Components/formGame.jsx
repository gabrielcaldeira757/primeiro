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
    <div className="container">
        <div className="row">
          <div classname="col-sm-3">
            <h1>Cadastro Games</h1>
          </div>
          
          <div className="col-sm-3">
          </div>

          <div classname="col-sm-9">
            <h2 className="text-right">Codigo: 000</h2>
          </div>
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
              <input className='form-control' type='text' placeholder='Nome ou codigo' name='pesquisa' />
            </div>
          </div>        
        </div>
    </div>
    )
  }
}
export default FormGame;