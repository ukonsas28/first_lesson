import React, { useState } from "react";
import CustomCounter from "../CounterContainer";

function App() {
  // eslint-disable-next-line no-console
  console.log("App => start");
  const [a, setA] = useState(4);
  return (
    <>
      {a > 3 && <CustomCounter title="Груша" limit={25} />}
      {a > 2 && <CustomCounter title="Яблоко" limit={13} />}
      {a > 1 && <CustomCounter title="Апельсин" limit={8} />}
      <button type="button" onClick={() => setA(a - 1)}>
        push
      </button>
      {/* <CustomCounter title="Груша" limit={25} /> */}
      {/* <CustomCounter title="Яблоко" limit={13} />
      <CustomCounter title="Апельсин" limit={8} /> */}
    </>
  );
}

export default App;
