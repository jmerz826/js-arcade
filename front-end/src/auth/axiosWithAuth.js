import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    headers: {
      authorization: token,
    },
    baseURL: "https://js-arcade.herokuapp.com/",
  });
};

export const newScoreAxios = () => {
  const token = localStorage.getItem("score-token");

  return axios.create({
    headers: {
      authorization: token,
    },
    baseURL: "https://js-arcade.herokuapp.com/",
  });
}