import React, { Component } from 'react';
import '../App.css';


class FormLocacao extends Component{
  constructor(props){
    super(props)

    this.handleSave = this.handleSave.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleExcluir = this.handleExcluir.bind(this)    
    this.handlePesquisa = this.handlePesquisa.bind(this)  

    this.state ={
        cliente: '',
        telefone: '',
        dataloc:'',
        datadev: '',
        listajogos: '',
        valorpag: 0,
        gamesect:'',
        pesquisa:''
    }
  }

  handleSave = (event) => {
    // Pegar o input dos campos, formar um objeto e inserir no banco
    const genero = {
      name: this.state.nGenero,
      descricao: this.state.descricao
    }
  }

  handlePesquisa() {
    // result = firebird.query(
    //   `SELECT NAME, DESCRICAO FROM GENERO WHERE GENERO.ID = ${this.state.pesquisa}`
    // )
    // BUSCA DO BANCO OS VALORES RELATIVOS AO ID

    this.setState({
      // descricao: result.descricao,
      // nGenero: result.nGenero,
      descricao: this.state.pesquisa,
      nGenero: this.state.pesquisa,
    });
  }

  handleExcluir() {
    // firebird.query(
    //   `DELETE FROM GENERO WHERE GENERO.ID = ${this.state.pesquisa}`;
    // )
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({
      gamesect: event.value
     });
  }

  addGame() {
    // adiciona o game a lista de games
    this.setState({
        gamesList: [...this.state.gamesList, this.state.gamesect]
    });
  } 

  handleChange(event) {
    //altera o estado da variavel de estado de acordo com o valor do input
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
    const {pesquisa} = this.state
    
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
            <input 
              className='form-control' 
              type='text' 
              placeholder='Nome Cliente' 
              name='cliente'
              value={this.state.cliente}
              onChange={this.handleChange} 
            />
            <br></br>
            <input 
              className='form-control' 
              type='text' 
              placeholder='Telefone'
              name='telefone'
              value={this.state.telefone}
              onChange={this.handleChange} 
            />
            <br></br>
            <input 
              className='form-control' 
              type='text'
              placeholder='data da locaçao' 
              name='dataloc'  
              value={this.state.dataloc}
              onChange={this.handleChange} 
             
            />
            <br></br>
            <input 
              className='form-control' 
              type='text' 
              placeholder='data da devoluçao' 
              name='datadev'
              value={this.state.datadev}
              onChange={this.handleChange} 
            />
            <br></br>
            <input 
              className='form-control' 
              type='text' 
              placeholder='Lista de jogos' 
              name='listajogos'
              value={this.state.listajogos}
              onChange={this.handleChange} 
            />
            <br></br>
            <input 
              className='form-control' 
              type='text' 
              placeholder='Valor a ser pago' 
              name='valorpag'
              value={this.state.valorpag}
              onChange={this.handleChange} 
            />
        </form>
        <br></br>
          <div className="row">
            <div className="col-sm">
              <button 
                className="btn btn-success btn-lg" 
                onClick={this.handleSave}
                >Enviar  
              </button>
            </div>
            <div className="col-sm">
              <button 
              className="btn btn-danger btn-lg" 
              onClick={this.handleExcluir}
              >Excluir  
              </button>
            </div>
            <div className="col-sm-4">
              <button 
              className="btn btn-warning btn-lg" 
              onClick={this.handlePesquisa}
              >Procurar  
              </button>
            </div>
            <div className="col-sm-4">
              <input 
                className='form-control' 
                type='text' 
                placeholder=' Pesquisa por Nome ou codigo' 
                name='pesquisa'
                value={this.state.pesquisa}
                onChange={this.handleChange} 
              />
            </div>
          </div>       

      </div>
    </div>
    )
  }
}

export default FormLocacao;