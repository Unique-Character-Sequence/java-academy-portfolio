import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type WindowType = "SignIn" | "SignUp" | "ForgotPassword";

interface initialStateInterface {
  shouldFade: boolean;
  windowType: WindowType;
}

const initialState: initialStateInterface = {
  shouldFade: false,
  windowType: "SignIn", // Google Auth should render its button
};

const ModalPopupSlice = createSlice({
  name: "ModalPopupSlice",
  initialState,
  reducers: {
    setShouldFade: (state, action: PayloadAction<boolean>) => {
      state.shouldFade = action.payload;
    },
    setWindowType: (state, action: PayloadAction<WindowType>) => {
      state.windowType = action.payload;
    },
  },
});

export const { setShouldFade, setWindowType } = ModalPopupSlice.actions;
export default ModalPopupSlice.reducer;
