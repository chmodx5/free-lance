import React, { useState } from "react";
import {
  AppBar,
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  useScrollTrigger,
  Slide,
  IconButton,
  Box,
  Link,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as RouterLink } from "react-router-dom";
import { NavLink } from "../shared";
// import { Box } from "@mui/system";
// import Slide from "@mui/material/Slide";

const SidebarLayout = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const trigger = useScrollTrigger();
  return (
    <>
      <Slide appear={false} direction="down" in={!trigger}>
        <AppBar
          position="fixed"
          className="bg-white"
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <Toolbar variant="dense" className="flex justify-between">
            <Typography variant="h6" noWrap component="div">
              Clipped drawer
            </Typography>
            <Box className="flex items-center" component={"nav"}>
              <Box className="hidden sm:block" component={"ul"}>
                {[
                  {
                    title: "dashboard",
                    link: "/client",
                  },
                  {
                    title: "tasks",
                    link: "/client/tasks",
                  },
                  {
                    title: "freelancers",
                    link: "/client/freelancers",
                  },
                  {
                    title: "account ",
                    link: "/client/account",
                  },
                ].map((item, index) => (
                  <NavLink text={item.title} to={item.link} key={index} />
                ))}
              </Box>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={() => setDrawerOpen(!drawerOpen)}
                className="mr-2 "
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </Slide>
      <Drawer
        variant="temporary"
        open={drawerOpen}
        sx={{
          width: 240,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: 240, boxSizing: "border-box" },
        }}
        onClose={() => setDrawerOpen(!drawerOpen)}
        ModalProps={{ keepMounted: true }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {["All mail", "Trash", "Spam"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <div>lorem1000</div>
    </>
  );
};

export default SidebarLayout;
