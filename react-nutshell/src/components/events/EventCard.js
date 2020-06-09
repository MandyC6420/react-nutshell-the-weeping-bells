import React, { Component } from 'react';

class EventCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          
          <h3>Name: <span className="card-eventname">4th of July Parade</span></h3>
          <p>Date: 07/04/2020</p>
          <p>Location: Albany, New York</p>
        </div>
      </div>
    );
  }
}

export default EventCard;