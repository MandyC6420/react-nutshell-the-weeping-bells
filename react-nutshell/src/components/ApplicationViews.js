import { Route, Redirect } from "react-router-dom"
import React, { Component } from 'react'
import Home from './home/Home'

//only include these once they are built - previous practice exercise
import EventList from './events/EventList'
import EventDetail from './events/EventDetail'
import EventForm from './events/EventForm'
import EventEditForm from './events/EventEditForm'
import NewsList from './news/NewsList'
import ChatEditForm from "./chats/ChatEditForm";
import NewsForm from './news/NewsForm'
import NewsEditForm from './news/NewsEditForm'
import Login from './auth/Login'
import UserForm from './users/UserForm'
import ChatList from "./chats/ChatList";
import TaskList from './tasks/TaskList'
import TaskForm from './tasks/TaskForm'
import TaskEditForm from './tasks/TaskEditForm'
import CompletedTaskList from './tasks/CompletedTaskList'
import ChatForm from "./chats/ChatForm";
import ChatDetail from "./chats/ChatDetail";

class ApplicationViews extends Component {
  // Check if credentials are in local storage
  //returns true/false
  //     isAuthenticated = () => localStorage.getItem("credentials") !== null
  // }

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

        <Route
          path="/chats/new"
          render={(props) => {
            return <ChatForm {...props} />;
          }}
        />
        <Route exact path="/chats" render={props => {
          if (this.isAuthenticated()) {
            return <ChatList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route
          path="/chats/:chatId(\d+)/edit"
          render={(props) => {
            return <ChatEditForm {...props} />;
          }}
        />

        <Route
          exact
          path="/chats/:chatId(\d+)"
          render={(props) => {
            // Pass the animalId to the AnimalDetailComponent
            return (
              <ChatDetail
                chatId={parseInt(props.match.params.chatId)}
                {...props}
              />
            );
          }}
        />


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

        <Route exact path="/news" render={props => {
          if (this.isAuthenticated()) {
            return <NewsList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />



        <Route
          path="/news/:newsId(\d+)/edit" render={props => {
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
    );
  }
}

export default ApplicationViews;
