import axios from "axios";

export let endpoints = {
  users: "/users/",
};

export const API = axios.create({
  baseURL: "http://127.0.0.1:8000",
});
