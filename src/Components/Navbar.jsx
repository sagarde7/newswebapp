import React from 'react'
import "./Navbar.css"

function Navbar(props) {
  return (
    <>
      <div className="navbar">
        <div className="logo">
            <p>{props.logo}</p>
        </div>
        <ul>
            <li onClick={()=>{
              {props.setCategory("business")};
            }}>Business</li>
            <li onClick={()=>{
              {props.setCategory("technology")};
            }}>Technology</li>
            <li>More</li>
        </ul>
      </div>
    </>
  )
}

export default Navbar
