import React, { Component } from 'react'
import TaskCard from "./tasks/TaskCard";
import './Nutshell.css'
import ChatCard from "./chats/ChatCard";
// import EventCard from "./events/EventCard"


class Nutshell extends Component {
    render() {
        return (
	<div class="container-main">
	    	<div class="section-content">
                	<h2>Student Kennels<br />
                   	 	<small>Loving care when you're not there.</small>
                	</h2>
                	<address>
                    		Visit Us at the Nashville North Location
                    		<br />500 Puppy Way
                	</address>
            	</div>
				<div class="container-cards">
          <TaskCard />
          <ChatCard />
          {/* <EventCard /> */}
        </div>

	</div>
	
        );
    }
}

export default Nutshell