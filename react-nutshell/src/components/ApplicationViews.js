<<<<<<< HEAD
import { Route } from "react-router-dom";
import React, { Component } from "react";
import Home from "./home/Home";
import ChatList from "./../components/chats/ChatList";
import EventCard from "./events/EventCard";
import NewsCard from "./news/NewsCard";
import TaskCard from "./tasks/TaskCard";
// import Login from './auth/Login'
import ChatDetail from "./../components/chats/ChatDetail";
import ChatEditForm from "./../components/chats/ChatEditForm";
=======
import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
import ChatCard from './chats/ChatCard'
//only include these once they are built - previous practice exercise
import EventCard from './events/EventCard'
import NewsCard from './news/NewsCard'
// import TaskCard from './tasks/TaskCard'
import TaskList from './tasks/TaskList'
import TaskForm from './tasks/TaskForm'
import TaskEditForm from './tasks/TaskEditForm'
import CompletedTaskList from './tasks/CompletedTaskList'

>>>>>>> master

class ApplicationViews extends Component {
  // Check if credentials are in local storage
  //returns true/false
  //     isAuthenticated = () => localStorage.getItem("credentials") !== null
  // }

  render() {
    return (
      <React.Fragment>
<<<<<<< HEAD
        {/* <Route path="/login" component={Login} /> */}
        <Route
          exact
          path="/"
          render={(props) => {
            return <Home />;
          }}
        />
        <Route
          exact
          path="/chats"
          render={(props) => {
            return <ChatList {...props} />;
          }}
        />
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
        
        <Route
          path="/events"
          render={(props) => {
            return <EventCard />;
          }}
        />
        
        <Route
          path="/news"
          render={(props) => {
            return <NewsCard />;
          }}
        />
        
        <Route
          path="/tasks"
          render={(props) => {
            return <TaskCard />;
          }}
        />
=======
        <Route exact path="/" render={(props) => {
          return <Home />
        }} />
        <Route path="/chats" render={(props) => {
          return <ChatCard />
        }} />
        <Route path="/events" render={(props) => {
          return <EventCard />
        }} />
        <Route path="/news" render={(props) => {
          return <NewsCard />
        }} />
        <Route exact path="/tasks" render={(props) => {
          return <TaskList {...props}/>
        }} />
        <Route exact path="/tasks/new" render={(props) => {
        return <TaskForm {...props} />
        }} />
        <Route exact
        path="/tasks/:taskId(\d+)/edit" render={props => {
        return <TaskEditForm {...props} />
        }}/>
         <Route 
        path="/tasks/completed" render={props => {
        return <CompletedTaskList {...props} />
        }}
/>
>>>>>>> master
      </React.Fragment>
    );
  }
}

export default ApplicationViews;
