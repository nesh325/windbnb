import React from "react"
import "../style.css"
import Star from "@material-ui/icons/StarRateRounded"

const Card = props => {
  const {
    city,
    country,
    superHost,
    title,
    rating,
    maxGuests,
    type,
    beds,
    photo,
  } = props.data
  const typeStyle = superHost ? "typeSuper" : "type"
  const host = superHost ? "host" : "none"
  console.log(host)
  return (
    <div className="card">
      <img className="photo" src={photo} />
      <button className={host}>Super Host</button>
      <p className={typeStyle}>{type}</p>
      <p className="rating"><Star className='star'/>{rating}</p>
      <p className="title">{title}</p>
    </div>
  )
}

export default Card
