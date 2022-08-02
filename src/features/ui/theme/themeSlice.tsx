import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store";

export enum ThemeEnum {
  LIGHT = "light",
  DARK = "dark",
}

export const defaultMode = ThemeEnum.LIGHT;

const themeSlice = createSlice({
  name: "themeMode",
  initialState: {
    theme: defaultMode as ThemeEnum,
  },
  reducers: {
    setTheme: (state, action: { payload: ThemeEnum }) => {
      state.theme = action.payload;
    },
  },
});

export const getTheme = (state: RootState) => state.themeMode;

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
