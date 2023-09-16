import React, { useState } from 'react';
import MainViewModel from 'view_models/view_model_exemple';
import { Button, Typography } from '@mui/material';
import './style.css'; 
const MainView: React.FC = () => {
  const viewModel = MainViewModel();
  return (
    <div>
      <Typography className="customTitle" variant="h4" gutterBottom>
        Main View
      </Typography>
      <div className="btn-container">
      <Button  className="primaryButton" variant="contained"  onClick={viewModel.incrementCounter}>Increment</Button>
      <Button  className="errorButton"  variant="contained" onClick={viewModel.decrementCounter}>Decrement</Button>
      </div>
      <Typography variant="body1"  gutterBottom>
        Counter: {viewModel.total}
      </Typography>
    </div>
  );
};

export default MainView;
