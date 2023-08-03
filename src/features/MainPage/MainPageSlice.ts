import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type strOrNull = string | null;

interface UserInterface {
  login: string;
  name: string;
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
  notificationsNumber: number;
}

const initialState: MainPageState = {
  loggedIn: false,
  didRegister: false,
  pendingSignIn: false,
  pendingSignUp: false,
  didRequestPasswordRecovery: null,
  user: null,
  error: null,
  notificationsNumber: 1
};

export const MainPageSlice = createSlice({
  name: "MainPageSlice",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserInterfaceAction>) => {
      state.loggedIn = action.payload.loggedIn;
      state.user = {
        email: action.payload.email,
        name: action.payload.name,
        login: action.payload.login,
        picture_url: action.payload.picture_url,
      };
    },
    setLogOut: (state) => {
      state.loggedIn = false
      state.user = null
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
    setDidRequestPasswordRecovery: (
      state,
      action: PayloadAction<strOrNull>
    ) => {
      state.didRequestPasswordRecovery = action.payload;
    },
    setNotificationsNum: (state) => {
      state.notificationsNumber++
    },
  },
});

export const {
  setUser,
  setLogOut,
  setError,
  setPendingSignIn,
  setPendingSignUp,
  setUserDidRegister,
  setDidRequestPasswordRecovery,
  setNotificationsNum
} = MainPageSlice.actions;

export default MainPageSlice.reducer;
