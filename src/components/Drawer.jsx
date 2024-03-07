import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { Typography } from '@mui/material';

const drawerWidth = 450;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

export default function CustomDrawer(props) {
  const { open, handleDrawerClose, header, children, zIndex } = props;
  const theme = useTheme();

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            marginTop: '70px',
          },
          zIndex: zIndex,
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader>{header}</DrawerHeader>
        {children}
      </Drawer>
    </Box>
  );
}

// Example of using CustomDrawer in another component
function MyComponent() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* Your other content */}
      <CustomDrawer open={open} handleDrawerClose={handleDrawerClose}>
        {/* Content of the drawer */}
        <ListItem key="Example" disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Example" />
          </ListItemButton>
        </ListItem>
        {/* Add more list items or any other content as needed */}
      </CustomDrawer>
    </div>
  );
}
