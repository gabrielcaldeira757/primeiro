import React, { Component } from 'react';
import '../App.css';


class FormGame extends Component{
  constructor(props){
    super(props)

    this.handleSave = this.handleSave.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleExcluir = this.handleExcluir.bind(this)    
    this.handlePesquisa = this.handlePesquisa.bind(this)

    this.state ={
      titulo: '',
      sinope: '',
      quantJoga:'',
      valor: 0,
      genero: '',
      pesquisa: ''
    }
  }

  handleSave = (event) => {
    // Pegar o input dos campos, formar um objeto e inserir no banco
    const genero = {
      titulo: this.state.titulo,
      sinopse: this.state.sinopse,
      quantJoga: this.state.quantJoga,
      valor: this.state.valor,
      //Selecionar genero no banco
      genero: this.state.genero,
      pesquisa: this.state.pesquisa,
    }

    Firebird.attach(options, function(err, db) {
 
      if (err)
          throw err;
   
      db.query(
        `INSERT INTO GAME 
        (TITULO, SINOPSE, QUANTJOGA, VALOR, GENERO) 
        VALUES(${this.state.titulo} , ${this.state.sinopse}, ${this.state.quantJoga} , ${this.state.valor}, ${this.state.genero})  `
        , function(err, result) {
          db.detach();
      });
   
    });

    // INSERE NO BANCO
    console.log(genero);
  }

  handleExcluir() {
    Firebird.attach(options, function(err, db) {
 
      if (err)
          throw err;
   
      db.query(`DELETE FROM GAMES WHERE GAMES.IDGAME = ${this.state.pesquisa}`, function(err, result) {
          db.detach();
      });
   
    });
  }
 
  handlePesquisa() {
    Firebird.attach(options, function(err, db) {
 
      if (err)
          throw err;
   
      db.query(`SELECT * FROM GAMES WHERW GAMES.IDGAME = ${this.state.pesquisa}`, function(err, result) {
          db.detach();
      });
   
    });

    this.setState({
      titulo: result.titulo,
      sinope: result.sinope,
      quantJoga: result.quantJoga,
      valor: result.valor,
      //Selecionar genero no banco
      genero: result.genero,
      pesquisa: result.pesquisa,
    });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  
  render(){
    const {titulo} = this.state
    const {sinope} = this.state
    const {quantJoga} = this.state
    const {valor} = this.state
    const {genero} = this.state
    const {pesquisa} = this.state
    
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
            <input 
              className='form-control' 
              type='text' 
              placeholder='Titulo' 
              name='titulo'
              value={this.state.titulo}
              onChange={this.handleChange} 
            />
            <br></br>
            <input 
              className='form-control' 
              type='text' 
              placeholder='Sinopse' 
              name='sinopse'
              value={this.state.sinopse}
              onChange={this.handleChange} 
            />
            <br></br>
            <input 
              className='form-control' 
              type='text' 
              placeholder='Quantidade de jogadores' 
              name='quantJoga'
              value={this.state.quantJoga}
              onChange={this.handleChange} 
            />
            <br></br>
            <input 
              className='form-control' 
              type='text' 
              placeholder='Valor diario' 
              name='valor'
              value={this.state.valor}
              onChange={this.handleChange} 
            />
            <br></br>
            <input 
              className='form-control' 
              type='text' 
              placeholder='Genero' 
              name='genero' 
              value={this.state.genero}
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
                placeholder='Nome ou codigo' 
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
export default FormGame;