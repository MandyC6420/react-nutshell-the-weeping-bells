import React, { Component } from 'react'
import ChatCard from './ChatCard'
import ChatManager from '../../modules/ChatManager'


class ChatList extends Component {
    //define what this component needs to render
    state = {
        message: [],
    }

    deleteMethodInChatList = id => {
      ChatManager.delete(id)
      .then(() => {
        ChatManager.getAll()
        .then((newMessage) => {
          this.setState({
              message: newMessage
          })
        })
      })
    }

componentDidMount(){
    console.log("CHAT LIST: ComponentDidMount");
    //getAll from AnimalManager and hang on to that data; put it in state
    ChatManager.getAll()
    .then((message) => {
        this.setState({
            message: message
        })
    })
}

render(){
    console.log("ChatList: Render");
    
    return(
      <div className="container-cards">
        {this.state.message.map(message =>
          <ChatCard
            key={message.id}
            message={message}
            deleteMethodProp={this.deleteMethodInChatList}
          />
        )}
      </div>

    )
  }
  
}

export default ChatList

