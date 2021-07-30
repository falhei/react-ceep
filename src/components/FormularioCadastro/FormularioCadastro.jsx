import React, { Component } from "react";
import "./estilo.css";

class FormularioCadastro extends Component {
  render() {
    return (
      <form className="form-cadastro">
        <input type="text" placeholder="Título" className="form-cadastro_input"></input>
        <textarea placeholder="Escreva sua nota..." className="form-cadastro_input" rows={15}></textarea>
        <button className="form-cadastro_submit">Criar Nota</button>
      </form>
    );
  }
}

export default FormularioCadastro;