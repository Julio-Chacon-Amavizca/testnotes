import axios from "axios";
const urlBase = "https://infinite-harbor-17831-45297fed1790.herokuapp.com/api/notes";

const create = ({ content, date }) => {
    return axios.post(urlBase, { content, date })
        .then(response => {
            const { data } = response;
            return data;
        });
}

const getAll = () => {
    return axios.get(urlBase)
        .then(response => {
            const { data } = response;
            return data;
        });
}



export { create, getAll };