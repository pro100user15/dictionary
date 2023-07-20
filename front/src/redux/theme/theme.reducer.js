import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ERROR_INITIAL_STATE, SLICE_INITIAL_STATE } from '../constants';
import { getThemesRequest } from '../../requests/theme.requests';

export const THEME_REDUCER_KEY = 'theme';

const THEME_INITIAL_STATE = {
  themes: []
};

export const getThemesThunk = createAsyncThunk(
  'get themes',
  async (request, { rejectWithValue }) => {
    try {
      const response = await getThemesRequest();
      return response.data;
    } catch (error) {
      if (error.error?.code) {
        return rejectWithValue(error);
      }
      return rejectWithValue(error.response?.data?.error);
    }
  }
);

export const themeSlice = createSlice({
  name: THEME_REDUCER_KEY,
  initialState: SLICE_INITIAL_STATE(THEME_INITIAL_STATE),
  extraReducers: (builder) => {
    builder.addCase(getThemesThunk.pending, (state) => {
      state.isLoading = true;
      state.data.themes = [];
      state.error = ERROR_INITIAL_STATE;
    });
    builder.addCase(getThemesThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data.themes = action.payload;
      state.error = ERROR_INITIAL_STATE;
    });
    builder.addCase(getThemesThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.data.themes = [];
      state.error = action.payload;
    });
  }
});

export const { reducer: themeReducer } = themeSlice;
