import React, { FC, useEffect, useState } from "react";

interface IProps {
  data: string;
  name: string;
}
const TestComponent: FC<IProps> = (props: IProps) => {
  const { data, name } = props;
  const [value, setValue] = useState<boolean>(true);
  const [value2, setValue2] = useState<boolean>(true);
  let timerId: any = null;

  useEffect(() => {
    console.log("mount");
    return () => {
      clearTimeout(timerId);
      console.log("unmount");
    };
  });

  useEffect(() => {
    console.log("update");
  }, [value]);

  const timer = () => {
    timerId = setTimeout(() => console.log("Timer done"), 3000);
  };

  return (
    <>
      {/* <button type="button" onClick={timer}>
        Start timer
      </button>
      <button type="button" onClick={() => setValue(!value)}>
        push
      </button>
      <button type="button" onClick={() => setValue2(!value2)}>
        push2
      </button>
      {`${value}`}
      {`${value2}`} */}

      <main
        onClick={(e) => console.log(e.currentTarget)}
        role="presentation"
        style={{ width: "100%" }}>
        <div style={{ width: "50%" }}>
          <button type="button" onClick={(e) => console.log(e.currentTarget)}>
            push
          </button>
        </div>
      </main>
    </>
  );
};

export default TestComponent;
