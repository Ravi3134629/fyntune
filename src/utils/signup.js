import axios from "axios";

const signup = async (name, username, password) => {
  try {
    const r = await axios.post(
      `https://fyntune.herokuapp.com/api/auth/signup`,
      {
        name,
        username,
        password,
      }
    );
    return r.data;
  } catch (e) {
    if (e.response.data && e.response) {
      return e.response.data;
    }
  }
};

export default signup;
