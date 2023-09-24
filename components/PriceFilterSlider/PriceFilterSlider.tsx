"use client";
import React, { useState } from "react";
import ReactSlider from "react-slider";
import { useDispatch, useSelector } from "react-redux";
import { setPriceRange } from "../../store/priceFilterSlice";

import "./PriceFilterSlider.scss";

const PriceFilterSlider = () => {
  const [sliderValues, setSliderValues] = useState([0, 50000]);
  const dispatch = useDispatch();

  const handleSliderChange = (newValues: any) => {
    setSliderValues(newValues);
    dispatch(setPriceRange(newValues));
  };

  const handleInputChange = (e: any, inputIndex: any) => {
    const newValue = parseInt(e.target.value) || 0;
    const newSliderValues = [...sliderValues];
    newSliderValues[inputIndex] = newValue;
    setSliderValues(newSliderValues);
  };

  return (
    <div className="filter-price-section">
      <h4>ფასი</h4>
      <div className="price-inputs">
        <div className="price-from">
          <input
            type="number"
            className="price-input"
            placeholder="0"
            value={sliderValues[0]}
            onChange={(e) => handleInputChange(e, 0)}
          />
          <span>₾</span>
        </div>
        <div className="price-from">
          <input
            type="number"
            className="price-input"
            placeholder="50 000"
            value={sliderValues[1]}
            onChange={(e) => handleInputChange(e, 1)}
          />
          <span>₾</span>
        </div>
      </div>
      <div className="slider">
        <ReactSlider
          className="horizontal-slider"
          thumbClassName="example-thumb"
          trackClassName="example-track"
          value={sliderValues}
          defaultValue={[0, 50000]}
          max={50000}
          min={0}
          onChange={handleSliderChange}
          ariaLabel={["Lower thumb", "Upper thumb"]}
          pearling
          minDistance={1}
        />
      </div>
    </div>
  );
};

export default PriceFilterSlider;
