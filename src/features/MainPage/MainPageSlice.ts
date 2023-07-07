import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setShouldFade } from "../AuthPopup/AuthPopupSlice";

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
  pendingSignIn: boolean;
  user: UserInterface | null;
  error: strOrNull;
}

const initialState: MainPageState = {
  loggedIn: false,
  pendingSignIn: false,
  user: null,
  error: null,
};

const BASE_URL: string = "https://social-network.samuraijs.com/api/1.0";

export const submitSignIn = createAsyncThunk(
  "MainPageSlice/submitSignIn",
  async ({ email, password }: { email: string; password: string }, thunkAPI) => {
    thunkAPI.dispatch(setPendingSignIn(true));
    try {
      // ЭТО НЕ GOOGLE SIGN IN, ИМЕЙ ВВИДУ
      const response = await axios.post(`${BASE_URL}/auth/login`, { email, password });
      if (response.data.resultCode === 1 || response.data.resultCode === 10) {
        thunkAPI.dispatch(setError(response.data.messages[0]))
      }
      if (response.data.resultCode === 0) {
        thunkAPI.dispatch(setUser({email, login:email, picture_url: null, loggedIn: true}))
        thunkAPI.dispatch(setShouldFade(false))
        thunkAPI.dispatch(setError(null))
      }
    } catch (error) {
      thunkAPI.dispatch(setError(error.message))
    } finally {
      thunkAPI.dispatch(setPendingSignIn(false));
    }
  }
);

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
  },
});

export const { setUser, setError, setPendingSignIn } = MainPageSlice.actions;

export default MainPageSlice.reducer;
