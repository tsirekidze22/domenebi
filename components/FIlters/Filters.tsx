import React from "react";

import "./Filters.scss";
import PriceFilterSlider from "../PriceFilterSlider/PriceFilterSlider";
import SymbolsFilterSlider from "../SymbolsFilterSlider/SymbolsFilterSlider";
import CategoriesFilter from "../CategoriesFilter/CategoriesFilter";

const Filters = () => {
  return (
    <div className="filters-section">
      <h4 className="filters-title">
        დომენები მარკეტზე: <span>703</span>
      </h4>

      <div className="filters-box">
        <input
          type="text"
          className="search-by-name"
          placeholder="სახელით ძიება"
        />
        <PriceFilterSlider />
        <SymbolsFilterSlider />
        <CategoriesFilter />
      </div>
    </div>
  );
};

export default Filters;
