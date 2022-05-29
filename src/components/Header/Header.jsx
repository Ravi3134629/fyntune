import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Header.css";
function Header({ user }) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, [user]);
  return (
    <div className="header">
      <div className="header__wrapper">
        <a href="#" className="text-black-500 brand-name">
          FynTune
        </a>
        {mounted && (
          <div className="auth_buttons flex items-center gap-5">
            {!user && (
              <>
                <button
                  onClick={() => {
                    window.location.href = "/login";
                  }}
                >
                  Login
                </button>

                <button
                  className="px-3 py-4 bg-brand-300 text-white hover:scale-105 rounded-md font-bold"
                  onClick={() => {
                    window.location.href = "/signup";
                  }}
                >
                  Create an account
                </button>
              </>
            )}
            {user && (
              <button
                className="px-3 py-4 bg-brand-300 text-white hover:scale-105 rounded-md font-bold"
                onClick={() => {
                  window.location.href = "/logout";
                }}
              >
                Logout
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.appReducer.user,
});
export default connect(mapStateToProps)(Header);
