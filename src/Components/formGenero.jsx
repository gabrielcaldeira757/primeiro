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
      <div className="container">
        <div className="row">
          <div classname="col-sm-3">
            <h1>Cadastro Genero</h1>
          </div>
          
          <div className="col-sm-3">
          </div>

          <div classname="col-sm-9">
            <h2 className="text-right">Codigo: 000</h2>
          </div>
        </div>
        <div className="containe">
            <form onSubmit={this.handleSubmit}>
              <input className='form-control' type='text' placeholder='Nome Do Genero' name='nGenero' />
              <br></br>
              <input className='form-control' type='text' placeholder='Descrição' name='descricao' />
            
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

export default FormGenero;