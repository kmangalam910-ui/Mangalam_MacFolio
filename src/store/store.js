import { configureStore } from "@reduxjs/toolkit";
import windowSlice from "./windowSlice"

const store = configureStore({
  reducer: {
    window: windowSlice
  }
})

export default store;