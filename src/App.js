import React, { useState } from "react";
import Routes from "./Routes/Routes";
import userData from "./apollo/userData";
import Context from "lib/Context";

// import { Maintenance } from "./Components";

function App() {
  const [data, setData] = useState(userData);

  const contextValue = {
    data,
    setData,
  };
  return (
    <>
      <Context.Provider value={contextValue}>
        <Routes />
      </Context.Provider>

      {/* <Maintenance /> */}
    </>
  );
}

export default App;
