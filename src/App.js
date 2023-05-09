import React from "react";
import BandsContainer from "./features/bands/BandsContainer";
import BandInput from "./features/bands/BandInput";

function App() {
  return (
    <div className="App">
      <BandInput />
      <BandsContainer />
    </div>
  );
}

export default App;
