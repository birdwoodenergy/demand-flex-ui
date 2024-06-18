import React from 'react';
import { useRoutes } from 'react-router-dom';
import { Container, Box } from '@mui/material';
import Header from './Header/Header';
import Footer from './Footer/Footer';
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
      <Container sx={{ flexGrow: 1, overflowY: 'auto', paddingTop: 10 }}>
        {routes}
      </Container>
      <Footer /> 
    </Box>
  );
};

export default MainApplication;
