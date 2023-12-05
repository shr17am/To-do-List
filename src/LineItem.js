import React from 'react'
import { FaTrashAlt } from "react-icons/fa";

const LineItem = ({item,handleChange,handleDelete}) => {
  return (
    <li className='item' key={item.id}>
  <input checked={item.checked}
  type="checkbox"
  onChange={()=>handleChange(item.id)}/>
  <label style={(item.checked)?{textDecoration : "line-through"}:null} onDoubleClick={()=>handleChange(item.id)}>{item.item}</label>
  <FaTrashAlt
  role="button"
  onClick={()=>handleDelete(item.id)}
  tabIndex="0"
  aria-label={`Delete ${item.item}`}/>
</li>
  )
}

export default LineItem