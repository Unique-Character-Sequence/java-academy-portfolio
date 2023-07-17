import { createAsyncThunk } from "@reduxjs/toolkit";
import { setError, setPendingSignUp, setUser, setUserDidRegister } from "../MainPage/MainPageSlice";
import axios from "axios";
import { setShouldFade } from "../ModalPopup/ModalPopupSlice";

interface submitSignUpProps {
  email: string;
  name: string;
  password: string;
}
const BASE_URL: string = "https://api.restful-api.dev/objects";

export const submitSignUpThunk = createAsyncThunk(
  "MainPage/submitSignUpThunk",
  async ({ email, name, password }: submitSignUpProps, thunkAPI) => {
    thunkAPI.dispatch(setPendingSignUp(true));
    try {
      const response = await axios.post(BASE_URL, {
        data: { email: email, name: name, password: password },
      });
      if (response.status === 200) {
        thunkAPI.dispatch(setShouldFade(false));
        thunkAPI.dispatch(setUserDidRegister(true));
        thunkAPI.dispatch(
          setUser({
            email: email,
            login: email.split("@")[0],
            name: name,
            picture_url: null,
            loggedIn: true,
          })
        );
        thunkAPI.dispatch(setError(null));
      } else thunkAPI.dispatch(setError(response.statusText));
    } catch (error) {
      thunkAPI.dispatch(setError(error.message));
    } finally {
      thunkAPI.dispatch(setPendingSignUp(false));
    }
  }
);
