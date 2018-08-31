import React, { Component } from 'react';
import '../App.css';


class FormGenero extends Component{
  constructor(props){
    super(props)

    this.handleSave = this.handleSave.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleExcluir = this.handleExcluir.bind(this)    
    this.handlePesquisa = this.handlePesquisa.bind(this)    

    this.state = {
      descricao: '',
      nGenero: '',
      pesquisa: '',
    }
  }

  handleSave = (event) => {
    // Pegar o input dos campos, formar um objeto e inserir no banco
    const genero = {
      name: this.state.nGenero,
      descricao: this.state.descricao
    }
    Firebird.attach(options, function(err, db) {
 
      if (err)
          throw err;
   
      db.query(`INSERT INTO GENERO (DESCRICAO, NGENERO) VALUES(${this.state.descricao} , ${this.state.nGenero})  `, function(err, result) {
          db.detach();
      });
   
    });
    console.log(genero);
  }

  handlePesquisa() {
    Firebird.attach(options, function(err, db) {
 
      if (err)
          throw err;
   
      
      db.query(`SELECT * FROM GENERO WHERW GENERO.IDGENERO = ${this.state.pesquisa}`, function(err, result) {
          db.detach();
      });
   
    });

    this.setState({
      descricao: result.descricao,
      nGenero: result.nGenero,
    });
  }

  handleExcluir() {
    Firebird.attach(options, function(err, db) {
 
      if (err)
          throw err;
   
     
      db.query(`DELETE FROM GENERO WHERE GENERO.ID = ${this.state.pesquisa}`, function(err, result) {
          db.detach();
      });
   
    });
    
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
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
            <form>
              <input
                className='form-control'
                type='text'
                placeholder='Nome Do Genero'
                name='nGenero'
                value={this.state.nGenero}
                onChange={this.handleChange}
              />
              <br></br>
              <input
                className='form-control'
                type='text'
                placeholder='Descrição'
                name='descricao'
                value={this.state.descricao}
                onChange={this.handleChange}
              />
            </form>
            <br></br>
          <div className="row">
            <div className="col-sm">
              <button
                className="btn btn-success btn-lg"
                onClick={this.handleSave}
              >
                Enviar
              </button>
            </div>
            <div className="col-sm">
              <button
                className="btn btn-danger btn-lg"
                onClick={this.handleExcluir}
              >
                Excluir
              </button>
            </div>
            <div className="col-sm-4">
              <button
                className="btn btn-warning btn-lg"
                onClick={this.handlePesquisa}
              >
                Procurar
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

export default FormGenero;