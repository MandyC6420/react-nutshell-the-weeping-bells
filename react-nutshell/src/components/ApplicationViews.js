import { Route, Redirect } from "react-router-dom"
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
import Login from './auth/Login'
import UserForm from './users/UserForm'


class ApplicationViews extends Component {

  // Check if credentials are in local storage
  //returns true/false
  isAuthenticated = () => localStorage.getItem("credentials") !== null


  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          if (this.isAuthenticated()) {
            return <Home {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route path="/users/new" render={(props) => {
          return <UserForm {...props} />
        }} />
        <Route path="/chats" render={(props) => {
          return <ChatCard />
        }} />
        <Route path="/events/new" render={(props) => {
          return <EventForm {...props} />
        }} />
        <Route exact path="/events" render={props => {
          if (this.isAuthenticated()) {
            return <EventList {...props} />
          } else {
            return <Redirect to="/login" />
          }
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
        <Route path="/login" component={Login} />
      </React.Fragment>
    )
  }
}

export default ApplicationViews