import axios from "axios";
import { BASE_URL, securedHeaderKey, securedHeaderKeyPost } from "../constants";

const api = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});

// Encode payload consistently
const encodeData = (data) => ({
  data: securedHeaderKeyPost + btoa(JSON.stringify(data)),
});

export const apiGet = async (
  baseURL,
  headers = { secureddata: securedHeaderKey }
) => {
  const res = await api.get(baseURL, { headers });
  return res.data;
};

export const apiPost = async (baseURL, data) => {
  const res = await api.post(baseURL, encodeData(data), {
    headers: { secureddata: securedHeaderKeyPost + btoa(JSON.stringify(data)) },
  });
  return res.data;
};

// 🔹 PUT
export const apiPut = async (baseURL, data) => {
  const res = await api.put(baseURL, encodeData(data), {
    headers: { secureddata: securedHeaderKeyPost + btoa(JSON.stringify(data)) },
  });
  return res.data;
};

// 🔹 DELETE
export const apiDelete = async (baseURL, data) => {
  const res = await api.delete(baseURL, {
    data: encodeData(data),
    headers: { secureddata: securedHeaderKeyPost + btoa(JSON.stringify(data)) },
  });
  return res.data;
};

// export const apiPost = async (url, data) => {
//   const encodedData = {
//     data: securedHeaderKeyPost + btoa(JSON.stringify(data)),
//   };
//   const response = await fetch(url, {
//     method: "POST",
//     body: JSON.stringify(encodedData),
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//       secureddata: securedHeaderKeyPost + btoa(JSON.stringify(data)),
//     },
//   });
//   return response.json();
// };

// export const apiDelete = async (url, data) => apiPost(url, data);
// export const apiUpdate = async (url, data) => apiPost(url, data);
