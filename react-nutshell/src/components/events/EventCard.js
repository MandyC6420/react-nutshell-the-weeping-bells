import React, { Component } from 'react';
import "./Events.css"
import { Link } from "react-router-dom";

class EventCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          
          <h3>Name: <span className="card-eventname">{this.props.event.name}</span></h3>
          <p>Date: {this.props.event.date}</p>
          <p>Location: {this.props.event.location}</p>
          <Link to={`/events/${this.props.event.id}`}><button>Event Details</button></Link>
          <button type="button"
        onClick={() => {this.props.history.push(`/events/${this.props.event.id}/edit`)}}>Edit Event</button>
        </div>
      </div>
    );
  }
}

export default EventCard;