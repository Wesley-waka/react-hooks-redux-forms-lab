import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bandAdded } from "./bandsSlice";
import BandInput from "./BandInput";

// export const bandInput = () => {
//   return (<BandInput
//     bandName={bandName}
//     setBandName={setBandName}
//     onBandSubmit={handleBandSubmit}
//   />)
// }
function BandsContainer() {
  const dispatch = useDispatch();
  const bandNames = useSelector((state) => state.bands.entities);

  const handleBandSubmit = (bandName) => {
    dispatch(bandAdded(bandName));
  };


  return (
    <div>
      <BandInput onBandSubmit={handleBandSubmit} />
      <div>BandsContainer</div>
      <ul>
        {bandNames.map((band) => (
          <li key={band}>{band}</li>
        ))}
      </ul>
    </div>
  );
}

export default BandsContainer;
