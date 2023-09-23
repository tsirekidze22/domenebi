import React from "react";
import "./Main.scss";
import Filters from "../FIlters/Filters";

const Main = () => {
  return (
    <main className="main">
      <div className="main-content">
        <div className="banner">
          <h1 className="banner-title">გაყიდე და იყიდე დომენი მარტივად</h1>
        </div>

        <div className="domens-section">
          <Filters />
          <div className="domain-content">F</div>
        </div>
      </div>
    </main>
  );
};

export default Main;
