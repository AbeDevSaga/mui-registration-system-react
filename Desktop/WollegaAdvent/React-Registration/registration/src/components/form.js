import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Container, TextField, Button, Typography, Box } from '@mui/material';

const RegistrationForm = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mt: 4,
        }}
      >
        <Typography variant="h4" gutterBottom>
          {t('register.title')}
        </Typography>
        <form onSubmit={handleSubmit} style={{ 
          width: '100%',

         }}>
          <TextField
            label={t('register.name')}
            name="name"
            value={formData.name}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label={t('register.email')}
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label={t('register.password')}
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            {t('register.submit')}
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default RegistrationForm;
