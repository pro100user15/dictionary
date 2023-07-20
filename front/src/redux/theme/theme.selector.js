import { THEME_REDUCER_KEY } from './theme.reducer';
import { createSelector } from '@reduxjs/toolkit';

const selectSlice = (state) => state[THEME_REDUCER_KEY];

export const selectLoadingThemeState = createSelector(selectSlice, (slice) => slice.isLoading);

export const selectThemes = createSelector(selectSlice, (slice) => slice.data.themes);
