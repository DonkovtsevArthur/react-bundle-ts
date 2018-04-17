import React, { Component } from "react";


const styleChats = {
  formDiv: {
    width: "100%",
    overflow: "hidden",
    
  },
  chat: {
    overflowY: "scroll",
    marginTop: "5px",
    backgroundColor: "#F0F8FF",
    width: "100%",
    position: "absolute",
    top: "0",
    marginRight: '100px',
    bottom: '0',
    left: '0',
    padding: "20px",
    borderRadius: '10px',
    textAlign: 'right'
 },
  forms: {
    position: 'fixed',

    bottom: "10px",
    width: "100%"
  },
  mess: {
    width: "100%"
  }
};

class Chat extends Component {
  state = {
    text: "",
    message: []
  };
  onMessage = e => {
    if (e.target.value) {
      this.setState({
        text: e.target.value
      });
    }
    return;
  };
  handleSend = e => {
    e.preventDefault();
    if (this.state.text.length > 0) {
      this.state.message.push(this.state.text);
      this.setState({ text: "" });
    }
  };

  render() {
    return (
      <div style={styleChats.formDiv}>
        <ul id="chat" style={styleChats.chat}>
          {this.state.message
            .map((message, key) => <li key={key}>{message}</li>)
            .sort()}
        </ul>
        <form style={styleChats.forms} onSubmit={this.handleSend}>
          <input
            style={styleChats.mess}
            type="text"
            placeholder="введите сообщение..."
            value={this.state.text}
            onChange={this.onMessage}
          />
        </form>
      </div>
    );
  }
}

export default Chat;
