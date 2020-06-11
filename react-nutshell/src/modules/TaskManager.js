const remoteURL = "http://localhost:5002"

export default {
    get(id) {
        return fetch(`${remoteURL}/tasks/${id}`).then(result => result.json())
    },
    getAll() {
        return fetch(`${remoteURL}/tasks?completed=false`).then(result => result.json())
    },
    post(newTask) {
        return fetch(`${remoteURL}/tasks`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newTask)
        }).then(data => data.json())
    },
    update(editedTask) {
        return fetch(`${remoteURL}/tasks/${editedTask.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedTask)
        }).then(data => data.json())
    },
    complete(id) {
       return fetch(`${remoteURL}/tasks/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ completed: true })
        }).then(r => r.json())
    },
    getAllCompleted() {
        return fetch(`${remoteURL}/tasks?completed=true`).then(result => result.json())
    },
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