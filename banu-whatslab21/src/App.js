/* import logo from './logo.svg'; */
import React from 'react';
import './App.css';
/* import Styled from 'styled-components' */
/* import Post from './components/Mensagem/Mensagem'; */

class App extends React.Component {

  state= {
    mensagem: [
      {
      nomeUsuario: "",
      mensagemUsuario: "",
    }
    ],
    valorNomeUsuario: "",
    valorMensagemUsuario: "",
  }

  adicionaMensagem = () => {
    const novaMensagem = {
      nomeUsuario: this.state.valorNomeUsuario,
      mensagemUsuario: this.state.valorMensagemUsuario,
    };
    const novasMensagens = [...this.state.mensagem, novaMensagem];
    this.setState({ mensagem: novasMensagens });
  };

  onChangeInputNomeUsuario = (event) => {
    this.setState({ valorNomeUsuario: event.target.value });
  };

  onChangeInputMensagemUsuario = (event) => {
    this.setState({ valorMensagemUsuario: event.target.value });
  };

  render() {
    const listaDeMensagens = this.state.mensagem.map((mensagens) => {
      return (
        <div>
            {mensagens.nomeUsuario}
            {mensagens.mensagemUsuario}
        </div>
      );
    });
      return (
        <div className="App">
          <header className="App-header">
            <h1>BATE-PAPO Wow</h1>
          </header>
          <div className="Campo-mensagens">
              <input
                value={this.state.valorNomeUsuario}
                onChange={this.onChangeInputNomeUsuario}
                placeholder={"Nome de usuário"}
              />
              <input
                value={this.state.valorMensagemUsuario}
                onChange={this.onChangeInputMensagemUsuario}
                placeholder={"Mensagem"}
              />
              <button onClick={this.adicionaMensagem}>Enviar!</button>
            </div>
          <div className="Exibe-mensagens">
          {listaDeMensagens}
          </div>
        </div>
      );
  }
}

export default App;
