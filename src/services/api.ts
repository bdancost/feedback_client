// src/services/api.ts
import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000/api", // Altere conforme seu backend
  headers: {
    "Content-Type": "application/json",
  },
});

// Adiciona o token automaticamente, se existir
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
