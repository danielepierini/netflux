import { ArrowDropDown, Notifications, Search } from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import "./nav.css";

function Nav() {
  const [show, handleshow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1) {
        handleshow(true);
      } else handleshow(false);
    });
  }, []);

  return (
    <div className={`nav ${show ? "nav__black" : ""}`}>
      <div className="container">
        <div className="navleft">
          <img
            className="nav__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/250px-Netflix_2015_logo.svg.png"
            alt="Netflix Logo"
          />
          <div className="navCenter">
            <span>Home</span>
            <span>TV Shows</span>
            <span>Movies</span>
            <span>New & Popular</span>
            <span>My List</span>
          </div>
        </div>

        <div className="navRight">
          <Search className="icon" />
          <span> KID</span>
          <Notifications className="icon" />
          <img
            className="nav__avatar"
            src="https://pps.whatsapp.net/v/t61.24694-24/186631431_102311738735553_4757251479637341436_n.jpg?ccb=11-4&oh=01_AVy48zGwCFMmqBt4OzTEkMrq3lkI_JELHrwOw2WrJy3pPQ&oe=6240A28F"
            alt="Daniele profile"
          />
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>Account</span>
              <span>Help Center</span>
              <span>Sign out of Netflix</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
