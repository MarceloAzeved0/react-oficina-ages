import React from "react";

function FormField({
  onBlur,
  min,
  max,
  label,
  type,
  name,
  value,
  onChange,
  placeholder,
}) {
  return (
    <div className="inputWrapper">
      {label && <label>{label}</label>}
      <input
        min={min}
        max={max}
        onBlur={onBlur}
        placeholder={placeholder}
        className="formField"
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default FormField;
