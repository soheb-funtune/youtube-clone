import React from "react";
import { IconButton, useMediaQuery } from "@mui/material";
import { TfiMenu } from "react-icons/tfi";
import youtubeLogo from "../../../public/youtube.png";
import { CiSearch } from "react-icons/ci";
import { FcSearch } from "react-icons/fc";

import "./navbar.css";

const NavigationBar = ({ handleDrawerOpen }) => {
  const lessthan1024 = useMediaQuery("(max-width:1024px)");

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
        <input type="search" />
        <FcSearch className="search-icon" />
      </div>
      <div className="user-div">user div</div>
    </div>
  );
};

export default NavigationBar;
