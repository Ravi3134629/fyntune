import axios from "axios";
const getShops = async () => {
  try {
    const r = await axios.get(`https://fyntune.herokuapp.com/api/shop/all`);
    return r.data;
  } catch (e) {
    if (e.response.data && e.response) {
      return e.response.data;
    }
  }
};

export default getShops;
