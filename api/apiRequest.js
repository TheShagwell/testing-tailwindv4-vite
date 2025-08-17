import axios from "axios";
import { securedHeaderKeyPost, getAllHeader } from "../constants";

const api = axios.create({
  headers: { "Content-Type": "application/json" }
});

export const apiGet = async (url, headers = getAllHeader()) => {
  const response = await fetch(url, { headers });
  return response.json();
};