import { Route } from "react-router-dom";
import React, { Component } from "react";
import Home from "./home/Home";
import ChatList from "./chats/ChatList";
import EventCard from "./events/EventCard";
import NewsCard from "./news/NewsCard";
import TaskCard from "./tasks/TaskCard";
import ChatDetail from "./chats/ChatDetail";
import ChatEditForm from "./chats/ChatEditForm";
// import ChatCard from './chats/ChatCard'
import NewsList from "./news/NewsList";
import NewsForm from "./news/NewsForm";
import NewsEditForm from "./news/NewsEditForm";
import TaskList from "./tasks/TaskList";
import TaskForm from "./tasks/TaskForm";
import TaskEditForm from "./tasks/TaskEditForm";
import CompletedTaskList from "./tasks/CompletedTaskList";
import ChatForm from "./chats/ChatForm";

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
          path="/chats/new"
          render={(props) => {
            return <ChatForm {...props} />;
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
        <Route
          exact
          path="/"
          render={(props) => {
            return <Home />;
          }}
        />

        <Route
          path="/events"
          render={(props) => {
            return <EventCard />;
          }}
        />
        <Route
          exact
          path="/news"
          render={(props) => {
            return <NewsList {...props} />;
          }}
        />
        <Route
          exact
          path="/tasks"
          render={(props) => {
            return <TaskList {...props} />;
          }}
        />
        <Route
          exact
          path="/news/new"
          render={(props) => {
            return <NewsForm {...props} />;
          }}
        />
        <Route
          path="/news/:newsId(\d+)/edit"
          render={(props) => {
            return <NewsEditForm {...props} />;
          }}
        />
        <Route
          exact
          path="/tasks/new"
          render={(props) => {
            return <TaskForm {...props} />;
          }}
        />
        <Route
          exact
          path="/tasks/:taskId(\d+)/edit"
          render={(props) => {
            return <TaskEditForm {...props} />;
          }}
        />
        <Route
          path="/tasks/completed"
          render={(props) => {
            return <CompletedTaskList {...props} />;
          }}
        />
      </React.Fragment>
    );
  }
}

export default ApplicationViews;
