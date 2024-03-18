import React, { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss"

const Navbar = () => {
  const [active, setActive] = useState(false); //nav bar color change, false-green, true-white stick at top
  const [open, setOpen] = useState(false); //to open user nav
  const {pathname} = useLocation(); //to get location, if not in home page - white color

  //if scrolled, set active to true, else false
  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  }

  useEffect(() => {
    window.addEventListener("scroll", isActive); 

    return () => {
      window.removeEventListener("scroll", isActive); //cleanup function
    }
  }, []);

  const currentUser = {
    id: 1,
    username: "raks",
    isSeller: true,
  }

  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link to="/" className="link">
           <span className="text">fiverr</span>
          </Link>
           <span className="dot">.</span>
        </div>

        <div className="links">
          <span>fiverr Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign in</span>
          {currentUser?.isSeller && <span>Become a Seller</span>}

          {!currentUser && <button className="button">Join</button>}
          {currentUser && 
            <div className="user" onClick={()=>setOpen(!open)}>
              <img
                src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <span>{currentUser?.username} </span>
              {open && <div className="options"> 
                  {currentUser?.isSeller && [
                       <>
                       <Link className="link" to="/mygigs">Gigs</Link>
                       <Link className="link" to="/add">Add new Gigs</Link>
                       </>
                  ]}
                  <Link className="link" to="/orders">Orders</Link>
                  <Link className="link" to="/messages">Messages</Link>
                  <Link className="link" to="/logout">Logout</Link>
              </div>}

            </div>
          }
        </div>
      </div>

      <hr />

      {(active || pathname !== "/") &&
      <div className="menu">
        <span>Test</span>
        <span>Test1</span>
      </div>
      }
    </div>
  )
}

export default Navbar