import React, { useEffect, useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
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
import { MdOutlineSubscriptions } from "react-icons/md";
import { CiYoutube } from "react-icons/ci";
import MainPage from "../../pages/MainPage";
import { Outlet } from "react-router-dom";
import "./sidebar.css";
import { CounterState } from "../../state/context/context";

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
    width: `calc(${theme.spacing(10)} + 1px)`,
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
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
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
  const [category, setCategory] = useState(0);
  const { dispatch } = CounterState();
  const theme = useTheme();
  const [open, setOpen] = useState(false);

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
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...{ display: "none" },
            }}
          >
            <TfiMenu sx={{ color: "black" }} />
          </IconButton>
          <img
            src={
              "https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Dyoutube%2Blogo&psig=AOvVaw0uZ0QGcX8I_6D0ZwlwoTHk&ust=1709877581186000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCIDr0Zny4oQDFQAAAAAdAAAAABAE"
            }
          />
        </Toolbar>
      </AppBar>
      <Drawer
        style={{ paddingLeft: "10px !important" }}
        variant="permanent"
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
          <IconButton
            sx={{
              marginLeft: 2,
              background: "white",
            }}
            onClick={handleDrawerOpen}
          >
            <TfiMenu />
          </IconButton>
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
            {
              ReactIcon: SiDsautomobiles,
              categoryId: 2,
              text: "Auto-Mobiles",
            },

            {
              ReactIcon: BiSolidCameraMovie,
              categoryId: 24,
              text: "Intertainments",
            },
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
            <ListItem
              key={text}
              disablePadding
              onClick={() => setCategory(categoryId)}
              sx={{
                display: "flex",
                paddingLeft: "10px",
                paddingRight: "10px",
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
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 2, mt: 6, border: "none !important" }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};
