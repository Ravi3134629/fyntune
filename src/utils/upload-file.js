import axios from "axios";

const uploadFile = async (thumb) => {
  try {
    const r = await axios.post(
      `https://fyntune.herokuapp.com/api/shop/upload/thumb`,
      {
        thumb,
      }
    );
    return r.data;
  } catch (e) {
    if (e.response.data && e.response) {
      return e.response.data;
    }
  }
};

export default uploadFile;
