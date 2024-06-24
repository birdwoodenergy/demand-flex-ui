import React from 'react';
import { useRoutes } from 'react-router-dom';
import { Container, Box } from '@mui/material';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Home from '../../pages/Home';
import SingleLineDiagram from '../../pages/SingleLineDiagram';
import FlexibleLoadIdentification from '../../pages/FlexibleLoadIdentification';
import Uploads from '../../pages/Uploads';
import MonitoringEquipment from '../../pages/MonitoringEquipment';
import SolarBattery from '../../pages/SolarBattery';
import SiteQuestions from '../../pages/SiteQuestions';

const MainApplication: React.FC = () => {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/singlelinediagram', element: <SingleLineDiagram /> },
    { path: '/flexibleloadnotification', element: <FlexibleLoadIdentification /> },
    { path: '/uploads', element: <Uploads /> }, 
    { path: '/monitoring', element: <MonitoringEquipment /> },
    { path: '/solar', element: <SolarBattery /> },
    { path: '/questions', element: <SiteQuestions /> },
    // { path: '*', element: <NotFound /> }
  ]);

  return (
    <Box minHeight="100vh" display="flex" flexDirection="column">
      <Header />
      <Container sx={{ flexGrow: 1, overflowY: 'auto', paddingTop: 10, maxWidth: 'xl' }}>
        {routes}
      </Container>
      <Footer /> 
    </Box>
  );
};

export default MainApplication;
