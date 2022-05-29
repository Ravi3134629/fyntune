import axios from "axios";

const addShop = async (
  name,
  area,
  category,
  thumb,
  closing,
  opening,
  created_by,
  description
) => {
  try {
    const r = await axios.post(`https://fyntune.herokuapp.com/api/shop/new`, {
      name,
      area,
      category,
      thumb,
      closing,
      opening,
      created_by,
      description,
    });
    return r.data;
  } catch (e) {
    if (e.response.data && e.response) {
      return e.response.data;
    }
  }
};

export default addShop;
