import React, { useEffect, useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import { Box, useMediaQuery } from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import { TfiMenu } from "react-icons/tfi";
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { FaChevronLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import { MdOutlineSportsBasketball } from "react-icons/md";
import { SiYoutubegaming } from "react-icons/si";
import { SiDsautomobiles } from "react-icons/si";
import { BiSolidCameraMovie } from "react-icons/bi";
import { GrTechnology } from "react-icons/gr";
import { IoMdMusicalNotes } from "react-icons/io";
import { TbBrandBlogger } from "react-icons/tb";
import { ImNewspaper } from "react-icons/im";
import { MdSubscriptions } from "react-icons/md";

import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { IoHomeOutline } from "react-icons/io5";
import { SiYoutubeshorts } from "react-icons/si";
import { SiYoutubetv } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { CiYoutube } from "react-icons/ci";
import MainPage from "../../pages/MainPage";
import { Link, Outlet, useLocation } from "react-router-dom";
import "./sidebar.css";
import { CounterState } from "../../state/context/context";
import youtubeLogo from "../../../public/youtube.png";

import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

const drawerWidth = 200;

const openedMixin = (theme) => ({
  width: drawerWidth,
  border: "none",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  border: "none",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(7)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    zIndex: 999,
    marginLeft: drawerWidth,
    width: `calc(100% )`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  // marginLeft: -drawerWidth,
  zIndex: 99,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export const Sidebar = () => {
  const { dispatch } = CounterState();
  const location = useLocation();
  const [category, setCategory] = useState(0);
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const lessthan1024 = useMediaQuery("(max-width:1024px)");

  console.log({ location });
  useEffect(() => {
    if (location?.pathname?.includes("video")) {
      setOpen(false);
    }
  }, [location]);
  const handleDrawerOpen = () => {
    open ? setOpen(false) : setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    dispatch({ type: "CATEGORY", payload: category });
  }, [category]);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        sx={{
          background: "white",
          boxShadow: "none",
          zIndex: 999,
          color: "black",
        }}
        position="fixed"
        open={open}
      >
        <Toolbar style={{ padding: "0px 10px" }}>
          <IconButton
            sx={{
              // marginLeft: 2,
              background: "white",
              ...(lessthan1024 && { display: "none" }),
            }}
            onClick={handleDrawerOpen}
          >
            <TfiMenu />
          </IconButton>
          <div className="logo-div">
            <img
              style={{ width: "auto", height: "32px" }}
              src={youtubeLogo}
              alt="logo"
            />
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        style={{
          // paddingLeft: "10px !important",
          ...(lessthan1024 && { display: "none" }),
        }}
        variant={lessthan1024 ? "permanent" : "permanent"}
        anchor="left"
        open={open}
      >
        <DrawerHeader
          sx={{
            justifyContent: "left",
            position: "sticky",
            top: "0px",
            zIndex: 1203,
            background: "white",
          }}
        >
          {/* <IconButton
            sx={{
              // marginLeft: 2,
              background: "white",
              ...(lessthan1024 && { display: "none" }),
            }}
            onClick={handleDrawerOpen}
          >
            <TfiMenu />
          </IconButton> */}
        </DrawerHeader>

        <List>
          {[
            { ReactIcon: IoHomeOutline, categoryId: 0, text: "Home" },
            {
              ReactIcon: MdOutlineSportsBasketball,
              categoryId: 17,
              text: "Shorts",
            },
            {
              ReactIcon: SiYoutubegaming,
              categoryId: 20,
              text: "Gaming",
            },
            // {
            //   ReactIcon: SiDsautomobiles,
            //   categoryId: 2,
            //   text: "Auto-Mobiles",
            // },

            // {
            //   ReactIcon: BiSolidCameraMovie,
            //   categoryId: 24,
            //   text: "Intertainments",
            // },
            {
              ReactIcon: GrTechnology,
              categoryId: 28,
              text: "Technology",
            },
            {
              ReactIcon: IoMdMusicalNotes,
              categoryId: 10,
              text: "Music",
            },
            {
              ReactIcon: TbBrandBlogger,
              categoryId: 22,
              text: "Blogs",
            },
            { ReactIcon: ImNewspaper, categoryId: 25, text: "News" },
            { ReactIcon: MdSubscriptions, categoryId: 0, text: "Subscription" },
            { ReactIcon: CiYoutube, categoryId: 0, text: "You" },
          ].map(({ ReactIcon, text, categoryId }, index) => (
            <Link style={{ textDecoration: "none", color: "black" }} to={"/"}>
              <ListItem
                key={text}
                disablePadding
                onClick={() => setCategory(categoryId)}
                sx={{
                  display: "flex",
                  // paddingLeft: "10px",
                  // paddingRight: "10px",
                  justifyContent: "center",
                  "&:hover": {
                    // borderRadius: "20px !important",
                  },
                }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    px: 2.5,
                    alignItems: "center",
                    display: "flex",
                    borderRadius: "10px",
                    flexDirection: open ? "row" : "column",
                    alineItems: "center",
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                      marginRight: open ? "20px" : "0px",
                    }}
                  >
                    <ReactIcon sx={{ margin: "auto" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={text}
                    sx={{
                      span: {
                        fontSize: open ? "14px !important" : "10px !important",
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
      <Box style={{ ...(!lessthan1024 && { display: "none" }) }}>
        <BottomNavigation
          sx={{
            // width: 500,
            overflowX: "scroll",
            position: "fixed",
            bottom: "0px",
            right: "0px",
            left: "0px",
            padding: "0px 30px 0px 30px",
            boxSizing: "border-box",
          }}
          showLabels={true}
          // value={value}
          // onChange={(event, newValue) => {
          //   setValue(newValue);
          // }}
        >
          {[
            { ReactIcon: IoHomeOutline, categoryId: 0, text: "Home" },
            {
              ReactIcon: MdOutlineSportsBasketball,
              categoryId: 17,
              text: "Shorts",
            },
            {
              ReactIcon: SiYoutubegaming,
              categoryId: 20,
              text: "Gaming",
            },
            // {
            //   ReactIcon: SiDsautomobiles,
            //   categoryId: 2,
            //   text: "Auto-Mobiles",
            // },

            // {
            //   ReactIcon: BiSolidCameraMovie,
            //   categoryId: 24,
            //   text: "Intertainments",
            // },
            {
              ReactIcon: GrTechnology,
              categoryId: 28,
              text: "Technology",
            },
            {
              ReactIcon: IoMdMusicalNotes,
              categoryId: 10,
              text: "Music",
            },
            {
              ReactIcon: TbBrandBlogger,
              categoryId: 22,
              text: "Blogs",
            },
            { ReactIcon: ImNewspaper, categoryId: 25, text: "News" },
            { ReactIcon: MdSubscriptions, categoryId: 0, text: "Subscription" },
            { ReactIcon: CiYoutube, categoryId: 0, text: "You" },
          ].map(({ ReactIcon, text, categoryId }, index) => (
            <Link
              key={index}
              onClick={() => setCategory(categoryId)}
              style={{ textDecoration: "none", color: "black" }}
              to={"/"}
            >
              <BottomNavigationAction
                label={text}
                icon={<ReactIcon style={{ fontSize: "20px" }} />}
              />
            </Link>
          ))}
        </BottomNavigation>
      </Box>

      <Box
        component="main"
        sx={{ flexGrow: 1, p: 2, mt: 6, border: "none !important" }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};
