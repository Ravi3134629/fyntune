import React from "react";
import { connect } from "react-redux";
import { removeShop } from "../../redux/actions/_appActions";
import removeShopPost from "../../utils/remove-shop";
import "./ShopCard.css";
function ShopCard({
  id,
  user,
  thumb,
  name,
  category,
  area,
  created_by,
  removeShop,
  file_id,
}) {
  let uname = "Sumit Kumar".toUpperCase().split(" ");
  console.log(removeShop);
  console.log(id, thumb);

  const handleRemove = async () => {
    const done = await removeShopPost(id, file_id);
    console.log(done);
    const { error } = done;
    if (!error) {
      removeShop(id);
    }
  };
  return (
    <div className="shop-card">
      <div className="shop-card-header">
        <div className="shop-card-author">
          {uname.length < 2
            ? uname[0][0] + uname[0][1]
            : name[0][0] + name[1][0]}
        </div>
        <div className="shop-header-meta">
          <h3 className="shop-name">{name}</h3>
          <p>{area}</p>
        </div>
      </div>
      <div className="shop-card-thumbnail">
        <img src={thumb} alt="" />
      </div>
      <div className="shop-card-body">
        <div className="shop-card-body-meta-intial">
          <h2 className="text-black">{name}</h2>
          <p
            style={{
              color: "#49454F",
              fontSize: "14px",
            }}
          >
            {category}
          </p>
          <p className="shopdescription mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            aspernatur repellat officiis cumque eius magnam iusto itaque, velit
            voluptas amet porro rerum minima? Et praesentium commodi aliquam
            enim culpa aut?
          </p>
        </div>
      </div>
      <div className="shop-card-footer">
        <div className="card-footer-controls">
          {user && created_by == user.id && (
            <button
              className="button btn-primary hover:scale-105 ring-brand-300 focus:ring-4 ring-offset-zinc-300 ring-offset-3"
              onClick={handleRemove}
            >
              Remove Shop
            </button>
          )}
          <button className="button btn-secondary hover:scale-105 ring-black focus:ring-4 ring-offset-zinc-300 ring-offset-3">
            View
          </button>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.appReducer.user,
});

const mapDispatchToProps = (dispatch) => ({
  removeShop: (id) => dispatch({ type: "REMOVE_SHOP", id }),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopCard);
