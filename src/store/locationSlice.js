import { createSlice } from "@reduxjs/toolkit";
import { locations } from "#constants";

const DEFAULT_LOCATION = locations.work

const locationSlice = createSlice({
  name: "location",
  initialState: {
    activeLocation: DEFAULT_LOCATION,
  },
  reducers: {
    setActiveLocation: (state, {payload = null}) => {
      state.activeLocation = payload;
    },

    resetActiveLocation: (state) => {
      state.activeLocation = DEFAULT_LOCATION;
    }
  }
})

export const { setActiveLocation, resetActiveLocation } = locationSlice.actions;
export default locationSlice.reducer;