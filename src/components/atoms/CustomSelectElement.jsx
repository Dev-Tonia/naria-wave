import React from "react";

export default function CustomSelectElement({
  options,
  onInputChange,
  name,
  label,
  defaultValue,
  value,
}) {
  function handleInputChange(e) {
    onInputChange(e.target);
  }
  return (
    <div className=" mb-3">
      <label htmlFor={label} className=" form-label mb-1 fw-medium">
        {label}{" "}
      </label>
      <select
        className="form-select"
        aria-label="Default select example"
        id={label}
        name={name}
        value={value}
        onChange={handleInputChange}
      >
        <option value="">{defaultValue}</option>

        {options &&
          options.map((option) => (
            <option value={option.value} key={option.value}>
              {option.title}
            </option>
          ))}
      </select>
    </div>
  );
}
