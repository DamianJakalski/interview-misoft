import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import charactersListReducer from "./rickMortySlice";

export const store = configureStore({
  reducer: {
    charactersList: charactersListReducer,
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
