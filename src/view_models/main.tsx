import { useState } from "react";

const MainViewModel = (): any => {
  const [total, setTotal] = useState(0);

  const setCounter = (value: number) => {
    setTotal(value);
  };

  const incrementCounter = () => {
    setTotal(total + 1);

  }
  return {
    total,
    incrementCounter,
    setCounter,
  };
};

export default MainViewModel;
