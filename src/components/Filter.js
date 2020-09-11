import React, { useState, useEffect, useContext } from "react"
import "../style.css"
import SearchRoundedIcon from "@material-ui/icons/SearchRounded"
import RoomRoundedIcon from "@material-ui/icons/RoomRounded"
import { ToggleContext } from "./App"

const Filter = () => {
  const [location, setLocation] = useState("")
  const [guest, setGuests] = useState(0)
  const [guestbox, setGuestsbox] = useState("filterGuests")
  const [locationbox, setLocationbox] = useState("filterLocation")
  const { setCity, setToggle } = useContext(ToggleContext)

  // useEffect(() => {
  //   console.log(location)
  //   console.log(guest)
  // }, [location, guest])

  console.log("Filter")
  return (
    <div className="filterMain">
      <div className="filterContainer">
        <div className="filterSearch">
          <div
            className={locationbox}
            onClick={() => {
              setLocationbox("outline hovered")
              setGuestsbox(prev => prev.replace("outline hovered", ""))
            }}
            onMouseEnter={() => setLocationbox(prev => prev + " hovered")}
          >
            <p className="locationTitle">Location</p>
            <input
              type="text"
              className="locationPlaceHolder"
              placeholder={`New Location`}
              value={location}
              onChange={e => setLocation(e.target.value)}
            ></input>
          </div>
          <div
            className={guestbox}
            onClick={() => {
              setLocationbox(prev => prev.replace("outline hovered", ""))
              setGuestsbox("outline hovered")
            }}
            onMouseEnter={() => setGuestsbox(prev => prev + " hovered")}
          >
            <p className="guestTitle">Guests</p>
            <input
              type="text"
              className="guestPlaceHolder"
              value={`${guest} `}
              placeholder="Add Guests"
              onChange={e => setGuests(e.target.value)}
            ></input>
          </div>
          <div
            className="filterSearchButton"
            onClick={() => {
              setCity(location)
              setToggle(false)
            }}
          >
            <SearchRoundedIcon className="filtersIcon" />
            <p className="filtersSearchText">Search</p>
          </div>
        </div>
        <div
          className="locationList"
          style={{
            display: locationbox.includes("outline") ? "block" : "none",
          }}
        >
          <div className="listLayout">
            <div onClick={() => setLocation("Helsinki")}>
              <RoomRoundedIcon />
              <p>Helsinki, Finland</p>
            </div>
            <div onClick={() => setLocation("Turku")}>
              <RoomRoundedIcon />
              <p>Turku, Finland</p>
            </div>
            <div onClick={() => setLocation("Oulu")}>
              <RoomRoundedIcon />
              <p>Oulu, Finland</p>
            </div>
            <div onClick={() => setLocation("Vaasa")}>
              <RoomRoundedIcon />
              <p>Vaasa, Finland</p>
            </div>
          </div>
        </div>
        <div
          className="guestSection"
          style={{
            display: guestbox.includes("outline") ? "block" : "none",
          }}
        >
          <div>
            <h4>Adults</h4>
            <p>Ages 13 or above</p>
            <div className="counter">
              <button onClick={() => setGuests(prev => prev - 1)}>-</button>
              <h5>{guest}</h5>
              <button onClick={() => setGuests(prev => prev + 1)}>+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Filter
