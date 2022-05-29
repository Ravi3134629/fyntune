import React from "react";
import "./BlankCard.css";
function BlankCard() {
  return (
    <div className="blank-shop-card">
      <div className="blank-shop-card-header">
        <div className="blank-shop-card-author"></div>
        <div className="blank-shop-header-meta">
          <h3 className="blank-shop-name"></h3>
          <p className="blank-shop-location"></p>
        </div>
      </div>
      <div className="blank-shop-card-thumbnail hover:scale-105"></div>
      <div className="blank-shop-card-body">
        <div className="blank-shop-card-body-meta-intial">
          <h2 className="blank-shop-name"></h2>
          <div className="card-description mt-5 mb-5">
            <p className="blank-shop-description"></p>
            <p className="blank-shop-description"></p>
            <p className="blank-shop-description"></p>
            <p className="blank-shop-description"></p>
            <p className="blank-shop-description"></p>
            <p className="blank-shop-description"></p>
            <p className="blank-shop-description"></p>
            <p className="blank-shop-description"></p>
            <p className="blank-shop-description"></p>
            <p className="blank-shop-description"></p>
            <p className="blank-shop-description"></p>
          </div>
        </div>
      </div>
      <div className="blank-shop-card-footer">
        <div className="card-footer-controls">
          <button className="button-blank btn-primary">
            <p></p>
          </button>
          <button className="button-blank btn-secondary">
            <p></p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default BlankCard;
