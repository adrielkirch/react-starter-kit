import { useState } from "react";

const MainViewModel = (): any => {
  const [total, setTotal] = useState(0);

  const setCounter = (value: number) => {
    setTotal(value);
  };

  const incrementCounter = () => {
    setTotal(total + 1);
  }
  const decrementCounter = () => {
    setTotal(total - 1);
  }
  return {
    total,
    incrementCounter,
    decrementCounter,
    setCounter,
  };
};

export default MainViewModel;
