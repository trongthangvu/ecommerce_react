import axios from "axios";
export const https = axios.create({
  baseURL: "http://127.0.0.1:8080",
  headers: { "Content-Type": "multipart/form-data" },
});
export const httpsAuth2 = axios.create({
  baseURL: "http://127.0.0.1:8080",
});
