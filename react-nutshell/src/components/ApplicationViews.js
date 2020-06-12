import { Route, Redirect } from "react-router-dom"
import React, { Component } from 'react'
import Home from './home/Home'
import ChatCard from './chats/ChatCard'
//only include these once they are built - previous practice exercise
import EventList from './events/EventList'
import EventDetail from './events/EventDetail'
import EventForm from './events/EventForm'
import EventEditForm from './events/EventEditForm'
import NewsList from './news/NewsList'
import NewsDetail from './news/NewsDetail'
import NewsForm from './news/NewsForm'
import NewsEditForm from './newss/NewsEditForm'
import Login from './auth/Login'
import UserForm from './users/UserForm'
// import TaskCard from './tasks/TaskCard'
import TaskList from './tasks/TaskList'
import TaskForm from './tasks/TaskForm'
import TaskEditForm from './tasks/TaskEditForm'
import CompletedTaskList from './tasks/CompletedTaskList'


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

        <Route path="/news/new" render={(props) => {
          return <NewsForm {...props} />
        }} />

        <Route exact path="/newss" render={props => {
          if (this.isAuthenticated()) {
            return <NewsList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />

        <Route exact path="/news/:newsId(\d+)" render={(props) => {
          // Pass the newsId to the NewsDetailComponent
          return <NewsDetail newsId={parseInt(props.match.params.newsId)} {...props} />
        }} />

        <Route
          path="/newss/:newsId(\d+)/edit" render={props => {
            return <NewsEditForm {...props} />
          }}
        />

        <Route exact path="/tasks" render={props => {
          if (this.isAuthenticated()) {
            return <TaskList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />

        <Route path="/login" component={Login} />
        <Route exact path="/tasks/new" render={(props) => {
          return <TaskForm {...props} />
        }} />

        <Route exact
          path="/tasks/:taskId(\d+)/edit" render={props => {
            return <TaskEditForm {...props} />
          }} />

        <Route
          path="/tasks/completed" render={props => {
            return <CompletedTaskList {...props} />
          }}
        />
      </React.Fragment>
    )
  }
}

export default ApplicationViews