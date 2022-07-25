import React from 'react'

const FormRow = ({ type, name, value, handleChange, labelText, ...otherProps }) => {
    return (
      <div className='form-row'>
        <label htmlFor={name} className='form-label'>
          {labelText || name}
        </label>
  
        <input
          type={type}
          value={value}
          name={name}
          onChange={handleChange}
          className='form-input'
          autoComplete="on"
          {...otherProps}
        />
      </div>
    );
  };
  
  export default FormRow;