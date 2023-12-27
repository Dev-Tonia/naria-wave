import React from "react";

export default function CustomInput({
  type,
  placeholder,
  value,
  onInputChange,
  label,
  name,
  disabled,
}) {
  const handleInput = (event) => {
    onInputChange(event.target);
  };

  return (
    <div className=" mb-3">
      <label htmlFor={label} className=" form-label mb-1 fw-medium">
        {label}{" "}
      </label>
      <input
        type={type}
        id={label}
        name={name}
        className=" form-control"
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        onChange={handleInput}
      />
    </div>
  );
}
