import React, { Component } from 'react';
import TaskManager from '../../modules/TaskManager';
import './TaskForm.css'

class TaskForm extends Component {
    state = {
        task: "",
        completeBy: "",
        complete: false,
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    /*  Local method for validation, set loadingStatus, create task object, invoke the TaskManager post method, and redirect to the full task list
    */
    constructNewTask = evt => {
        evt.preventDefault();
        if (this.state.task === "" || this.state.completeBy === "") {
            window.alert("Please input an task name and date");
        } else {
            this.setState({ loadingStatus: true });
            const task = {
                task: this.state.task,
                completeBy: this.state.completeBy,
                complete: false
            };

            // Create the task and redirect user to task list
            TaskManager.post(task)
            .then(() => this.props.history.push("/tasks"));
        }
    };

    render(){

        return(
            <>
            <form onSubmit={this.constructNewTask}>
                <fieldset>
                    <div className="formgrid">
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="task"
                        placeholder="Task name"
                        />
                        <label htmlFor="task">Task</label>
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="completeBy"
                        placeholder="Complete By"
                        />
                        <label htmlFor="completeBy">Complete by</label>
                    </div>
                    <div className="alignRight">
                        <button
                        type="submit"
                        disabled={this.state.loadingStatus}
                        onClick={this.constructNewTask}
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
        )
    }
}

export default TaskForm