import React, { Component } from 'react';
//TODO import task.css when css is added
import './TaskCard.css'

class TaskCard extends Component {
  render() {
    return (
      
      <div className="card">
        <div className="card-content">
        <h3>Task: <span className="card-taskname"><button className="favorite styled"
        type="button" onClick={() => {this.props.history.push(`/tasks/${this.props.task.id}/edit`)}}>
        {this.props.task.task}</button></span></h3>
          <p>Completion by:  {this.props.task.completeBy}</p>
         <form>
           <label>
             Completed:
           <input type="checkbox" name="completed" />
           </label>
         </form>
        </div>
      </div>
      
    );
  }
}

export default TaskCard;