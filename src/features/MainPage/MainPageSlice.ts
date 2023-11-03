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
  currentPage: "MainPage" | "ProfilePage";
}

const initialState: MainPageState = {
  loggedIn: false,
  didRegister: false,
  pendingSignIn: false,
  pendingSignUp: false,
  didRequestPasswordRecovery: null,
  user: null,
  error: null,
  notificationsNumber: 3,
  currentPage: "MainPage",
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
      state.currentPage = "ProfilePage";
    },
    setLogOut: (state) => {
      state.currentPage = "MainPage";
      state.loggedIn = false;
      state.user = null;
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
      state.notificationsNumber = 0;
    },
    setPage: (
      state,
      action: PayloadAction<typeof initialState.currentPage>
    ) => {
      state.currentPage = action.payload;
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
  setNotificationsNum,
  setPage,
} = MainPageSlice.actions;

export default MainPageSlice.reducer;
