import React, { useEffect, useState } from "react";

const TestComponent = () => {
  const [value, setValue] = useState(true);
  const [value2, setValue2] = useState(true);
  let timerId: any = null;

  useEffect(() => {
    console.log("mount");
    return () => {
      clearTimeout(timerId);
      console.log("unmount");
    };
  }, [timerId]);

  useEffect(() => {
    console.log("update");
  }, [value]);

  const timer = () => {
    timerId = setTimeout(() => console.log("Timer done"), 3000);
  };

  return (
    <>
      <button type="button" onClick={timer}>
        Start timer
      </button>
      <button type="button" onClick={() => setValue(!value)}>
        push
      </button>
      <button type="button" onClick={() => setValue2(!value2)}>
        push2
      </button>
      {`${value}`}
      {`${value2}`}
    </>
  );
};

export default TestComponent;
