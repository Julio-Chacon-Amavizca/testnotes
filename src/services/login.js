import axios from "axios";

const urlBase = "http://localhost:3001/api/login";

const login = async credentials => {
    const { data } = await axios.post(urlBase, credentials);
    return data;
}

const loginService = { login };

export default loginService;