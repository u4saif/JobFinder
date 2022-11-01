import React from 'react'; 

export const FormInput = ({type,name,value,labelText,handleChange}) => {
  return (
      <div className='form-row'>
          <label htmlFor={name} className='form-label'>
              {labelText || name}
          </label>
          <input
              type={type}
              name={name}
              value={value}
              onChange={handleChange}
              className='form-input' />
      </div>
  )
}
