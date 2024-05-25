import React, { useState, useMemo, useCallback } from "react";

function ParentMemoCallback() {
  const [count, setCount] = useState(0);

  // useMemo memoizes the result of the function
  const expensiveCalculation = useMemo(() => {
    console.log("Calculating...");
    return count * 2;
  }, [count]);

  // useCallback memoizes the function instance
  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <h2>Result of expensive calculation: {expensiveCalculation}</h2>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

export default ParentMemoCallback;
