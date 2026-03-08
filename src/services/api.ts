import axios from "axios";

export const api = axios.create({
  baseURL: "https://www.habbo.com.br/api/public",
  headers: {
    "Content-Type": "application/json",
  },
});