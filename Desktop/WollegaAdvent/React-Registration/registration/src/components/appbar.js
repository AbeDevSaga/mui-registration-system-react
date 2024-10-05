import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const CustomAppBar = ({handleLanguageChange}) => {
  // State for controlling the menu
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  // Functions to handle opening and closing the menu
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="absolute" sx={{ background: 'transparent', boxShadow: 'none' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Logo on the left */}
        <IconButton edge="start" color="inherit" aria-label="logo">
          <img
            src="images/aqua-logo.png" 
            alt="Logo"
            style={{ height: '40px', width: 'auto' }} 
          />
        </IconButton>

        {/* Three-dot menu on the right */}
        <IconButton
          edge="end"
          color="inherit"
          aria-label="settings"
          onClick={handleMenuOpen}
        >
          <MoreVertIcon />
        </IconButton>

        {/* Language Menu */}
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleMenuClose}
          PaperProps={{
            style: {
              maxHeight: 48 * 4.5,
              width: '20ch',
            },
          }}
        >
          <MenuItem onClick={() => handleLanguageChange('en')}>English</MenuItem>
          <MenuItem onClick={() => handleLanguageChange('fr')}>Français</MenuItem>
          <MenuItem onClick={() => handleLanguageChange('es')}>Español</MenuItem>
          <MenuItem onClick={() => handleLanguageChange('oro')}>Afan Oromor</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;
