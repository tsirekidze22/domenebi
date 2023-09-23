import React from "react";
import "./CategoriesFilter.scss";

const CategoriesArr = [
  {
    name: "ბიზნესი",
  },
  {
    name: "უძრავი ქონება",
  },
  {
    name: "ავტო",
  },
  {
    name: "მედიცინა",
  },
  {
    name: "ტექნოლოგიები",
  },
  {
    name: "თამაშები",
  },
  {
    name: "გართობა და დასვენება",
  },
  {
    name: "მედია",
  },
  {
    name: "განათლება",
  },
  {
    name: "კომერცია",
  },
  {
    name: "ფინანსები",
  },
];

const CategoriesFilter = () => {
  return (
    <div className="filter-categories-section">
      <h4>კატეგორიები</h4>
      <div className="categories-list">
        {CategoriesArr.map((category, i) => (
          <div className="category" key={i}>
            <label className="container">
              <input type="checkbox" className="white" />
              <span className="checkmark"></span>
              <span className="category-name">{category.name}</span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesFilter;
