// Pick up base API URL from environment, with a fallback (local dev)
export const BASE_URL = import.meta.env.process.env.API_BASE_URL || "http://localhost:8080/api";

// Secure keys (can also be loaded from env for security)
export const securedHeaderKey = import.meta.env.process.env.API_SECURED_KEY_GET || "getall";
export const securedHeaderKeyPost = import.meta.env.process.env.API_SECURED_KEY_POST || "hguwgtyae4z";