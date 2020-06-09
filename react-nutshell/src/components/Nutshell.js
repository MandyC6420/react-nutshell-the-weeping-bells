import React, { Component } from 'react'
import EventCard from "./events/EventCard"
import TaskCard from "./tasks/TaskCard";
import './Nutshell.css'
import NewsCard from './news/NewsCard';

class Nutshell extends Component {
    render() {
        return (
            <div class="container-main">
                <div class="section-content">
                    <h2>Stark Industries<br />
                        <small>Open the door to your imagination.</small>
                    </h2>
                    <address>
                        Visit Us at the New York Location
                    		<br />3000 Avengers Way
                	</address>
                </div>
                <div class="container-cards">
                    <EventCard />
                    <TaskCard />
                    <NewsCard />

                </div>
            </div>

	
	
	
        );
    }
}

export default Nutshell