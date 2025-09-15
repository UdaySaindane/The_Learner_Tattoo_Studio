import React from "react";

function FormInput({ label, type, name, value, onChange, placeholder }) {
  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="form-control"
        placeholder={placeholder}
      />
    </div>
  );
}

export default FormInput;
