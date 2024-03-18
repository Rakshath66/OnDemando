import React, { useEffect, useState } from "react"
import "./Featured.scss"

const Featured = () => {
  return (
    <div className="featured">
        <div className="container">
            <h1>Find the perfect freelance service for your business</h1>

            <div className="search">
                <div className="searchInput">
                    <img src="" alt="" />
                    <input type="text" placeholder='Try "building mobile app"' />
                </div>
                <button>Search</button>
            </div>

            <div className="popular">
                <span>Popular:</span>
                <button>Web Design</button>
                <button>Wordpress</button>
                <button>Logo Design</button>
                <button>AI Services</button>
            </div>

        </div>
    </div>
  )
}

export default Featured