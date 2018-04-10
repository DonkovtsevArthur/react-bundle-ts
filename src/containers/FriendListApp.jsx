import React, { Component } from "react";
import { connect } from "react-redux";

class FriendListApp extends Component {
  addNewContext = () => {
    if (this.inputText.value) {
      this.props.onNewText(this.inputText.value);
      this.inputText.value = "";
    }
  };
  render() {
    const { textState } = this.props;
    return (
      <div>
        <input
          type="text"
          ref={input => {
            this.inputText = input;
          }}
        />
        <button onClick={this.addNewContext}>Add new context</button>
        <ul>{textState.map((item, index) => <li key={index}>{item}</li>)}</ul>
      </div>
    );
  }
}

export default connect(
  state => ({
    textState: state
  }),
  dispatch => ({
    onNewText: newContext => {
      dispatch({ type: "ADD_NEW", payload: newContext });
    }
  })
)(FriendListApp);
