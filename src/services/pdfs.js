import axios from "axios";
const urlBase = "http://localhost:3001/api/PdfUpload";
const urlGetFiles = "http://localhost:3001/api/get-files";
const urlDelete = "http://localhost:3001/api/delete-files";

let token = null;
const setToken = newToken => {
    token = `bearer ${newToken}`;
}

const create = (newObject) => {
    const config = {
        headers: {
            Authorization: token,
            "Content-Type": "multipart/form-data"
        }
    }
    const request = axios.post(urlBase, newObject, config)

    return request.then(response => {
        if (response.data.status === 200) {
            alert('Archivo subido correctamente');
            console.log(response);

        }
        if (response.data.status === 401) {
            alert('Error al subir el archivo. Error al subir el archivo, token inválido o no existe. Por favor, inicia sesión nuevamente.');
            return response.data.status
        }
        return response
    });
}


const getAll = () => {
    const config = {
        headers: {
            Authorization: token
        }
    }
    const request = axios.get(urlGetFiles, config);
    return request.then(response => response.data.data);
}

const deletePdf = (id) => {
    const config = {
        headers: {
            Authorization: token
        }
    }
    const request = axios.delete(`${urlDelete}/${id}`, config);

    const request2 = new Promise((resolve) => {
        resolve(request)
    });
    return request2.then(response => response);
}

const pdfsService = { create, setToken, getAll, deletePdf };

export default pdfsService;