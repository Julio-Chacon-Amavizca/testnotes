import axios from "axios";
const urlBase = "http://localhost:3001/api/notes";

let token = null;
const setToken = newToken => {
    token = `bearer ${newToken}`;
}

const create = (newObject) => {
    const config = {
        headers: { Authorization: token }
    }
    const request = axios.post(urlBase, newObject, config);
    return request.then(response => response.data);
}

const getAll = () => {
    const request = axios.get(urlBase);
    return request.then(response => response.data);
}



const update = (id, newObject) => {
    const config = {
        headers: { Authorization: token }
    }
    const request = axios.put(`${urlBase}/${id}`, newObject, config);
    return request.then(response => response.data);
}

const deleteNote = (id) => {
    const config = {
        headers: { Authorization: token }
    }
    const request = axios.delete(`${urlBase}/${id}`, config);
    return request.then(response => response.data);
}

const notesService = { create, getAll, update, setToken, deleteNote };

export default notesService;
