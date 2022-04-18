import * as React from 'react';
import {
  Grid,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer,
} from '@mui/material';

import { styled, useTheme } from '@mui/material/styles';
import ShopOutlinedIcon from '@mui/icons-material/ShopOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import MailIcon from '@mui/icons-material/Mail';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Link from '../../../Link';
import { buttons } from './NavButtons/NavButtons';
import { links } from './NavLinks/NavLinks';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

export default function PersistentDrawerRight() {
  let drawerWidth;
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    drawerWidth = 240;
    setOpen(true);
  };

  const handleDrawerClose = () => {
    drawerWidth = 0;
    setOpen(false);
  };

  return (
    <>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {links.map((link, index) => (
            <ListItem
              button
              key={link.text}
              component={Link}
              href={link.href}
              onClick={handleDrawerClose}
            >
              <ListItemIcon>
                {index === 0 ? (
                  <InboxIcon />
                ) : index === 1 ? (
                  <MailIcon />
                ) : index === 2 ? (
                  <ShopOutlinedIcon />
                ) : null}
              </ListItemIcon>
              <ListItemText primary={link.text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {buttons.map((button, index) => (
            <ListItem
              button
              key={button.title}
              component={Link}
              href={button.href}
              onClick={handleDrawerClose}
            >
              <ListItemIcon>
                {index === 0 ? (
                  <ShoppingCartOutlinedIcon />
                ) : index === 1 ? (
                  <StarBorderOutlinedIcon />
                ) : null}
              </ListItemIcon>
              <ListItemText primary={button.title} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Grid item>
        <IconButton
          color="primary"
          edge="start"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          sx={{ ...(open && { display: 'none' }) }}
        >
          <MenuIcon sx={{ width: 50, height: 50 }} />
        </IconButton>
      </Grid>
    </>
  );
}
