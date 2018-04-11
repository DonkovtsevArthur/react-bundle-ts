import React, { Component } from "react";
import { connect } from "react-redux";
import getList from "../reducers/getList";

class FriendListApp extends Component {
  addNewContext = () => {
    if (this.inputText.value) {
      this.props.onNewText(this.inputText.value);
      this.inputText.value = "";
    }
  };
  findContext = () => {
    console.log(this.inputSearch.value);
    this.props.onFindContext(this.inputSearch.value);
  };
  render() {
    const { commit } = this.props;

    return (
      <div>
        <div>
          <input
            type="text"
            ref={input => {
              this.inputText = input;
            }}
          />
          <button onClick={this.addNewContext}>Add new context</button>
        </div>
        <div>
          <input
            type="text"
            ref={input => {
              this.inputSearch = input;
            }}
          />
          <button onClick={this.findContext}>Find context</button>
          <div>
            <button onClick={this.props.onGetList}>Get list name</button>
          </div>
        </div>
        <ul>
          {commit.map((commit, index) => <li key={index}>{commit.name}</li>)}
        </ul>
      </div>
    );
  }
}

const mapStateProps = state => ({
  commit: state.addFriend.filter(commit => commit.name.includes(state.filter))
});

export default connect(mapStateProps, dispatch => ({
  onNewText: name => {
    const payload = {
      id: Date.now().toString(),
      name
    };
    dispatch({ type: "ADD_NEW", payload });
  },
  onFindContext: name => {
    dispatch({ type: "FIND_CONTEXT", payload: name });
  },
  onGetList: () => {
    dispatch(getList());
  }
}))(FriendListApp);
