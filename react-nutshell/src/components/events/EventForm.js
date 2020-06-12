import React, { Component } from 'react';
import EventManager from '../../modules/EventManager';
import './EventForm.css'

class EventForm extends Component {
    state = {
        eventName: "",
        date: "",
        location: "",
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    /*  Local method for validation, set loadingStatus, create Event     
    object, invoke the EventManager post method, and redirect to the full event list
    */
    constructNewEvent = evt => {
        evt.preventDefault();
        if (this.state.eventName === "" || this.state.date === ""|| this.state.location === "" ) {
            window.alert("Please input an event name, date, and location");
        } else {
            this.setState({ loadingStatus: true });
            const event = {
                name: this.state.eventName,
                date: this.state.date,
                location: this.state.location,
            };

            // Create the event and redirect user to event list
            EventManager.post(event)
            .then(() => this.props.history.push("/events"));
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
                        id="eventName"
                        placeholder="Event name"
                        />
                        <label htmlFor="eventName">Name</label>
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="date"
                        placeholder="Date"
                        />
                        <label htmlFor="date">Date</label>
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="location"
                        placeholder="Location"
                        />
                        <label htmlFor="location">Location</label>
                    </div>
                    <div className="alignRight">
                        <button
                        type="button"
                        disabled={this.state.loadingStatus}
                        onClick={this.constructNewEvent}
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
        )
    }
}

export default EventForm