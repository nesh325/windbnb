import React, { useState, useEffect } from "react"
import Main from "../components/Main"
import Header from "../components/Header"
import Nav from "../components/Nav"
import Filter from "../components/Filter"
import "../style.css"
const ToggleContext = React.createContext()

const App = () => {
  const [toggle, setToggle] = useState(false)
  const [city, setCity] = useState("")
  function handleClick() {
    setToggle(true)
  }

  useEffect(() => {
    console.log(toggle)
    console.log(city)
  }, [toggle, city])
  return (
    <ToggleContext.Provider value={{ handleClick, setCity, setToggle }}>
      {toggle ? <Filter /> : null}
      <div className={toggle ? "overlay" : null} />
      <div className={`container`}>
        <Nav city={city} />
        <Header city={city}/>
        <Main city={city} />
      </div>
    </ToggleContext.Provider>
  )
}

export { App, ToggleContext }
