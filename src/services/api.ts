import axios from "axios";

export const api = axios.create({
  baseURL: "https://www.habbo.com.br/api/public",
  headers: { "Content-Type": "application/json" },
  timeout: 8000, // evita requests pendurados
});

// trata erros HTTP de forma centralizada
api.interceptors.response.use(
  res => res,
  err => {
    const msg = err.response?.data?.message ?? err.message;
    return Promise.reject(new Error(msg));
  }
);