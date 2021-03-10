import React from "react";
import "./App.css";
import CustomCounter from "./CustomCounter";

function App() {
  // eslint-disable-next-line no-console
  console.log("App => start");

  return (
    <>
      <CustomCounter title="Яблоко" limit={13} />
      <CustomCounter title="Апельсин" limit={8} />
      <CustomCounter title="Груша" limit={25} />
    </>
  );
}

export default App;
