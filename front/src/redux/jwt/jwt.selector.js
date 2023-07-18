import { JWT_REDUCER_KEY } from './jwt.reducer';
import { createSelector } from '@reduxjs/toolkit';

const selectSlice = (state) => state[JWT_REDUCER_KEY];

export const selectJwtState = createSelector(selectSlice, (slice) => slice.data);
