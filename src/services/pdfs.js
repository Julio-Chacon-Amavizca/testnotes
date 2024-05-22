import axios from "axios";
const urlBase = "http://localhost:3001/api/PdfUpload";
const urlGetFiles = "http://localhost:3001/api/get-files";

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
    /*.then((data) => {
        console.log(data.data);
        if (data.data.status === 200) {
            console.log('Archivo subido correctamente');
            console.log(data);
        }
        if (data.data.status === 401) {
            console.log('Error al subir el archivo');
            alert('Error al subir el archivo, token inválido o no existe. Por favor, inicia sesión nuevamente.');
        }
    });*/

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
    const request = axios.get(urlGetFiles);
    return request.then(response => response.data.data);
}

const pdfsService = { create, setToken, getAll };

export default pdfsService;