import React from 'react';
import MainViewModel from 'view_models/view_model';
import { Button, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add'; 
import RemoveIcon from '@mui/icons-material/Remove';
import './style.css'; 
const MainView: React.FC = () => {
  const viewModel = MainViewModel();
  return (
    <div>
      <Typography className="customTitle" variant="h4" gutterBottom>
        Main View
      </Typography>
      <div className="btn-container">
      <Button  className="primaryButton" variant="contained"  onClick={viewModel.incrementCounter}>
        Increment <AddIcon /> 
        </Button>
      <Button  className="errorButton"  variant="contained" onClick={viewModel.decrementCounter}>
        Decrement <RemoveIcon />
      </Button>
      </div>
      <Typography variant="body1"  gutterBottom>
        Counter: {viewModel.total}
      </Typography>
    </div>
  );
};

export default MainView;
