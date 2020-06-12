import React, { Component } from 'react';
import EventManager from '../../modules/EventManager';
import './EventDetail.css'

class EventDetail extends Component {

  state = {
      name: "",
      date: "",
      location: "",
      loadingStatus: true,
  }

  componentDidMount(){
    console.log("EventDetail: ComponentDidMount");
    //get(id) from EventManager and hang on to the data; put it into state
    EventManager.get(this.props.eventId)
    .then((event) => {
      this.setState({
        name: event.name,
        date: event.date,
        location: event.location,
        loadingStatus: false
      });
    });
  }

  handleDelete = () => {
    //invoke the delete function in EventManger and re-direct to the animal list.
    this.setState({loadingStatus: true})
    EventManager.delete(this.props.eventId)
    .then(() => this.props.history.push("/events"))
}

  render() {
    return (
      <div className="card">
        <div className="card-content">
            <h3>Name: <span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
            <p>Date: {this.state.date}</p>
            <p>Location: {this.state.location}</p>
            <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Event Delete</button>
        </div>
      </div>
    );
  }
}

export default EventDetail;