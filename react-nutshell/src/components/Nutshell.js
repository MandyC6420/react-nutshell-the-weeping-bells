import React, { Component } from 'react'
import EventCard from "./events/EventCard"
import TaskCard from "./tasks/TaskCard";
import './Nutshell.css'
import NewsCard from './news/NewsCard';
import ChatCard from "./chats/ChatCard";



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
          <EventCard />
          <NewsCard />
        </div>

	</div>
	
        );
    }
}

export default Nutshell