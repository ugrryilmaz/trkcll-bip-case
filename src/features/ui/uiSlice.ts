import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type UiState = {
  snackbar: {
    open: boolean;
    message: string;
  };
};

const initialState: UiState = {
  snackbar: {
    open: false,
    message: '',
  },
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    showSnackbar: (state, action: PayloadAction<string>) => {
      state.snackbar = {
        open: true,
        message: action.payload,
      };
    },
    hideSnackbar: (state) => {
      state.snackbar.open = false;
    },
  },
});

export const { showSnackbar, hideSnackbar } = uiSlice.actions;
export default uiSlice.reducer;
