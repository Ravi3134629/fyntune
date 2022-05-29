import axios from "axios";

const login = async (username, password) => {
  try {
    const r = await axios.post(`https://fyntune.herokuapp.com/api/auth/login`, {
      username,
      password,
    });
    return r.data;
  } catch (e) {
    if (e.response.data && e.response) {
      return e.response.data;
    }
  }
};

export default login;
