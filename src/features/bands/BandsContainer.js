import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bandAdded } from "./bandsSlice";
import BandInput from "./BandInput";

export const bandInput = () => {
  return (<BandInput
    bandName={bandName}
    setBandName={setBandName}
    onBandSubmit={handleBandSubmit}
  />)
}
function BandsContainer() {
  const dispatch = useDispatch();
  const [bandName, setBandName] = useState("");

  const handleBandSubmit = (event) => {
    event.preventDefault();
    dispatch(bandAdded(bandName));
    setBandName("");
  };

  const bandNames = useSelector((state) => state.bands.entities);

  return (
    <>

      <div>BandsContainer</div>

      {bandNames.map((band, index) => (
        <li key={index}>{band}</li>
      ))}
    </>
  );
}

export default BandsContainer;
