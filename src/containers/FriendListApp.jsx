import React, { Component } from "react";
import { connect } from "react-redux";
import getList from "../reducers/getList";

import { Link } from 'react-router-dom';

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
    const { nameFriend, match } = this.props;
   
  
    return <div>
        <div>
          <input type="text" ref={input => {
              this.inputText = input;
            }} />
          <button onClick={this.addNewContext}>Add new NAME</button>
        </div>
        <div>
          <input type="text" ref={input => {
              this.inputSearch = input;
            }} />
          <button onClick={this.findContext}>FIND</button>
          <div>
            <button onClick={() => this.props.onGetList(match.url)}>
              Get list NAME
            </button>
          </div>
        </div>
        <ul>
          {nameFriend.map((commit, index) => <li key={index}>
              {" "}
              <Link to={`about-friend/${commit.id}`}>
                {commit.name}{" "}
              </Link>{" "}
            </li>)}
        </ul>
      </div>;
  }
}

const mapStateProps = (state) => ({
  nameFriend: state.addFriend.filter(commit => commit.name.includes(state.filter))
});

export default connect(mapStateProps, dispatch => ({
  onNewText: name => {
    const payload = {
      id: +Date.now().toString(),
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
