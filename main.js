const url = "http://localhost:5500/api"

function getUsers() {
    fetch(url)
        .then(response => response.json())
        .then(data => renderApiResult.textContent = JSON.stringify(data))
        .catch(error => console.error(error))
}

function getUser(id) {
    fetch(`${url}/${id}`)
        .then(response => response.json())
        .then(data => {
            userName.textContent = data.name
            userCity.textContent = data.city
            userAvatar.src = data.avatar
        })
        .catch(error => console.error(error))
}

function addUser(newUser) {
    fetch(url, {
            method: "POST",
            body: JSON.stringify(newUser),
            headers: {
                "Content-type": "application/json;charset=UTF-8"
            }
        })
        .then(response => response.json())
        .then(data => alertApi.textContent = data)
        .catch(error => console.error(error))
}

function updateUser(updatedUser, id) {
    fetch(`${url}/${id}`, {
            method: "PUT",
            body: JSON.stringify(updatedUser),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(response => response.json())
        .then(data => alertApi.textContent = data)
        .catch(error => console.error(error))
}

function deleteUser(id){
    fetch(`${url}/${id}`, {
        method:"DELETE",
        headers:{
            "Content-type":"application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(error =>console.error(error))
}

const newUser = {
    name: "Vinicius Hansen",
    avatar: "c",
    city: "Americana"
}
//addUser(newUser)

const updatedUser = {
    name: "Dagostini",
    avatar: "https://picsum.photos/200/300",
    city: "São Paulo"
}
//updateUser(updatedUser,1)

deleteUser(3)
getUsers();
getUser(1);