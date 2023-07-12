import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type strOrNull = string | null;

interface UserInterface {
  login: string;
  email: string;
  picture_url: string;
}

interface UserInterfaceAction extends UserInterface {
  loggedIn: boolean;
}

export interface MainPageState {
  loggedIn: boolean;
  didRegister: boolean;
  pendingSignIn: boolean;
  pendingSignUp: boolean;
  didRequestPasswordRecovery: strOrNull;
  user: UserInterface | null;
  error: strOrNull;
}

const initialState: MainPageState = {
  loggedIn: false,
  didRegister: false,
  pendingSignIn: false,
  pendingSignUp: false,
  didRequestPasswordRecovery: null,
  user: null,
  error: null,
};

export const MainPageSlice = createSlice({
  name: "MainPageSlice",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserInterfaceAction>) => {
      state.loggedIn = action.payload.loggedIn;
      state.user = action.payload;
    },
    setError: (state, action: PayloadAction<strOrNull>) => {
      state.error = action.payload;
    },
    setPendingSignIn: (state, action: PayloadAction<boolean>) => {
      state.pendingSignIn = action.payload;
    },
    setPendingSignUp: (state, action: PayloadAction<boolean>) => {
      state.pendingSignUp = action.payload;
    },
    setUserDidRegister: (state, action: PayloadAction<boolean>) => {
      state.didRegister = action.payload;
    },
    setDidRequestPasswordRecovery: (state, action: PayloadAction<strOrNull>) => {
      state.didRequestPasswordRecovery = action.payload;
    },
  },
});

export const {
  setUser,
  setError,
  setPendingSignIn,
  setPendingSignUp,
  setUserDidRegister,
  setDidRequestPasswordRecovery,
} = MainPageSlice.actions;

export default MainPageSlice.reducer;
