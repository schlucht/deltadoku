import axios from "axios";


const gitpodURL = 'https://1234-schlucht-deltadoku-4i42upsur99.ws-eu77.gitpod.io/api/'
const homeURL = '"http://localhost:1234/api"'

export default axios.create({
    baseURL: gitpodURL,
    headers: {
      "Content-type": "application/json"
    }
  });
