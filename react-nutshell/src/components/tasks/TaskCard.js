import React, { Component } from 'react';

class TaskCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          {/* <picture>
            <img src={require('./dog.svg')} alt="My Dog" />
          </picture> */}
          <h3>Task: <span className="card-taskname">take out the trash</span></h3>
          <p>Completion by:  01/01/2021</p>
        </div>
      </div>
    );
  }
}

export default TaskCard;