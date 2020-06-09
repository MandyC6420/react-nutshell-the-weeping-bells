import React, { Component } from 'react';

class ChatCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          {/* <picture>
            <img src={require('./dog.svg')} alt="My Dog" />
          </picture> */}
          <h3>Name: <span className="card-petname">Suzie</span></h3>
          <p>Message: It's awful hot, sure would like some ice cream!</p>
        </div>
      </div>
    );
  }
}

export default ChatCard;