import React, { Component } from "react";
import ChatManager from "../../modules/ChatManager";
import "./ChatDetail.css";

class ChatDetail extends Component {
  state = {
    message: [],
    loadingStatus: true,
  };

  componentDidMount() {
    console.log("AnimalDetail: ComponentDidMount");
    //get(id) from AnimalManager and hang on to the data; put it into state
    ChatManager.get(this.props.chatId).then((message) => {
      this.setState({
        message: message,
        loadingStatus: false,
      });
    });
  }

  render() {
    return (
      <div className="card">
        <div className="card-content">
          {/* <picture>
            <img src={require('./dog.svg')} alt="My Dog" />
          </picture> */}
          <h3>
            Name:<span style={{ color: "darkslategrey" }}>{this.state.message.userId}</span>
          </h3>
          <p>Message: {this.state.message.text}</p>
          <button
            type="button"
            onClick={() => {
              this.props.history.push(`/chats/${this.state.message.id}/edit`);
            }}
          >
            Edit
          </button>

        </div>
      </div>
    );
  }
  handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    this.setState({loadingStatus: true})
    ChatManager.delete(this.props.messageId)
    .then(() => this.props.history.push("/message"))
}
}

export default ChatDetail;
