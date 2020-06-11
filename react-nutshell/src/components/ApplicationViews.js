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

class ApplicationViews extends Component {
  // Check if credentials are in local storage
  //returns true/false
  //     isAuthenticated = () => localStorage.getItem("credentials") !== null
  // }

  render() {
    return (
      <React.Fragment>
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
      </React.Fragment>
    );
  }
}

export default ApplicationViews;
