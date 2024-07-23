import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>This is counter UI</h1>
    </>
  );
};
