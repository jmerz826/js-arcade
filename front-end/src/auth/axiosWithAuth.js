import axios from "axios";

const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    headers: {
      authorization: token,
    },
    baseURL: "https://js-arcade.herokuapp.com/",
  });
};

export default axiosWithAuth;