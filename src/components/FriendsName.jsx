import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const FriendsName = ({ names }) => {
  return (
    <div>
      <Link to="/friend">Back</Link>
      <div>{names.name}</div>
    </div>
  );
};

const mapStateProps = (state, props) => {
  console.log(Number(props.match.params.id));
  return {
    names: state.addFriend.find(
      freind => freind.id === Number(props.match.params.id)
    )
  };
};

export default connect(mapStateProps)(FriendsName);
