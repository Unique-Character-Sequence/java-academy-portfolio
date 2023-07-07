import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface AuthPopupState {
  shouldFade: boolean;
}

const initialState: AuthPopupState = {
  shouldFade: false,
};

export const AuthPopupSlice = createSlice({
  name: "AuthPopupSlice",
  initialState,
  reducers: {
    setShouldFade: (state, action: PayloadAction<boolean>) => {
      state.shouldFade = action.payload;
    },
  },
});

export const { setShouldFade } = AuthPopupSlice.actions;

export default AuthPopupSlice.reducer;
