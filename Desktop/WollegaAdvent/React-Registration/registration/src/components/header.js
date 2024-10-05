import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import CustomAppBar from './appbar';

const Header = ({handleLanguageChange}) => {
  return (
    <Box
      sx={{
        position: 'relative',
        height: '60vh', 
        backgroundImage: 'url(/images/bible_bg.jpg)', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        textAlign: 'center',
        padding: '0 20px',
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay
        }}
      />

      {/* AppBar */}
      <CustomAppBar handleLanguageChange={handleLanguageChange}/>

      {/* Text */}
      <Container
        maxWidth="md"
        sx={{
          position: 'relative', // Ensure text stays on top of overlay
          zIndex: 2,
        }}
      >
        <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold' }}>
          Welcome to Our Site
        </Typography>
        <Typography variant="h6" component="p" sx={{ mt: 2 }}>
          We create solutions to help you succeed in business.
        </Typography>
      </Container>
    </Box>
  );
};

export default Header;
