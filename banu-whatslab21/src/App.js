import React from 'react';
import './App.css';
import styled from 'styled-components'
/* import Post from './components/Mensagem/Mensagem'; */

const Container = styled.div`
  width: min(50%, 700px);
  height: 80vh;
  padding: 10px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-between;
  margin: 50px auto;
  border-radius: 5px;
  border: 2px solid #DEE2E6;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
`

const MessageBox = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;
  align-items: flex-end;
  word-wrap: break-word;
`
const InputBox = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
`

// Styles dos Inputs & Button

const InputName = styled.input`
  width: 20%;
  height: 70%;
  border-radius: 5px;
  border: 2px solid #CED4DA;
  padding: 0 10px;
  outline: none;
  font-weight: 500;
  &:focus {
    border: 2px solid #ADB5BD;
  }
  @media screen and (max-width: 500px) {
    font-size: 0.7em;
  }
`
const InputText = styled.input`
  width: 60%;
  height: 70%;
  margin: 0 5px;
  border-radius: 5px;
  border: 2px solid #CED4DA;
  padding: 0 10px;
  outline: none;
  font-weight: 500;
  &:focus {
    border: 2px solid #ADB5BD;
  }
  @media screen and (max-width: 500px) {
    font-size: 0.7em;
  }
`
const ButtonSend = styled.button`
  width: 20%;
  height: 80%;
  border-radius: 5px;
  border: 2px solid #CED4DA;
  background-color: transparent;
  outline: none;
  font-weight: 500;
  &:hover {
    cursor: pointer;
  }
  &:focus {
    border: 2px solid #ADB5BD;
  }
  &:active {
    border: 2px solid #ADB5BD;
  }
  @media screen and (max-width: 500px) {
    font-size: 0.6em;
  }
`

// Style Mensagem

const MessageBubble = styled.div`
  width: min(50%, 200px);
  min-height: 20px;
  background-color: #dee2e6;
  margin-bottom: 5px;
  border-radius: 5px;
  padding: 5px 10px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;

  @media screen and (max-width: 500px) {
    font-size: 0.7em;
  }
`
const MessageTitle = styled.h3`
  margin: 0;
  padding: 0 0 5px 0;
  font-size: .95em;
`
const MessageText = styled.p`
  margin: 0;
  padding: 0;
  font-size: .85em;
`
const MessageTime = styled.span`
  margin-top: 10px;
  font-size: 0.7em;
  color: #00000090;
`

const messageTime = () => {
  const now = new Date()
  const getHours = now.getHours()
  const getMinutes = now.getMinutes()
  return getMinutes >= 10 ? `${getHours}:${getMinutes}` : `${getHours}:0${getMinutes}`
}

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
    this.setState({valorMensagemUsuario: ''})
  };

  onChangeInputNomeUsuario = (event) => {
    this.setState({ valorNomeUsuario: event.target.value });
  };

  onChangeInputMensagemUsuario = (event) => {
    this.setState({ valorMensagemUsuario: event.target.value });
  };

  render() {
    const listaDeMensagens = this.state.mensagem.map((mensagens, i) => {
      return (
        <MessageBubble key={i}>
            <MessageTitle>{mensagens.nomeUsuario}</MessageTitle>
            <MessageText>{mensagens.mensagemUsuario}</MessageText>
            <MessageTime>{messageTime()}</MessageTime>
        </MessageBubble>
      );
    });
      return (
        <Container>
          <MessageBox>
            {listaDeMensagens}
          </MessageBox>
          <InputBox>
              <InputName
                value={this.state.valorNomeUsuario}
                onChange={this.onChangeInputNomeUsuario}
                placeholder={"Nome de usuário"}
              />
              <InputText
                value={this.state.valorMensagemUsuario}
                onChange={this.onChangeInputMensagemUsuario}
                placeholder={"Mensagem"}
              />
              <ButtonSend onClick={this.adicionaMensagem}>Enviar!</ButtonSend>
          </InputBox>
        </Container>
      );
  }
}

export default App;
