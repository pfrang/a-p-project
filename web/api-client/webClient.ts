import axios from "axios";

export const axiosInstance = axios.create({
  headers: {
    "x-functions-key":
      "QmOueUNyJ014by5TgJ7UfDzVVGRt3jv4_QYtkAEa9YulAzFumyBPTA==",
  },
  baseURL: `https://apazurefunc.azurewebsites.net/`,
});
