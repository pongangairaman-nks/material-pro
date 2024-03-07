import React from 'react';
import { VectorMap } from 'react-jvectormap';
import DashCard from '../dashboardCards/DashCard';
import '../../../views/maps/VectorMap.css';
import MapApp from './Map';
import DrawerComponent from '../../Drawer';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import SearchDrawerDetails from './SearchDrawerDetails';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import CloseIcon from '@mui/icons-material/Close';
import { Typography } from '@mui/material';

const mapData = {
  FR: 540,
  AU: 360,
  GB: 690,
  GE: 200,
  IN: 400,
  RO: 600,
  RU: 300,
  US: 2920,
};

const TotalVisits = () => {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <DashCard>
      <div
        className="d-flex justify-content-end w-100"
        style={{ position: 'absolute', top: '40px', right: '40px', zIndex: 1 }}
      >
        <Paper
          elevation={3}
          sx={{
            width: 45,
            height: 45,
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <IconButton onClick={handleDrawerOpen}>
            <SearchIcon />
          </IconButton>
        </Paper>
      </div>
      <div
        className="d-flex justify-content-end w-100"
        style={{ position: 'absolute', bottom: '90px', right: '45px', zIndex: 1 }}
      >
        <Paper
          elevation={3}
          sx={{
            width: 45,
            height: 45,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <IconButton onClick={handleDrawerOpen}>
            <FullscreenIcon fontSize="medium" />
          </IconButton>
        </Paper>
      </div>
      <div className="text-center">
        <MapApp />
      </div>
      <div className="hstack gap-5 justify-content-start pb-1 mt-3">
        <div className="d-flex align-items-center text-success fs-6">
          <i className="bi bi-circle-fill fs-7 me-2"></i>Running
        </div>
        <div className="d-flex align-items-center text-primary fs-6">
          <i className="bi bi-circle-fill fs-7 me-2"></i>Moving
        </div>
        <div className="d-flex align-items-center text-warning fs-6">
          <i className="bi bi-circle-fill fs-7 me-2"></i>Stopped
        </div>
        <div className="d-flex align-items-center text-danger fs-6">
          <i className="bi bi-circle-fill fs-7 me-2"></i>Not Connected
        </div>
      </div>
      <div>
        <DrawerComponent
          open={open}
          setOpen={setOpen}
          handleDrawerOpen={handleDrawerOpen}
          handleDrawerClose={handleDrawerClose}
          header={
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
              <Box sx={{ flex: 1, display: 'flex', alignItems: 'flex-end', pl: 1 }}>
                <TextField
                  label={<Typography fontSize={15}>Search Assets</Typography>}
                  variant="standard"
                  sx={{ width: '100%' }}
                />
              </Box>
              <Box sx={{ mt: 2 }}>
                <IconButton onClick={handleDrawerClose}>
                  <CloseIcon />
                </IconButton>
              </Box>
            </Box>
          }
          children={<SearchDrawerDetails />}
          zIndex={2}
        />
      </div>
    </DashCard>
  );
};

export default TotalVisits;
