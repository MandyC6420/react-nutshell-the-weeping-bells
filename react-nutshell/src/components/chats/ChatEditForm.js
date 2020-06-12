import React, { Component } from "react";
import ChatManager from "../../modules/ChatManager";
// import "./ChatEditForm.css"

class ChatEditForm extends Component {
  //set the initial state
  state = {
    text: "",
    loadingStatus: true,
  };

  handleFieldChange = (evt) => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  updateExistingChat = (evt) => {
    evt.preventDefault();
    this.setState({ loadingStatus: true });
    const editedchat = {
      id: this.props.match.params.chatId,
      userId: 1,
      text: this.state.text,
      timestamp: "06/11/2020",
    };

    ChatManager.update(editedchat).then(() =>
      this.props.history.push("/chats")
    );
  };

  componentDidMount() {
    ChatManager.get(this.props.match.params.chatId).then((message) => {
      this.setState({
        text: message.text,
        loadingStatus: false,
      });
    });
  }

  render() {
    return (
      <>
        <form>
          <fieldset>
            <div className="formgrid">
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="text"
                value={this.state.text}
              />
              <label htmlFor="text"></label>
            </div>
            <div className="alignRight">
              <button
                type="button"
                disabled={this.state.loadingStatus}
                onClick={this.updateExistingChat}
                className="btn btn-primary"
              >
                Submit
              </button>
            </div>
          </fieldset>
        </form>
      </>
    );
  }
}

export default ChatEditForm;
