import React, { Component } from 'react'
//import the components we will need
import TaskCard from './TaskCard'
import TaskManager from '../../modules/TaskManager'
import './TaskList.css'

class TaskList extends Component {
    //define what this component needs to render
    state = {
        tasks: [],
    }

componentDidMount(){
    //getAll from TaskManager and hang on to that data; put it in state
    TaskManager.getAll()
    .then((tasks) => {
        this.setState({
            tasks: tasks
        })
    })
}

render(){
    console.log("TaskList: Render");
  
    return(
        <>
        <section className="section-content">
        <button type="button" className="btn"
        onClick={() => {this.props.history.push("/tasks/new")}}>
      New Task
  </button>
</section>
      <div className="container-cards">
        {this.state.tasks.map(task =>
          <TaskCard key={task.id} task={task} {...this.props} />
        )}
      </div>
      </>
    )
  }
}

export default TaskList