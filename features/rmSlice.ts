import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import type { RootState } from "../app/store";
import { CharactersListState, Info } from "./types";

const initialState: CharactersListState = {
  data: {
    info: {
      count: 0,
      next: null,
      pages: 0,
      prev: null,
    },
    results: [],
  },
  pending: false,
  error: false,
};

export const getCharactersList = createAsyncThunk(
  "rickAndMorty/characters",
  async ({
    pageNumber,
    charName,
  }: {
    pageNumber: number;
    charName: string;
  }) => {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character/?page=${
        pageNumber ?? 1
      }&name=${charName ?? ""}`
    );
    return response.data;
  }
);

export const charactersListSlice = createSlice({
  name: "charactersList",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getCharactersList.pending, state => {
        state.pending = true;
      })
      .addCase(getCharactersList.fulfilled, (state, { payload }) => {
        state.pending = false;
        state.data = payload;
      })
      .addCase(getCharactersList.rejected, state => {
        state.pending = false;
        state.error = true;
        state.data = { info: {} as Info, results: [] };
      });
  },
});

export const selectCharacters = (state: RootState) => state.charactersList;

export default charactersListSlice.reducer;
