import React, { Component } from "react"
import TaskManager from "../../modules/TaskManager"
// import "./TaskForm.css"

class TaskEditForm extends Component {
    //set the initial state
    state = {
      task: "",
      completeBy: "",
      complete: false,
      loadingStatus: true,
    };

    handleFieldChange = evt => {
      const stateToChange = {}
      stateToChange[evt.target.id] = evt.target.value
      this.setState(stateToChange)
    }

    updateExistingTask = evt => {
      evt.preventDefault()
      this.setState({ loadingStatus: true });
      const editedTask = {
        id: this.props.match.params.taskId,
        task: this.state.task,
        completeBy: this.state.completeBy,
        complete: false
      };

      TaskManager.update(editedTask)
      .then(() => this.props.history.push("/tasks"))
    }

    componentDidMount() {
      TaskManager.get(this.props.match.params.taskId)
      .then(task => {
          this.setState({
            task: task.task,
            completeBy: task.completeBy,
            complete: false,
            loadingStatus: false,
          });
      });
    }


    render() {
      return (
        <>
        <form onSubmit={this.updateExistingTask}>
          <fieldset>
            <div className="formgrid">
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="task"
                value={this.state.task}
              />
              <label htmlFor="task">Task</label>
            </div>

            <div className="alignRight">
              <button
                type="submit" disabled={this.state.loadingStatus}
                onClick={this.updateExistingTask}
                className="btn btn-primary"
              >Save Changes</button>
            </div>
          </fieldset>
        </form>
        </>
      );
    }
}

export default TaskEditForm