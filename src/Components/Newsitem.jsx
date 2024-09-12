import React from 'react'
import "./Newsitem.css"

function Newsitem(props) {
  return (
    <>
    <div className="maincard">
      <div className="card">
        <img src={props.src} alt="" srcset="" />
        
        <h4 className="cardtitle">
            {props.title ? props.title.slice(0, 50)+"..." : "No Title Available"}
        </h4>
        <div className="cardtext">
            {props.desc ? props.desc.slice(0, 100)+"..." : "No Title Avaible"}
        </div>
        <a href={props.url}>Read More</a>
      </div>
      </div>
    </>
  )
}

export default Newsitem
