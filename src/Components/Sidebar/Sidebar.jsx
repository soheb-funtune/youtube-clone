import React, { useState } from "react";
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
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { IoHomeOutline } from "react-icons/io5";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { CiYoutube } from "react-icons/ci";
import { Outlet } from "react-router-dom";
import MainPage from "../../pages/MainPage";
import "./sidebar.css";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
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

export const Sidebar = ({ children }) => {
  const [category, setCategory] = useState(0);
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    open ? setOpen(false) : setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        sx={{ background: "white", boxShadow: "none", color: "black" }}
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
              ...(open && { display: "none" }),
            }}
          >
            <TfiMenu sx={{ color: "black" }} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader
          sx={{
            justifyContent: "left",
            position: "sticky",
            top: "0px",
            zIndex: 99999,
            // maxHeight: "50px !imporantant",
            // maxWidth: "50px !imporantant",
            background: "white",
            // boxShadow: "1px 1px 5px lightgray",
          }}
        >
          <IconButton
            sx={{
              marginRight: 5,
              background: "white",
            }}
            onClick={handleDrawerOpen}
          >
            <TfiMenu sx={{ color: "black" }} />
          </IconButton>
        </DrawerHeader>

        <List>
          {[
            { ReactIcon: IoHomeOutline, categoryId: 0, text: "Home" },
            {
              ReactIcon: MdOutlineSubscriptions,
              categoryId: 0,
              text: "Shorts",
            },
            {
              ReactIcon: MdOutlineSubscriptions,
              categoryId: 20,
              text: "Gaming",
            },
            {
              ReactIcon: MdOutlineSubscriptions,
              categoryId: 2,
              text: "Auto-Mobiles",
            },
            {
              ReactIcon: MdOutlineSubscriptions,
              categoryId: 17,
              text: "Sports",
            },
            {
              ReactIcon: MdOutlineSubscriptions,
              categoryId: 24,
              text: "Intertainments",
            },
            {
              ReactIcon: MdOutlineSubscriptions,
              categoryId: 28,
              text: "Technology",
            },
            {
              ReactIcon: MdOutlineSubscriptions,
              categoryId: 10,
              text: "Music",
            },
            {
              ReactIcon: MdOutlineSubscriptions,
              categoryId: 22,
              text: "Blogs",
            },
            { ReactIcon: MdOutlineSubscriptions, categoryId: 25, text: "News" },
            { ReactIcon: SiYoutubeshorts, categoryId: 0, text: "Subscription" },
            { ReactIcon: CiYoutube, categoryId: 0, text: "You" },
          ].map(({ ReactIcon, text, categoryId }, index) => (
            <ListItem
              key={text}
              disablePadding
              onClick={() => setCategory(categoryId)}
              sx={{
                display: "flex",
                borderRadius: "20px",
                justifyContent: "center",
                "&:hover": {
                  borderRadius: "20px !important",
                },
              }}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  px: 2.5,
                  alignItems: "center",
                  display: "flex",
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
        sx={{ flexGrow: 1, p: 5, border: "none !important" }}
      >
        <MainPage category={category} />
      </Box>
    </Box>
  );
};
