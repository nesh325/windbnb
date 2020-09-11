import React from "react"
import Card from "./Card"
import jsonFile from "../resouces/stays.json"
import "../style.css"

const Main = props => {
  const stays =
    props.city === ""
      ? jsonFile
      : jsonFile.filter(item => item.city == props.city)
  console.log(stays)

  return (
    <div className="mainCards">
      {Object.keys(stays).map(key => {
        return <Card data={stays[key]} />
      })}
    </div>
  )
}

export default Main
