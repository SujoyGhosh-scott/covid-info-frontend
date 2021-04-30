import axios from "axios";

const instance = axios.create({
  baseURL: "https://covid19tracking.narrativa.com",
});

export default instance;
