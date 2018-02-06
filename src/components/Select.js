import React from 'react';

const Select = (props) => {
  return (
    <select name={props.nameSelect} value={props.value} onChange={props.onChange}>
      {
        props.options.map(({value, name}) => {
          return <option key={value} value={value}>{name}</option>
        })
      }
    </select>
  )
}
export default Select;