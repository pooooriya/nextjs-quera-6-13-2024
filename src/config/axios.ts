import axios from "axios";

export const AXIOS = axios.create({
  baseURL: "https://fakestoreapi.com",
  timeout: 20000,
});
