import React from 'react';

import './styles.css';

function Select ({ 
  options, value, onChange, label, width, name
}) {
  return (
    <div style={{ maxWidth: width }} className='selectWrapper' >
      {label &&
        <label className='label'>
          {label}
        </label>
      }
      <select value={value} onChange={onChange} className='selectStyled' name={name}>
        <option value=''>Todos</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
}

export default Select;