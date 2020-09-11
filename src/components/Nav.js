import React, { useState, useContext } from "react"
import logo from "../resouces/logo.svg"
import "../style.css"
import SearchRoundedIcon from "@material-ui/icons/SearchRounded"
import { ToggleContext } from "./App"

const Nav = props => {
  //   const [toggle, setToggle] = useState(false)
  //   const handleClick = () => {
  //     setToggle(true)
  //   }

  const { handleClick } = useContext(ToggleContext)
  const [hovered, setHovered] = useState(false)
  const handleHover = () => {
    if (!hovered) {
      setHovered(true)
    }
  }

  const style = `${hovered ? "search hovered" : "search"}`
  return (
    <div className="nav">
      <div className="logo">
        <img src={logo}></img>
      </div>
      <div
        className={style}
        onClick={() => handleClick()}
        onMouseEnter={handleHover()}
      >
        <div className="location">Search</div>
        <div className="guest-border">
          <div className="guest-box">Add Guest</div>
        </div>
        <div className="searchIcon">
          <SearchRoundedIcon className="sIcon" />
        </div>
      </div>
    </div>
  )
}

export default Nav
