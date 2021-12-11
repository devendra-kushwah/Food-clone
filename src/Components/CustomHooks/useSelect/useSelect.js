import React, { useState } from "react";
import Select from "./style";

const useSelect = (label = {}, defaultState = {}, options = {}) => {
  const [state, setState] = useState(defaultState);

  const DropDown = () => (
    <>
      <label htmlFor={label}>{label}</label>
      <Select
        id={label}
        value={state}
        onChange={(e) => setState(e.target.value)}
        onBlur={(e) => setState(e.target.value)}
        disabled={!options.length}
        className="p-3 border-0"
        height="50"
      >
        <option>All</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </Select>
    </>
  );

  return [state, DropDown, setState];
};

export default useSelect;
