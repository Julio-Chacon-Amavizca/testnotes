import axios from "axios";

const urlBase = "http://localhost:3001/api/users";

let token = null;

const setToken = newToken => {
    token = `bearer ${newToken}`;
}

const createUser = async (newObject) => {
    const config = {
        headers: { Authorization: token }
    }
    const response = await axios.post(urlBase, newObject, config);
    return response;
}

const getAll = () => {
    const config = {
        headers: {
            Authorization: token
        }
    }
    const request = axios.get(urlBase, config);
    return request.then(response => response.data);
}

const deleteUser = (id) => {
    const config = {
        headers: {
            Authorization: token
        }
    }
    console.log('deleteUser: ', id)
    const request = axios.delete(`${urlBase}/${id}`, config);
    return request.then(response => response);
}

const updateUser = (id, userObject) => {
    const config = {
        headers: {
            Authorization: token
        }
    }
    const request = axios.put(`${urlBase}/${id}`, userObject, config);
    return request.then(response => response);
}


const userService = { setToken, createUser, getAll, deleteUser, updateUser };

export default userService;
