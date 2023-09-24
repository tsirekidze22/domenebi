import React from "react";
import "./DomainsFilter.scss";
import { useDispatch, useSelector } from "react-redux";
import { toggleSuffix } from "../../store/domainSuffixSlice";

const DomainSuffixes = [
  ".ge",
  ".com.ge",
  ".net.ge",
  ".org.ge",
  ".edu.ge",
  ".school.ge",
];

const DomainsFilter = () => {
  const dispatch = useDispatch();
  const selectedSuffixes = useSelector((state: any) => state.domainSuffix);

  const handleSuffixChange = (suffix: any) => {
    dispatch(toggleSuffix(suffix));
  };
  return (
    <div className="filter-categories-section">
      <h4>დომენის ზონა</h4>
      <div className="categories-list">
        {DomainSuffixes.map((suffix, i) => (
          <div className="category" key={i}>
            <label className="container">
              <input
                type="checkbox"
                className="white"
                checked={selectedSuffixes.includes(suffix)}
                onChange={() => handleSuffixChange(suffix)}
              />
              <span className="checkmark"></span>
              <span className="category-name">{suffix}</span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DomainsFilter;
