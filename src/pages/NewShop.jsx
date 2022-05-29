import React from "react";
import toast from "react-hot-toast";
import { connect } from "react-redux";
import Header from "../components/Header/Header";
import addShop from "../utils/addShop";
import uploadFile from "../utils/upload-file";
// import addCamp from '../utils/add_camp';
import "./NewShop.css";

function NewShop({ insertCamp, user }) {
  const [name, setName] = React.useState("");
  const [image, setImage] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [area, setArea] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [opening, setOpening] = React.useState(false);
  const [closing, setClosing] = React.useState("");
  const [uploading, setUploading] = React.useState(false);
  const [non_authenticated, setNonAuthenticated] = React.useState(false);

  React.useEffect(() => {
    if (!user) {
      setNonAuthenticated(true);
    } else {
      setNonAuthenticated(false);
    }
  }, [user]);
  const handleCampAdd = (e) => {
    let alpha_reg = /^[A-Za-z\s]*$/;
    e.preventDefault();
    if (name && description && opening && closing && area && category) {
      // check is name of the shop only have alphabets
      if (!alpha_reg.test(name)) {
        alert("make sure shop name have only alphabets");
        return;
      }
      // check is opening time is less than and not equal to closing time
      if (new Date(opening) >= new Date(closing)) {
        alert("make sure opening time is less than closing time");
        return;
      }
      addShop(
        name,
        area,
        category,
        image,
        closing,
        opening,
        user.id,
        description
      )
        .then((data) => {
          setName("");
          setImage("");
          setDescription("");
          setArea("");
          setCategory("");
          setOpening(false);
          setClosing("");
          window.location.href = "/";
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    const allowedExtension = ["image/jpg", "image/jpeg", "image/png"];
    const reader = new FileReader();
    if (file) {
      const { type, size } = file;
      if (!allowedExtension.includes(type)) {
        alert("Please select an image file");
        return;
      }
      if (size > 1000000) {
        alert("Image size should be less than 1mb");
        return;
      }

      reader.addEventListener(
        "load",
        function () {
          // convert image file to base64 string
          setUploading(true);
          uploadFile(reader.result)
            .then((r) => {
              console.log(r);
              const thumbnail = {
                url: r.url,
                public_id: r.public_id,
              };
              setImage(thumbnail);
              setUploading(false);
            })
            .catch((e) => {
              console.log(e);
            });
        },
        false
      );

      reader.readAsDataURL(file);
    }
  };

  if (non_authenticated) {
    return (
      <div className="non_auth">
        <div>
          <h1
            style={{
              fontSize: 22,
            }}
          >
            Unautneticated
          </h1>
          <a href="/login" className="login_redirect_btn px-3 py-3 mt-5">
            Login
          </a>
        </div>
      </div>
    );
  }
  return (
    <div className="new-camp-page">
      <div className="new-camp-body">
        <h2
          style={{
            fontSize: 32,
            fontWeight: 600,
          }}
        >
          Add New Shop
        </h2>
        <form className="new-camp-form" onSubmit={handleCampAdd}>
          <div className="input-field">
            <label htmlFor="shop_name">Shop Name</label>
            <input
              type="text"
              name="shop_name"
              id="shop_name"
              placeholder="Shop name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <label
            htmlFor="thumb"
            className={`image_btn py-3 px-3 font-bold ${
              image && !uploading && "uploaded_btn"
            }`}
          >
            <input type="file" name="thumb" id="thumb" onChange={handleImage} />
            <span>
              {!image && !uploading && "Choose Image"}
              {!image && uploading && "Uploading.."}
              {image && !uploading && "Change Image"}
            </span>
          </label>

          <div className="custom-select">
            <label htmlFor="area">Shop Area</label>
            <select
              name="area"
              id="area"
              onChange={(e) => {
                setArea(e.target.value);
              }}
            >
              <option value="">Select Area</option>
              <option value="thane">Thane</option>
              <option value="pune">Pune</option>
              <option value="mumbai subarban">Mumbai Subarban</option>
              <option value="nashik">Nashik</option>
              <option value="ahmednagar">Ahmednagar</option>
              <option value="nagpur">Nagpur</option>
              <option value="solapur">Solapur</option>
            </select>
          </div>

          <div className="custom-select">
            <label htmlFor="category">Shop Category</label>
            <select
              name="category"
              id="category"
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            >
              <option value="">Select Category</option>
              <option value="grocery">Grocery</option>
              <option value="butcher">Butcher</option>
              <option value="baker">Baker</option>
              <option value="chemist">Chemist</option>
            </select>
          </div>

          <div className="input-field">
            <label htmlFor="opening">Opening Time</label>
            <input
              type="time"
              name="opening"
              id="opening"
              onChange={(e) => {
                setOpening(e.target.value);
              }}
            />
          </div>
          <div className="input-field">
            <label htmlFor="closing">Closing Time</label>
            <input
              type="time"
              name="closing"
              id="closing"
              onChange={(e) => {
                setClosing(e.target.value);
              }}
            />
          </div>
          <div className="input-field">
            <label htmlFor="desc">Description</label>
            <textarea
              name="desc"
              id="desc"
              cols="30"
              rows="5"
              placeholder="Enter Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <button
            className={`add_camp_btn bg-brand-300 ${
              !name ||
              !description ||
              !area ||
              !category ||
              !opening ||
              !closing
                ? "disabled"
                : null
            }`}
            type="submit"
          >
            Add Shop
          </button>
        </form>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.appReducer.user,
});
// const mapDispatchToProps = (dispatch) => ({
//     insertCamp: (camp) => dispatch({type:'ADD_CAMP',camp})
// })
export default connect(mapStateToProps, null)(NewShop);
