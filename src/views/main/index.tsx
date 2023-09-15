import React, { useState } from 'react';
import MainViewModel from 'view_models/main';
import { Button, Typography } from '@mui/material';
import './style.css'; 
const MainView: React.FC = () => {
  const viewModel = MainViewModel();
  return (
    <div>
      <Typography className="customTitle" variant="h4" gutterBottom>
        Main View
      </Typography>
      <Button  className="customButton" variant="contained"  onClick={viewModel.incrementCounter}>Click me</Button>
      <Typography variant="body1" gutterBottom>
        Counter: {viewModel.total}
      </Typography>
    </div>
  );
};

export default MainView;
