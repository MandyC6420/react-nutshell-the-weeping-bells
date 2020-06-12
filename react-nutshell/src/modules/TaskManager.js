const remoteURL = "http://localhost:5002"

export default {
    get(id) {
        return fetch(`${remoteURL}/tasks/${id}`).then(result => result.json())
    },
    // gets all tasks that are not completed
    getAll() {
        return fetch(`${remoteURL}/tasks?completed=false`).then(result => result.json())
    },
    // posts new task to json after submitted in add task
    post(newTask) {
        return fetch(`${remoteURL}/tasks`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newTask)
        }).then(data => data.json())
    },
    // updates the task name and put to json
    update(editedTask) {
        return fetch(`${remoteURL}/tasks/${editedTask.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedTask)
        }).then(data => data.json())
    },
    // changes the boolean of completed from false to true when the checkbox is clicked in tasks to complete
    complete(id) {
       return fetch(`${remoteURL}/tasks/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ completed: true })
        }).then(r => r.json())
    },
    // gets all tasks marked true for completed tasks
    getAllCompleted() {
        return fetch(`${remoteURL}/tasks?completed=true`).then(result => result.json())
    },
    // patch to change completed tasks back to false
    incomplete(id) {
        return fetch(`${remoteURL}/tasks/${id}`, {
             method: "PATCH",
             headers: {
                 "Content-Type": "application/json"
             },
             body: JSON.stringify({ completed: false })
         }).then(r => r.json())
     },
}