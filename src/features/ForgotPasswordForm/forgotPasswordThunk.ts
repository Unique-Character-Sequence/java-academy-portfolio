import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  setDidRequestPasswordRecovery,
  setError,
} from "../MainPage/MainPageSlice";

const BASE_URL: string = "https://api.restful-api.dev/objects";

export const forgotPasswordThunk = createAsyncThunk(
  "MainPageSlice/forgotPassword",
  async (email: string, thunkAPI) => {
    try {
      const response = await axios.post(BASE_URL, { data: { email } });
      if (response.status === 200) {
        thunkAPI.dispatch(setDidRequestPasswordRecovery(email));
      } else {
        thunkAPI.dispatch(setError(response.statusText));
      }
    } catch (error) {
      thunkAPI.dispatch(setError(error.message));
    }
  }
);
