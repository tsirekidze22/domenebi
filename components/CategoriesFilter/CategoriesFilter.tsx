import React from "react";
import "./CategoriesFilter.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectCategory, deselectCategory } from "../../store/categoriesSlice"; // Import the selectCategory and deselectCategory actions

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
  const dispatch = useDispatch();
  const selectedCategories = useSelector(
    (state: any) => state.categories.selectedCategories
  );

  const handleCategoryChange = (category: any) => {
    if (selectedCategories.includes(category)) {
      dispatch(deselectCategory(category));
    } else {
      dispatch(selectCategory(category));
    }
  };
  return (
    <div className="filter-categories-section">
      <h4>კატეგორიები</h4>
      <div className="categories-list">
        {CategoriesArr.map((category, i) => (
          <div className="category" key={i}>
            <label className="container">
              <input
                type="checkbox"
                className="white"
                checked={selectedCategories.includes(category.name)}
                onChange={() => handleCategoryChange(category.name)}
              />
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
