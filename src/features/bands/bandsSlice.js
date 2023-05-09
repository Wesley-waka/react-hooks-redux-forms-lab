import { createSlice } from "@reduxjs/toolkit";

const bandsSlice = createSlice({
  name: "bands",
  initialState: {
    entities: [],
  },
  reducers: {
    // adds band to the list
    bandAdded(state, action) {
      state.entities.push(action.payload);
    },
    // create reducer methods
  },
});
// 
// export the action creators
// band/added method in the reducer 
export const { bandAdded } = bandsSlice.actions;
export default bandsSlice.reducer;
