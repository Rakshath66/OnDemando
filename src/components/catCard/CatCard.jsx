import React from "react"
import "./CatCard.scss"
import { Link } from "react-router-dom"

//display card
const CatCard = ({item}) => {
  return (
    <Link to="/gigs?cat=design">
      <div className="container">
        <img src={item.img} alt="" />
        <span className="desc">{item.desc}</span>
        <span className="title">{itemm.title}</span>
      </div>
    </Link>
  )
}

export default CatCard