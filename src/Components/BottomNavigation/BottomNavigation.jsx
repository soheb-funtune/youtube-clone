import React from "react";
import { Box, useMediaQuery } from "@mui/material";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { Link } from "react-router-dom";
import { sidebarItemList } from "../../assets/data";

const BottomNavigationCompo = ({ category, setCategory }) => {
  const lessthan1024 = useMediaQuery("(max-width:1024px)");

  return (
    <Box
      style={{
        ...(!lessthan1024 && { display: "none" }),
        position: "fixed",
        bottom: "0px",
        right: "0px",
        left: "0px",
        overflowX: "scroll",
        zIndex: 2,
      }}
    >
      <BottomNavigation
        sx={{
          minWidth: "100%",
          width: "max-content",
          padding: "0px 10px 0px 10px",
          boxSizing: "border-box",
        }}
        showLabels={true}
        value={category}
        onChange={(event, newValue) => {
          setCategory(newValue);
        }}
      >
        {sidebarItemList()?.map(({ ReactIcon, text, categoryId }, index) => (
          <Link
            key={index}
            onClick={() => setCategory(categoryId)}
            style={{ textDecoration: "none", color: "black" }}
            to={"/"}
          >
            <BottomNavigationAction
              active={categoryId === category ? true : false}
              label={"text"}
              icon={
                <ReactIcon
                  style={{
                    fontSize: "20px",
                    color: categoryId === category ? "red" : "black",
                  }}
                />
              }
            />
          </Link>
        ))}
      </BottomNavigation>
    </Box>
  );
};

export default BottomNavigationCompo;
