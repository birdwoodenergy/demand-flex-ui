import React from 'react';
import { useRoutes } from 'react-router-dom';
import { Container, Box } from '@mui/material';
import Header from './Header';
import Footer from './Footer';
import Home from '../../pages/Home';
import About from '../../pages/About';

const MainApplication: React.FC = () => {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/about', element: <About /> },
    // { path: '*', element: <NotFound /> }
  ]);

  return (
    <Box minHeight="100vh" display="flex" flexDirection="column">
      <Header />
      <Container sx={{ flexGrow: 1 }}>
        {routes}
      </Container>
      <Footer />
    </Box>
  );
};

export default MainApplication;
