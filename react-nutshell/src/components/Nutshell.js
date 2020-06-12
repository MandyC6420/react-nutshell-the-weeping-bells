import React, { Component } from 'react'
import NavBar from "./nav/NavBar"
import ApplicationViews from "./ApplicationViews"
import './Nutshell.css'
import ChatCard from "./../components/chats/ChatCard"




class Nutshell extends Component {
	render() {
	  return (
		<>
		  <NavBar />
		  <ApplicationViews />
		  {/* <ChatCard /> */}
		</>
	  )
	}
  }

export default Nutshell