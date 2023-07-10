import { createAsyncThunk } from "@reduxjs/toolkit";
import { setError, setPendingSignIn, setUser } from "./MainPageSlice";
import axios from "axios";
import { setShouldFade } from "../ModalPopup/ModalPopupSlice";

const BASE_URL: string = "https://api.restful-api.dev/objects";

export const submitSignIn = createAsyncThunk(
  "MainPageSlice/submitSignIn",
  async (
    { email, password }: { email: string; password: string },
    thunkAPI
  ) => {
    thunkAPI.dispatch(setPendingSignIn(true));
    try {
      // ЭТО НЕ GOOGLE SIGN IN, ИМЕЙ ВВИДУ
      const response = await axios.post(BASE_URL, {
        data: { email, password },
      });
      if (response.status === 200) {
        thunkAPI.dispatch(
          setUser({ email, login: email, picture_url: null, loggedIn: true })
        );
        thunkAPI.dispatch(setShouldFade(false));
        thunkAPI.dispatch(setError(null));
      } else {
        thunkAPI.dispatch(setError(response.statusText));
      }
    } catch (error) {
      thunkAPI.dispatch(setError(error.message));
    } finally {
      thunkAPI.dispatch(setPendingSignIn(false));
    }
  }
);