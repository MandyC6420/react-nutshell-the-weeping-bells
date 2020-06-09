import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
import ChatCard from './chats/ChatCard'
//only include these once they are built - previous practice exercise
import EventCard from './events/EventCard'
import NewsCard from './news/NewsCard'
import TaskCard from './tasks/TaskCard'


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
        <Route path="/events" render={(props) => {
          return <EventCard />
        }} />
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