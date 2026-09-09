import { configureStore } from "@reduxjs/toolkit";
import windowSlice from "./windowSlice";
import locationSlice from "./locationSlice";

const store = configureStore({
  reducer: {
    window: windowSlice,
    location: locationSlice
  }
})

export default store;