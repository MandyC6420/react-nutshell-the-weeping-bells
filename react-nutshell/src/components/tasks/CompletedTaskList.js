import React, { Component } from 'react'
//import the components we will need
import TaskCard from './TaskCard'
import TaskManager from '../../modules/TaskManager'
import './CompletedTaskList.css'

class CompletedTaskList extends Component {
    //define what this component needs to render
    state = {
        tasks: [],
    }

//    gets all tasks marked with a boolean of true from json
    componentDidMount(){
    //getAllcompleted from TaskManager and hang on to that data; put it in state
    TaskManager.getAllCompleted()
    .then((tasks) => {
        this.setState({
            tasks: tasks
        })
    })
}
// function that will allow me to change the boolean back to false to represent an incomplete task
incompleteTask = id => {
    TaskManager.incomplete(id)
    .then(TaskManager.getAllCompleted)
      .then((newTasks) => {
        this.setState({
            tasks: newTasks
        })
      })
     
}

render(){
    console.log("completeTaskList: Render");
  
    return(
        // button to take you back to tasks you still have to do
        <>
        <section className="section-content">
        <button type="button" className="btn"
        onClick={()=> {this.props.history.push("/tasks")}}
        >
      View Tasks to Complete
  </button>
  <h1>Tasks Completed</h1>
 {/* loops through array to print tasks marked true and changed hte checkbox option from 'complete' to incomplete */}
</section>
      <div className="container-cards">
      {this.state.tasks.map(task =>
        <TaskCard
          key={task.id}
          task={task}
          incompleteTask={this.incompleteTask}
          {...this.props}
        />
      )}
      </div>
      </>
    )
  }
}

export default CompletedTaskList