import React from 'react'
import { Link } from 'react-router-dom';
import "./Button1.css"
const Button1 = (props) => {
  const { title, type, path, classes} = props;
  return (
    <Link to="/{path}" className="button-1" type={type} >{title}</Link>
    
  )
}
export default Button1