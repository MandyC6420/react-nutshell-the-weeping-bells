const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/messages/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/messages`).then(result => result.json())
  },
  delete(id) {
    return fetch(`http://localhost:5002/messages/${id}`, {
        method: "DELETE"
    })
    .then(result => result.json())
  },
  update(editedmessages) {
    return fetch(`${remoteURL}/messages/${editedmessages.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedmessages)
    }).then(data => data.json());
  },
  post(newChat) {
    return fetch(`${remoteURL}/messages`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newChat)
    }).then(data => data.json())
}

}




