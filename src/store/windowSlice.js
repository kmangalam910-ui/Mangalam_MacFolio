import { createSlice } from "@reduxjs/toolkit";
import { WINDOW_CONFIG, INITIAL_Z_INDEX } from "#constants";

const windowSlice = createSlice({
  name: "windowSlice",
  initialState: {
    ...WINDOW_CONFIG,
    nextZndex: INITIAL_Z_INDEX + 1
  },
  reducers: {
    openWindow: (state, action) => {
      const win = state[action.payload];
      win.isOpen = true;
      win.zIndex = state.nextZndex;
      win.data = win.data ?? null;
      state.nextZndex++;
    },

    closeWindow: (state, action) => {
      const win = state[action.payload];
      win.isOpen = false;
      win.zIndex = INITIAL_Z_INDEX;
      win.data = null;
    },

    focusWindow: (state, action) => {
      const win = state[action.payload];
      win.zIndex = state.nextZndex++;
    }
  }
});

export const { openWindow, closeWindow, focusWindow } = windowSlice.actions;
export default windowSlice.reducer;