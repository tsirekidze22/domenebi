import React from "react";
import { useDispatch } from "react-redux";
import { setSearchText } from "../../store/searchSlice";
import PriceFilterSlider from "../PriceFilterSlider/PriceFilterSlider";
import SymbolsFilterSlider from "../SymbolsFilterSlider/SymbolsFilterSlider";
import CategoriesFilter from "../CategoriesFilter/CategoriesFilter";
import DomainsFilter from "../DomainsFilter/DomainsFilter";
import "./Filters.scss";

const Filters = () => {
  const dispatch = useDispatch();

  const handleSearchInputChange = (e) => {
    const searchText = e.target.value;
    dispatch(setSearchText(searchText)); // Dispatch the setSearchText action with the entered text
  };

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
          onChange={handleSearchInputChange}
        />
        <PriceFilterSlider />
        <SymbolsFilterSlider />
        <CategoriesFilter />
        <DomainsFilter />
      </div>
    </div>
  );
};

export default Filters;
