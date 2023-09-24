"use client";
import React, { useState } from "react";
import ReactSlider from "react-slider";
import "./SymbolsFilterSlider.scss";
import { useDispatch } from "react-redux";
import { setSymbolRange } from "../../store/symbolsSlice";

const SymbolsFilterSlider = () => {
  const dispatch = useDispatch();
  const [sliderValues, setSliderValues] = useState([0, 26]);

  const handleSliderChange = (newValues: any) => {
    setSliderValues(newValues);
    dispatch(setSymbolRange(newValues));
  };

  const handleInputChange = (e, inputIndex: any) => {
    const newValue = parseInt(e.target.value) || 0;
    const newSliderValues = [...sliderValues];
    newSliderValues[inputIndex] = newValue;
    setSliderValues(newSliderValues);
    dispatch(setSymbolRange(newSliderValues));
  };
  return (
    <div className="filter-symbols-section">
      <h4>სიმბოლოების რაოდენობა</h4>
      <div className="symbols-inputs">
        <div className="symbols-from">
          <input
            type="number"
            className="symbols-input"
            placeholder="0"
            value={sliderValues[0]}
            onChange={(e) => handleInputChange(e, 0)}
          />
        </div>
        <div className="symbols-from">
          <input
            type="number"
            className="symbols-input"
            placeholder="50 000"
            value={sliderValues[1]}
            onChange={(e) => handleInputChange(e, 1)}
          />
        </div>
      </div>
      <div className="slider">
        <ReactSlider
          className="horizontal-slider"
          thumbClassName="example-thumb"
          trackClassName="example-track"
          value={sliderValues}
          defaultValue={[0, 26]}
          max={26}
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

export default SymbolsFilterSlider;
