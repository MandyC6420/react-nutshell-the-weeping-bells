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

completeTask = id => {
    TaskManager.complete(id)
    .then(TaskManager.getAll)
      .then((newTasks) => {
        this.setState({
            tasks: newTasks
        })
      })
     
}

render(){
    console.log("TaskList: Render");
  
    return(
        <>
        {/* button to add new task */}
        <section className="section-content">
        <button type="button" className="btn"
        onClick={() => {this.props.history.push("/tasks/new")}}>
      New Task
  </button>
  {/* ROUTE TO A COMPLETED TASKS PAGE */}
  <button type="button" className="btn"
        onClick={() => {this.props.history.push("/tasks/completed")}}
        >
      View Completed Tasks
  </button>
  <h1>Tasks To Complete</h1>
 {/* loops through array and prints single cards */}
</section>
      <div className="container-cards">
      {this.state.tasks.map(task =>
        <TaskCard
          key={task.id}
          task={task}
          completeTask={this.completeTask}
          {...this.props}
        />
      )}
      </div>
      </>
    )
  }
}

export default TaskList