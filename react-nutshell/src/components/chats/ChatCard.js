import React, { Component } from "react";
import ChatManager from "../../modules/ChatManager";
import { Link } from "react-router-dom";

class ChatCard extends Component {
  render() {
    console.log(this.props.message);
    return (
      <div className="card">
        <div className="card-content1">
          <h3>
            Name: <span className="card-chatname">{this.props.message.id}</span>
          </h3>
          <p>
            Message:{" "}
            <span className="card-petname1">{this.props.message.text}</span>
          </p>
          <button
            type="button"
            onClick={() => this.props.deleteMethodProp(this.props.message.id)}
          >
            Delete
          </button>
          <Link to={`/chats/${this.props.message.id}`}>
            <button>Details</button>
          </Link>
          
        </div>
      </div>
    );
  }
}

export default ChatCard;
