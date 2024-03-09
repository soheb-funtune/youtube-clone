import React, { useEffect, useRef, useState } from "react";
import { IconButton, useMediaQuery, Avatar } from "@mui/material";
import { TfiMenu } from "react-icons/tfi";
import youtubeLogo from "../../../public/youtube.png";
import { CiSearch } from "react-icons/ci";
import { FcSearch } from "react-icons/fc";

import "./navbar.css";
import { CounterState } from "../../state/context/context";

const NavigationBar = ({ handleDrawerOpen }) => {
  const { dispatch } = CounterState();
  const debounceTimer = useRef(null);
  const [searchText, setSearchText] = useState("");
  const lessthan1024 = useMediaQuery("(max-width:1024px)");

  useEffect(() => {
    // Clear the previous timer
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }

    // Set a new timer
    debounceTimer.current = setTimeout(() => {
      // Dispatch the search action after the debounce time
      dispatch({ type: "SEARCH", payload: searchText });
    }, 1000);

    // Cleanup function to clear the timer
    return () => {
      clearTimeout(debounceTimer.current);
    };
  }, [searchText, dispatch]);

  return (
    <div className="nav-wrapper">
      <div className={"menu-logo-div"}>
        <IconButton
          sx={{
            background: "white",
            ...(lessthan1024 && { display: "none" }),
          }}
          onClick={handleDrawerOpen}
        >
          <TfiMenu />
        </IconButton>
        <div className="logo-div">
          <img
            style={{ width: "auto", height: "25px" }}
            src={youtubeLogo}
            alt="logo"
          />
        </div>
      </div>
      <div className="search-div">
        <input
          type="search"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <FcSearch className="search-icon" />
      </div>
      <div className="user-div">
        <Avatar
          alt="Remy Sharp"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
          // sx={{ width: 24, height: 24 }}
        />{" "}
      </div>
    </div>
  );
};

export default NavigationBar;
