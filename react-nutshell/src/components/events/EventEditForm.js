import React, { Component } from "react"
import EventManager from "../../modules/EventManager"
import "./EventForm.css"

class EventEditForm extends Component {
    //set the initial state
    state = {
        eventName: "",
        date: "",
        location: "",
        loadingStatus: true,
    };

    handleFieldChange = evt => {
      const stateToChange = {}
      stateToChange[evt.target.id] = evt.target.value
      this.setState(stateToChange)
    }

    updateExistingEvent = evt => {
      evt.preventDefault()
      this.setState({ loadingStatus: true });
      const editedEvent = {
        name: this.state.eventName,
                date: this.state.date,
                location: this.state.location,
                id: this.props.match.params.eventId
      };

      EventManager.update(editedEvent)
      .then(() => this.props.history.push("/events"))
    }

    componentDidMount() {
      EventManager.get(this.props.match.params.eventId)
      .then(event => {
          this.setState({
            eventName: event.name,
            date: event.date,
            location: event.location,
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
                id="eventName"
                value={this.state.eventName}
              />
              <label htmlFor="eventName">Event name</label>

              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="date"
                value={this.state.date}
              />
              <label htmlFor="date">Date</label>

              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="location"
                value={this.state.location}
              />
              <label htmlFor="location">Location</label>
                    </div>
            <div className="alignRight">
              <button
                type="button" disabled={this.state.loadingStatus}
                onClick={this.updateExistingEvent}
                className="btn btn-primary"
              >Submit</button>
            </div>
          </fieldset>
        </form>
        </>
      );
    }
}

export default EventEditForm