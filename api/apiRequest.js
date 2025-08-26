import axios from "axios";
import { BASE_URL, securedHeaderKey, securedHeaderKeyPost } from "../constants";

const api = axios.create({
  headers: { "Content-Type": "application/json" }
});

// Encode payload consistently
const encodeData = (data) => ({
  data: securedHeaderKeyPost + btoa(JSON.stringify(data)),
});

// 🔹 GET
export const apiGet = async (url, headers = { secureddata: securedHeaderKey }) => {
  const res = await api.get(url, { headers });
  return res.data;
};

export const apiPost = async (url, data) => {
  const encodedData = {
    data: securedHeaderKeyPost + btoa(JSON.stringify(data)),
  };
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(encodedData),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      secureddata: securedHeaderKeyPost + btoa(JSON.stringify(data)),
    },
  });
  return response.json();
};

export const apiDelete = async (url, data) => apiPost(url, data);
export const apiUpdate = async (url, data) => apiPost(url, data);