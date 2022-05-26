import { API_BASE_URL } from "../utils/constants";

export const generateEmail = (body: { name: string; domain: string }) =>
  new Promise((resolve, reject) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };
    fetch(API_BASE_URL, requestOptions)
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });
