import { createSlice } from '@reduxjs/toolkit';

const preferencesSlice = createSlice({
  name: 'preferences',
  initialState: {
    theme: 'light',
    fontSize: 16,
  },
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
    setFontSize: (state, action) => {
      state.fontSize = action.payload;
    },
  },
});

export const { toggleTheme, setFontSize } = preferencesSlice.actions;
export default preferencesSlice.reducer;
