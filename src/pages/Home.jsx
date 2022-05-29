import React from "react";
import Header from "../components/Header/Header";
import ShopCard from "../components/ShopCard/ShopCard";
import BlankCard from "../components/BlankCard/BlankCard";
import "./Home.css";
import { connect } from "react-redux";
import axios from "axios";
function Home({ shops }) {
  const [search, setSearch] = React.useState(null);
  const [query, setQuery] = React.useState("");
  const handleMouseMove = (e) => {
    const x = e.clientX;
    const y = e.clientY;
    console.log(x, y);

    document.querySelector(".cirlce_first").style.left = `${x}px`;
    document.querySelector(".cirlce_first").style.top = `${y}px`;
    document.querySelector(".cirlce_second").style.top = `${y}px`;
    document.querySelector(".cirlce_second").style.left = `${x / 2}px`;
  };

  const handleSearch = () => {
    axios
      .get(`https://fyntune.herokuapp.com/api/shop/search?q=${query}`)
      .then((res) => {
        console.log(res.data);
        setSearch(res.data.shops);
        setQuery("");
      })
      .catch((e) => console.log(e));
  };

  console.log(search);

  const handleReset = (e) => {
    setSearch(null);
  };
  return (
    <div>
      <Header />

      <div className="home__jumbotron" onMouseMove={handleMouseMove}>
        <div className="cirlce_first"></div>
        <div className="cirlce_second"></div>
        <div className="home__jumbotron__wrapper">
          <h2>Welcome to fyntune Shops!</h2>
          <p>
            View our hand-picked shops from all over maharastra, or add your
            own.
          </p>
          <div className="shop_search_bar flex gap-5 items-center pt-5 pb-5">
            <div className="search_input px-2 rounded">
              <input
                type="text"
                name="key"
                id="key"
                className="w-full h-half"
                placeholder="Search for shops"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
            <button
              className={`search_btn py-3 px-5 bg-brand-300 hover:bg-indigo-400 rounded text-white font-bold ${
                search && "clear_btn"
              }`}
              onClick={search ? handleReset : handleSearch}
            >
              {search ? "Clear Search" : "Search"}
            </button>
          </div>
          <a href="/new" className="font-bold">
            Or add your own shop
          </a>
        </div>
      </div>

      <div className="shops__container">
        <>
          {search &&
            search.length > 0 &&
            search.map((shop, i) => {
              return (
                <ShopCard
                  id={shop._id}
                  thumb={shop.thumbnail.url}
                  key={i}
                  file_id={shop.thumbnail.public_id}
                  category={shop.category}
                  name={shop.name}
                  area={shop.shop_area}
                  created_by={shop.created_by}
                />
              );
            })}
          {!shops && (
            <>
              <BlankCard />
              <BlankCard />
              <BlankCard />
              <BlankCard />
              <BlankCard />
              <BlankCard />
              <BlankCard />
              <BlankCard />
              <BlankCard />
              <BlankCard />
              <BlankCard />
              <BlankCard />
            </>
          )}
          <>
            {!search &&
              shops &&
              shops.map((shop, i) => {
                console.log(shop);
                return (
                  <ShopCard
                    id={shop._id}
                    thumb={shop.thumbnail.url}
                    key={i}
                    file_id={shop.thumbnail.public_id}
                    category={shop.category}
                    name={shop.name}
                    area={shop.shop_area}
                    created_by={shop.created_by}
                  />
                );
              })}
          </>
        </>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  shops: state.appReducer.shops,
});

export default connect(mapStateToProps, null)(Home);
