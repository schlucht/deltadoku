import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:1234/api",
    headers: {
      "Content-type": "application/json"
    }
  });