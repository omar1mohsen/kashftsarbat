import axios, { AxiosError, AxiosResponse, AxiosInstance } from "axios";
import { logOut } from "@/utils/helper";

const BASE_URL = "https://phpv8.aait-d.com/leak_detection/public/api/website"

const axiosInstance = axios.create({
  baseURL:  BASE_URL,
  headers: {
    "Accept-Language": "ar",
  },
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const { status } = error.response || {};
    switch (status) {
      case 400:
        console.error("Bad Request:", status);
        break;
      case 401:
        console.error("Unauthorized:", status);
        // You could log out the user or handle token expiration here
        logOut(true);
        break;
      case 404:
        console.error("Not Found:", status);
        break;
      case 500:
        console.error("Server Error:", status);
        break;
      default:
        console.error("Unhandled Error:", status);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
