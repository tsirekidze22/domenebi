import React from "react";
import { useDispatch } from "react-redux";
import { setSearchText } from "../../store/searchSlice";
import PriceFilterSlider from "../PriceFilterSlider/PriceFilterSlider";
import SymbolsFilterSlider from "../SymbolsFilterSlider/SymbolsFilterSlider";
import CategoriesFilter from "../CategoriesFilter/CategoriesFilter";
import DomainsFilter from "../DomainsFilter/DomainsFilter";
import Image from "next/image";
import "./Filters.scss";

type Props = {
  FiltersShowerHandler?: () => void;
  AvailableDomains?: number;
};

const Filters: React.FC<Props> = ({
  FiltersShowerHandler,
  AvailableDomains,
}) => {
  const dispatch = useDispatch();

  const handleSearchInputChange = (e: any) => {
    const searchText = e.target.value;
    dispatch(setSearchText(searchText));
  };

  return (
    <div className="filters-section">
      <h4 className="filters-title">
        დომენები მარკეტზე: <span>{AvailableDomains}</span>
      </h4>

      <div className="filters-header">
        <span>ფილტრი</span>
        <Image
          src="/assets/Close.svg"
          width={24}
          height={24}
          alt={"close"}
          onClick={FiltersShowerHandler}
          className="close-btn"
        />
      </div>
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
