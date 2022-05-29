import axios from "axios";
import Cookies from "js-cookie";
const getUser = async () => {
  try {
    const r = await axios.get(`https://fyntune.herokuapp.com/api/auth/me`, {
      headers: {
        Authorization: Cookies.get("jwt-token"),
      },
    });
    return r.data;
  } catch (e) {
    if (e.response.data && e.response) {
      return e.response.data;
    }
  }
};

export default getUser;
