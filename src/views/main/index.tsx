import React, { useState } from 'react';
import MainViewModel from 'view_models/main';

const MainView: React.FC = () => {
  const viewModel = MainViewModel();
  return (
    <div>
      <h1>Main View</h1>
      <button onClick={viewModel.incrementCounter}>Click me</button>
      <p>Counter: {viewModel.total}</p>
    </div>
  );
};

export default MainView;
