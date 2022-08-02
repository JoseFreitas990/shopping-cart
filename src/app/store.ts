import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import themeReducer from "../features/ui/theme/themeSlice";

export const store = configureStore({
  reducer: {
    themeMode: themeReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
