import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
import ChatCard from './chats/ChatCard'
//only include these once they are built - previous practice exercise
import EventCard from './events/EventCard'
// import NewsCard from './news/NewsCard'
import TaskCard from './tasks/TaskCard'
import NewsList from './news/NewsList'
import NewsForm from './news/NewsForm'
import NewsEditForm from './news/NewsEditForm'



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
        <Route exact path="/news" render={(props) => {
          return <NewsList {...props} />
        }} />
        <Route path="/tasks" render={(props) => {
          return <TaskCard />
        }} />
        <Route exact path="/news/new" render={(props) => {
          return <NewsForm {...props} />
        }} />
        <Route path="/news/:newsId(\d+)/edit" render={props => {
          return <NewsEditForm {...props} />
        }}
        />
      </React.Fragment>
    )
  }
}

export default ApplicationViews