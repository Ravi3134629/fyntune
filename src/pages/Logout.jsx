import React from "react";
import { connect } from "react-redux";
import Cookies from "js-cookie";
function Logout({ setUser }) {
  React.useEffect(() => {
    setUser(null);
    setTimeout(() => {
      Cookies.remove("jwt-token");
      window.location.href = "/";
    }, 3000);
  }, []);
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1
        style={{
          fontSize: 25,
        }}
      >
        Loging out....
      </h1>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch({ type: "SET_USER", payload: user }),
});
export default connect(null, mapDispatchToProps)(Logout);
