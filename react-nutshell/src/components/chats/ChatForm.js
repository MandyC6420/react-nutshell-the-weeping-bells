import React, { Component } from 'react';
import ChatManager from '../../modules/ChatManager';
import './ChatForm.css'

class ChatForm extends Component {
    state = {
        userId: "",
        text: "",
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    /*  Local method for validation, set loadingStatus, create animal      object, invoke the AnimalManager post method, and redirect to the full animal list
    */
    constructNewChat = evt => {
        evt.preventDefault();
        if (this.state.userId === "" || this.state.text === "") {
            window.alert("Please enter a new message!");
        } else {
            this.setState({ loadingStatus: true });
            const chat = {
                userId: this.state.userId,
                text: this.state.text,
            };

            // Create the animal and redirect user to animal list
            ChatManager.post(chat)
            .then(() => this.props.history.push("/chats"));
        }
    };

    render(){

        return(
            <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="userId"
                        placeholder="Name"
                        />
                        <label htmlFor="userId">Name</label>
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="text"
                        placeholder="Message"
                        />
                        <label htmlFor="text">Message</label>
                    </div>
                    <div className="alignRight">
                        <button
                        type="button"
                        disabled={this.state.loadingStatus}
                        onClick={this.constructNewChat}
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
        )
    }
}

export default ChatForm