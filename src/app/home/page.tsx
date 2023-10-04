"use client"

import { Button, Container, Typography } from '@mui/material';

import { Home as HomeIcon } from '@mui/icons-material';
import React from 'react';

const HomePage: React.FC = () => {
  return (
    <Container maxWidth="md" style={{ textAlign: 'center', marginTop: '2rem' }}>
      <HomeIcon style={{ fontSize: 100, color: 'dodgerblue' }} />
      <Typography variant="h3" gutterBottom>
        Bem-vindo à nossa Página Inicial!
      </Typography>
      <Typography variant="body1" paragraph>
        Aqui está a página inicial bonita que você pediu.
      </Typography>
      <Button variant="contained" color="primary">
        Saiba mais
      </Button>
    </Container>
  );
};

export default HomePage;
