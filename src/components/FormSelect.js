export const FormSelect = ({name,value,labelText,stelectOptions,handleChange}) => {
  return (
    <div className='form-row'>
    <label htmlFor={name} className='form-label'>
      {labelText || name}
    </label>
    <select
      name={name}
      value={value}
      onChange={handleChange}
      className='form-select'
    >
      {stelectOptions.map((itemValue, index) => {
        return (
          <option key={index} value={itemValue}>
            {itemValue}
          </option>
        );
      })}
    </select>
  </div>
  )
}
