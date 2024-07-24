import { useState } from "react";

export const Counter = ({initialCount}) => {
  const [count, setCount] = useState(initialCount);

  const IncreaseCount = () => {
    setCount((prev) => prev + 1);
  };

  const DecreaseCount = () => {
    setCount((prev) => prev !== 0 ? prev - 1 : 0);
  };

  const ResetCount = () => {
    setCount(initialCount);
  };

  const SwitchSignsCount = () => {
    setCount((prev) => prev * -1);
  };

  return (
    <>
      <h1 data-testid="final_count">{count}</h1>
      <div>
        <button onClick={IncreaseCount}>Increase</button>
        <button onClick={DecreaseCount}>Decrease</button>
        <button onClick={ResetCount}>Reset</button>
        <button onClick={SwitchSignsCount}>Switch Signs</button>
      </div>
    </>
  );
};
