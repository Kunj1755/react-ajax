import React, { Component } from "react";

import "./FullPost.css";
import Axios from "axios";

class FullPost extends Component {
  state = {
    loadedPost: null
  };

  componentDidUpdate() {
    //if id is not null
    if (
      !this.state.loadedPost ||
      (this.state.loadedPost && this.state.loadedPost.id !== this.props.id)
    ) {
      Axios.get(
        "https://jsonplaceholder.typicode.com/posts/" + this.props.id
      ).then(response => {
        this.setState({ loadedPost: response.data });
      });
    }
  }

  deletePostHandler = () => {
    Axios.delete(
      "https://jsonplaceholder.typicode.com/posts/" + this.props.id
    ).then(response => {
      console.log(response);
    });
  };

  render() {
    let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;

    if (this.props.id) {
      post = <p style={{ textAlign: "center" }}>Loading...</p>;
    }
    // As soon as we have a post, this if block will execute
    if (this.state.loadedPost) {
      post = (
        <div className="FullPost">
          <h1>{this.state.loadedPost.title}</h1>
          <p>{this.state.loadedPost.body}</p>
          <div className="Edit">
            <button onClick={this.deletePostHandler} className="Delete">
              Delete
            </button>
          </div>
        </div>
      );
    }
    return post;
  }
}

export default FullPost;
