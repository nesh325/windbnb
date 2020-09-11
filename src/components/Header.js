import React from "react"
import "../style.css"

const Header = props => {
  return (
    <div className="header">
      <h2 className="searchTerm">
        Stays in {props.city != "" ? props.city + "," : null} Finland
      </h2>
      <p className="stayCount">12+ stays</p>
    </div>
  )
}
export default Header
