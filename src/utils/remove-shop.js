import axios from "axios";

const removeShopPost = async (sid, public_id) => {
  try {
    const r = await axios.delete(
      `https://fyntune.herokuapp.com/api/shop/destory/${sid}/${public_id}`
    );
    return r.data;
  } catch (e) {
    if (e.response.data && e.response) {
      return e.response.data;
    }
  }
};

export default removeShopPost;
