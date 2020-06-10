import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
import ChatCard from './chats/ChatCard'
//only include these once they are built - previous practice exercise
import EventList from './events/EventList'
import NewsCard from './news/NewsCard'
import TaskCard from './tasks/TaskCard'
import EventDetail from './events/EventDetail'
import EventForm from './events/EventForm'
import EventEditForm from './events/EventEditForm'


class ApplicationViews extends Component {

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <Home />
        }} />
        <Route path="/chats" render={(props) => {
          return <ChatCard />
        }} />
        <Route path="/events/new" render={(props) => {
          return <EventForm {...props} />
        }} />
        <Route exact path="/events" render={(props) => {
          return <EventList {...props} />
        }} />
        <Route exact path="/events/:eventId(\d+)" render={(props) => {
          // Pass the eventId to the EventDetailComponent
          return <EventDetail eventId={parseInt(props.match.params.eventId)} {...props} />
        }} />
        <Route
          path="/events/:eventId(\d+)/edit" render={props => {
            return <EventEditForm {...props} />
          }}
        />
        <Route path="/news" render={(props) => {
          return <NewsCard />
        }} />
        <Route path="/tasks" render={(props) => {
          return <TaskCard />
        }} />
      </React.Fragment>
    )
  }
}

export default ApplicationViews