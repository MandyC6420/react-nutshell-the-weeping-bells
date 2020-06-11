import React, { Component } from 'react';

import './TaskCard.css'

class TaskCard extends Component {
  render() {
      

    return (
      
      // prints individual cards for tasks and pulls from props to fill the info in for you
      // Task name is is also a button that allows you to click to edit
      <div className="card">
        <div className="card-content">
        <h3>Task: <span className="card-taskname"><button className="favorite styled"
        type="button" onClick={() => {this.props.history.push(`/tasks/${this.props.task.id}/edit`)}}>
        {this.props.task.task}</button></span></h3>
          <p>Completion by:  {this.props.task.completeBy}</p>
        {/* Form goes by this ternary statement to let you know what checkbox you should see. */}

        {/* the first statement asks if completed is true, allow the checkbox to mark back to false representing a completed task that is incomplete */}
        {/* The second statement is the else stating the checkbox should mark a task complete (from false to true) */}
         <form>
           {
             this.props.task.completed ?
             <label>
             incomplete:
           <input type="checkbox" name="checkbox" onChange={() => this.props.incompleteTask(this.props.task.id)}></input>
           </label>
           :
           <label>
           Completed:
         <input type="checkbox" name="checkbox" onChange={() => this.props.completeTask(this.props.task.id)}></input>
         </label>

           }
           
         </form>
        </div>
      </div>
      
    );
  }
}

export default TaskCard;