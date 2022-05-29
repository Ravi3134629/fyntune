import { connect } from "react-redux";
import "./App.css";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import React from "react";
import Cookies from "js-cookie";
import getUser from "./utils/get-user";
import Logout from "./pages/Logout";
import NewShop from "./pages/NewShop";
import getShops from "./utils/getAllShops";

function App({ user, shops, setUser, setShops }) {
  console.log(setUser);
  React.useEffect(() => {
    if (Cookies.get("jwt-token")) {
      getUser()
        .then((u) => {
          console.log(u);
          setUser(u);
        })
        .catch((e) => {
          console.log(e);
        });
    }

    getShops()
      .then((shops) => {
        console.log(shops);
        setShops(shops);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          {/* <Route exact path="/browse">
    <SearchPage/>
    </Route> */}

          <Route exact path="/logout">
            <Logout />
          </Route>

          <Route exact path="/new">
            <NewShop />
          </Route>

          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path="/signup">
            <SignUp />
          </Route>

          {/* <Route
           exact
            path="/camp/:id"
            render={(props) => {
              const id = props.match.params.id;
              return <IndividualCamp id={id && id} />;
            }}
           
          /> */}
        </Switch>
      </div>
    </Router>
  );
}

const mapStateToProps = (state) => ({
  user: state.appReducer.user,
  shops: state.appReducer.shops,
});

const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch({ type: "SET_USER", user }),
  setShops: (shops) => dispatch({ type: "SET_SHOPS", shops }),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
