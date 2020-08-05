import React from 'react';

function Select ({ 
  options, value, onChange, label, name
}) {
  return (
    <div className='selectWrapper' >
      {label &&
        <label>
          {label}
        </label>
      }
      <select value={value} onChange={onChange} name={name}>
        <option value=''>Todos</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
}

export default Select;
