export const BASE_URL = import.meta.env.process.env.API_BASE_URL || "http://localhost:8073api";

// Secure keys (can also be loaded from env for security)
export const securedHeaderKey = import.meta.env.process.env.API_SECURED_KEY_GET || "getpast";
export const securedHeaderKeyPost = import.meta.env.process.env.API_SECURED_KEY_POST || "hguwgtyae2l";